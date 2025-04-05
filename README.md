# Cebu Delights E-Commerce

An e-commerce web application for selling native delicacies and crafts from Cebu, Philippines.

## Project Structure

```
/cebu-delights-ecommerce
├── frontend/             # React + Tailwind CSS frontend
└── backend/              # Python Flask backend
    ├── app.py            # Main application file
    ├── requirements.txt  # Python dependencies
    ├── static/           # Static files (images, etc.)
    └── templates/        # HTML templates
```

## Features

- Browse products by category (Delicacies, Crafts)
- User authentication (register, login)
- Shopping cart functionality
- Checkout process
- Order history
- Responsive design for mobile and desktop

## Technology Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Python, Flask
- **Database**: SQLite (development), PostgreSQL (production)
- **Deployment**: Render.com (free tier)

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   venv\Scripts\activate  # On Windows
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Seed the database with initial data:
   ```
   python app.py
   ```
   Then visit: http://localhost:5000/api/seed

5. Run the development server:
   ```
   python app.py
   ```
   The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   The frontend will run on http://localhost:5173

## Deployment

This project can be deployed on Render.com using their free tier services.

## License

This project is open source and available under the [MIT License](LICENSE).
