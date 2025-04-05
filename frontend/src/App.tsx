import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ProductCard from './components/ProductCard'
import { Product, CartItem } from './types'
import './App.css'
import Hero from './components/Hero'
import FeaturesBar from './components/FeaturesBar'
import Bestsellers from './components/Bestsellers'

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(true);
  const [showCart, setShowCart] = useState<boolean>(false);

  // Mock API call - in production this would fetch from backend
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Dried Mangoes',
        description: 'Delicious dried mangoes from Cebu, known for their sweetness and natural flavor.',
        price: 150.00,
        image_url: 'https://via.placeholder.com/300x200?text=Dried+Mangoes',
        category: 'Delicacies',
        stock: 100
      },
      {
        id: 2,
        name: 'Otap',
        description: 'Oval-shaped puff pastry that is crispy and flaky with a sweet taste.',
        price: 80.00,
        image_url: 'https://via.placeholder.com/300x200?text=Otap',
        category: 'Delicacies',
        stock: 150
      },
      {
        id: 3,
        name: 'Handwoven Bag',
        description: 'Beautiful handwoven bag made by local artisans in Cebu.',
        price: 350.00,
        image_url: 'https://via.placeholder.com/300x200?text=Handwoven+Bag',
        category: 'Crafts',
        stock: 30
      },
      {
        id: 4,
        name: 'Cebu Guitar',
        description: 'Handcrafted guitar made in Cebu, known for exceptional quality and sound.',
        price: 2500.00,
        image_url: 'https://via.placeholder.com/300x200?text=Cebu+Guitar',
        category: 'Crafts',
        stock: 15
      },
      {
        id: 5,
        name: 'Danggit (Dried Fish)',
        description: 'Popular Cebu dried fish, perfect as a breakfast viand with vinegar.',
        price: 200.00,
        image_url: 'https://via.placeholder.com/300x200?text=Danggit',
        category: 'Delicacies',
        stock: 80
      },
      {
        id: 6,
        name: 'Masareal',
        description: 'Traditional Cebuano delicacy made from ground peanuts and sugar.',
        price: 100.00,
        image_url: 'https://via.placeholder.com/300x200?text=Masareal',
        category: 'Delicacies',
        stock: 60
      },
      {
        id: 7,
        name: 'Shell Craft Decor',
        description: 'Decorative item made from seashells by skilled Cebuano craftsmen.',
        price: 280.00,
        image_url: 'https://via.placeholder.com/300x200?text=Shell+Craft',
        category: 'Crafts',
        stock: 40
      },
      {
        id: 8,
        name: 'Coconut Shell Art',
        description: 'Artistic pieces made from coconut shells, showcasing Cebuano creativity.',
        price: 320.00,
        image_url: 'https://via.placeholder.com/300x200?text=Coconut+Art',
        category: 'Crafts',
        stock: 25
      }
    ];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
    setLoading(false);
  }, []);

  // Filter products by category
  const filterProducts = (category: string) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  // Update item quantity in cart
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Home page component
  const HomePage = () => (
    <div>
      <Header />
      <Hero />
      <FeaturesBar />
      <Bestsellers />
      {/* Add Footer component later */}
    </div>
  );

  // About Page
  const AboutPage = () => (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">About Cebu Delights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Cebu Delights started with a simple mission: to share the wonderful products of Cebu with the rest of the world.
            Founded in 2023, we've curated the finest selection of native delicacies and crafts from talented local artisans and food producers.
          </p>
          <p className="text-gray-600">
            We believe in supporting local communities and preserving traditional craftsmanship while providing our customers with authentic,
            high-quality products that showcase the rich cultural heritage of Cebu.
          </p>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg"></div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-3">Authenticity</h3>
            <p className="text-gray-600">We ensure all our products are genuinely sourced from Cebu, preserving authentic flavors and craftsmanship.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-3">Quality</h3>
            <p className="text-gray-600">Each product is carefully selected and inspected to meet our high standards of quality and excellence.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-3">Community</h3>
            <p className="text-gray-600">We support local artisans and producers, helping to sustain traditional skills and livelihoods.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Contact Page
  const ContactPage = () => (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600 mb-6">
            Have questions or feedback? We'd love to hear from you! Fill out the form and we'll get back to you as soon as possible.
          </p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Our Information</h2>
            <p className="text-gray-600">Email: info@cebudelights.com</p>
            <p className="text-gray-600">Phone: +63 12 345 6789</p>
            <p className="text-gray-600">Address: Cebu City, Philippines</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <input type="text" id="name" className="input w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input type="email" id="email" className="input w-full" />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
              <input type="text" id="subject" className="input w-full" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <textarea id="message" rows={4} className="input w-full"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={cart.length} toggleCart={() => setShowCart(!showCart)} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Cart
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />

      <Footer />
    </div>
  )
}

export default App
