# Getting Started with Cebu Delights E-Commerce

This guide will help you set up and run the Cebu Delights E-Commerce application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Python** (3.8 or higher)
- **Node.js** (14.0 or higher)
- **npm** (comes with Node.js)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd cebu-delights-ecommerce
```

### 2. Backend Setup

#### a. Create a Virtual Environment (Recommended)

```bash
# Windows
cd backend
python -m venv venv
venv\Scripts\activate

# macOS/Linux
cd backend
python -m venv venv
source venv/bin/activate
```

#### b. Install Dependencies

```bash
pip install -r requirements.txt
```

#### c. Seed the Database

```bash
# Start the server
python start.py
```

Then open your browser and visit: http://localhost:5000/api/seed

This will create the SQLite database and populate it with sample products.

### 3. Frontend Setup

#### a. Install Dependencies

```bash
cd frontend
npm install
```

#### b. Start the Development Server

```bash
npm run dev
```

The frontend will run on http://localhost:5173 (or another port if 5173 is already in use)

## Using the Application

Once both the backend and frontend are running, you can:

1. Browse products by category (Delicacies, Crafts)
2. Add products to your cart
3. View your cart and adjust quantities
4. Proceed to checkout

## Application Structure

### Backend (Python/Flask)

The backend API provides endpoints for:
- Product listing and filtering
- User authentication (register, login)
- Order management

Key files:
- `app.py` - Main application file with routes and database models
- `requirements.txt` - Python dependencies
- `static/` - Static files (images)

### Frontend (React/Tailwind CSS)

The frontend is a single-page application built with:
- React (with TypeScript)
- Tailwind CSS for styling
- Vite for bundling and development

Key files:
- `src/App.tsx` - Main application component
- `src/services/api.ts` - API service for backend communication
- `index.css` - Tailwind CSS configuration

## Deployment

See `DEPLOY.md` for instructions on deploying to Render.com.

## Troubleshooting

### Common Issues

1. **Backend API not responding**
   - Ensure the backend server is running on port 5000
   - Check for any error messages in the terminal

2. **Frontend not connecting to backend**
   - Verify the API URL in `.env` matches your backend URL
   - Check browser console for CORS errors

3. **Database errors**
   - Ensure you've seeded the database by visiting `/api/seed`
   - Check file permissions for the SQLite database

For more help, check the error logs or reach out to the project maintainers.