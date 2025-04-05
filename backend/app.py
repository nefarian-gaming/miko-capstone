from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os
from datetime import datetime, timedelta
import json
import bcrypt
import jwt

app = Flask(__name__)
CORS(app)

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cebu_delights.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your-secret-key'  # Change this in production

db = SQLAlchemy(app)

# Define models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<User {self.username}>'

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(255))
    category = db.Column(db.String(50), nullable=False)
    stock = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'image_url': self.image_url,
            'category': self.category,
            'stock': self.stock
        }

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    status = db.Column(db.String(20), default='pending')  # pending, completed, cancelled
    total_amount = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    items = db.relationship('OrderItem', backref='order', lazy=True)

class OrderItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)

# API Routes

@app.route('/api/products', methods=['GET'])
def get_products():
    category = request.args.get('category')

    if category:
        products = Product.query.filter_by(category=category).all()
    else:
        products = Product.query.all()

    return jsonify([product.to_dict() for product in products])

@app.route('/api/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = Product.query.get_or_404(product_id)
    return jsonify(product.to_dict())

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()

    # Check if user already exists
    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return jsonify({'message': 'User already exists'}), 400

    # Hash the password
    hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())

    # Create new user
    new_user = User(
        username=data['username'],
        email=data['email'],
        password=hashed_password.decode('utf-8')
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()

    user = User.query.filter_by(email=data['email']).first()

    if not user or not bcrypt.checkpw(data['password'].encode('utf-8'), user.password.encode('utf-8')):
        return jsonify({'message': 'Invalid credentials'}), 401

    # Generate JWT token
    token = jwt.encode({
        'user_id': user.id,
        'exp': datetime.utcnow() + timedelta(hours=24)
    }, app.config['SECRET_KEY'])

    return jsonify({
        'token': token,
        'user_id': user.id,
        'username': user.username
    })

@app.route('/api/orders', methods=['POST'])
def create_order():
    data = request.get_json()

    # Verify token (implement token verification middleware in a real app)

    # Create new order
    new_order = Order(
        user_id=data['user_id'],
        total_amount=data['total_amount']
    )

    db.session.add(new_order)
    db.session.commit()

    # Add order items
    for item in data['items']:
        order_item = OrderItem(
            order_id=new_order.id,
            product_id=item['product_id'],
            quantity=item['quantity'],
            price=item['price']
        )
        db.session.add(order_item)

    db.session.commit()

    return jsonify({'message': 'Order created successfully', 'order_id': new_order.id}), 201

# Seed initial data (for development)
@app.route('/api/seed', methods=['GET'])
def seed_data():
    # Clear existing data
    db.drop_all()
    db.create_all()

    # Create sample products
    products = [
        Product(
            name='Dried Mangoes',
            description='Delicious dried mangoes from Cebu, known for their sweetness and natural flavor.',
            price=150.00,
            image_url='/images/dried-mangoes.jpg',
            category='Delicacies',
            stock=100
        ),
        Product(
            name='Otap',
            description='Oval-shaped puff pastry that is crispy and flaky with a sweet taste.',
            price=80.00,
            image_url='/images/otap.jpg',
            category='Delicacies',
            stock=150
        ),
        Product(
            name='Handwoven Bag',
            description='Beautiful handwoven bag made by local artisans in Cebu.',
            price=350.00,
            image_url='/images/handwoven-bag.jpg',
            category='Crafts',
            stock=30
        ),
        Product(
            name='Cebu Guitar',
            description='Handcrafted guitar made in Cebu, known for exceptional quality and sound.',
            price=2500.00,
            image_url='/images/cebu-guitar.jpg',
            category='Crafts',
            stock=15
        ),
        Product(
            name='Danggit (Dried Fish)',
            description='Popular Cebu dried fish, perfect as a breakfast viand with vinegar.',
            price=200.00,
            image_url='/images/danggit.jpg',
            category='Delicacies',
            stock=80
        ),
        Product(
            name='Masareal',
            description='Traditional Cebuano delicacy made from ground peanuts and sugar.',
            price=100.00,
            image_url='/images/masareal.jpg',
            category='Delicacies',
            stock=60
        ),
        Product(
            name='Shell Craft Decor',
            description='Decorative item made from seashells by skilled Cebuano craftsmen.',
            price=280.00,
            image_url='/images/shell-craft.jpg',
            category='Crafts',
            stock=40
        ),
        Product(
            name='Coconut Shell Art',
            description='Artistic pieces made from coconut shells, showcasing Cebuano creativity.',
            price=320.00,
            image_url='/images/coconut-art.jpg',
            category='Crafts',
            stock=25
        )
    ]

    for product in products:
        db.session.add(product)

    db.session.commit()

    return jsonify({'message': 'Database seeded successfully'})

# Serve static files
@app.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory('static/images', filename)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create database tables if they don't exist
    app.run(debug=True)