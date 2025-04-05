# Deployment Guide

This guide will help you deploy the Cebu Delights E-Commerce application on Render.com using their free tier services.

## Prerequisites

1. Sign up for a free account on [Render.com](https://render.com)
2. Connect your GitHub repository to Render (or deploy directly from your local files)

## Deployment Steps

### Option 1: Manual Deployment

#### Backend Deployment

1. From your Render dashboard, click "New Web Service"
2. Connect your repository or upload files directly
3. Configure your service:
   - Name: cebu-delights-backend
   - Environment: Python
   - Build Command: `pip install -r backend/requirements.txt`
   - Start Command: `cd backend && gunicorn app:app`
   - Add the following environment variables:
     - `PYTHON_VERSION`: 3.9.0
     - `SECRET_KEY`: Generate a secure random string

#### Frontend Deployment

1. From your Render dashboard, click "New Static Site"
2. Connect your repository or upload files directly
3. Configure your static site:
   - Name: cebu-delights-frontend
   - Build Command: `cd frontend && npm install && npm run build`
   - Publish Directory: `frontend/dist`
   - Add environment variables if needed (e.g., `VITE_API_URL` pointing to your backend)

4. Set up any required headers or redirects in the "Settings" tab

### Option 2: Using render.yaml

For easier deployment, you can use the `render.yaml` file included in this repository. This allows you to deploy both services at once.

1. From your Render dashboard, click "New Blueprint"
2. Connect your repository or upload files directly
3. Render will automatically detect the `render.yaml` file and set up the services
4. Review the configuration and click "Apply"

## Post-Deployment

After deployment, you'll need to:

1. Update the frontend API configuration to point to your new backend URL
2. Seed the database by visiting: `https://your-backend-url.onrender.com/api/seed`
3. Test the application by visiting your frontend URL

## Free Tier Limitations

Be aware of Render's free tier limitations:

- Free web services spin down after 15 minutes of inactivity
- You get 750 hours of free usage per month
- Storage is limited to 1GB

For production use, consider upgrading to a paid plan.

## Troubleshooting

- If you encounter CORS issues, ensure your backend CORS configuration includes your frontend URL
- Check the Render logs for any deployment or runtime errors
- Make sure all environment variables are correctly set

## Updating Your Deployment

Any commits to your connected repository will trigger automatic redeployments on Render.