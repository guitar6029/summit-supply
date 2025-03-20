# Supply Summit

**An exclusive e-commerce platform for premium outdoor boots and casual footwear.**

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Structure](#database-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview
Supply Summit is a fictional online store that specializes in high-quality outdoor boots and casual shoes. The platform showcases a curated collection with immersive imagery, detailed product descriptions, and a smooth checkout process with PayPal integration.

## Features
- **Dynamic Product Listings** – Displaying detailed images, specifications, and pricing.
- **E-Commerce Functionality** – Add to cart, checkout, and payment processing.
- **Secure Authentication** – User accounts with login/signup features.
- **Admin Dashboard** – Manage inventory, orders, and customer data.
- **Responsive UI** – Optimized for desktop and mobile devices.

## Tech Stack
- **Frontend**: Vue.js, Tailwind CSS
- **Backend**: Node.js (Express.js)
- **Database**: PostgreSQL (Neon Postgres)
- **Storage**: AWS S3 (for product images)
- **Payments**: PayPal Integration

## Installation
To set up the project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/supply-summit.git
   cd supply-summit
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables (see below).
4. Start the development server:
   ```sh
   npm run dev
   ```

## Environment Variables
Create a `.env` file in the root directory and add the following:
```env
DATABASE_URL=postgres://user:password@host:port/database
AWS_S3_BUCKET=supplysummit
AWS_REGION=us-east-2
PAYPAL_CLIENT_ID=your-client-id
PAYPAL_SECRET=your-secret-key
```

## Database Structure
The PostgreSQL database consists of a `shoes` table with the following schema:
```sql
CREATE TABLE shoes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    size INTEGER[],
    price NUMERIC(10,2),
    first_section_title TEXT[],
    first_section_quote TEXT,
    first_section_background_image TEXT,
    first_section_background_image_alt TEXT,
    second_section_boot_title TEXT,
    second_section_boot_description TEXT,
    second_section_boot_boldtext TEXT,
    second_section_boot_img TEXT,
    second_section_boot_img_alt TEXT,
    secondary_img TEXT,
    url_slug TEXT,
    description_detailed TEXT,
    material TEXT[],
    features TEXT[],
    care_instructions TEXT[],
    warranty_info TEXT,
    img_url TEXT,
    shoe_type TEXT CHECK(shoe_type IN ('boot', 'casual'))
);
```

## API Endpoints
- `GET /shoes` – Fetch all available shoes.
- `GET /shoes/:id` – Fetch details for a specific shoe.
- `POST /shoes` – Add a new shoe (Admin only).
- `PUT /shoes/:id` – Update shoe details (Admin only).
- `DELETE /shoes/:id` – Remove a shoe (Admin only).

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## License
This project is licensed under the MIT License.

