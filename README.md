# Siyala HMS - Customer Web Application

🛎️ Siyala is a comprehensive, multi-chain Hotel Management System built for Sri Lankan hospitality. Seamlessly manage multi-location hotels (e.g., Kandy & Hikkaduwa) from a centralized dashboard. Features advanced kitchen inventory with local vendor tracking, dynamic scaling from small Airbnbs to heritage hotels, and multi-tier analytics.

## About This Branch (`Customer_Web`)

This branch contains the customer-facing web application where guests can:
- Explore hotel locations, rooms, and amenities.
- Book rooms and manage reservations seamlessly.
- View local experiences, dining options, and special offers.
- Manage their customer profiles and booking history.

## Application Structure & Features

The `Customer_Web` frontend is built with a modern, responsive design and includes the following key areas:

### 1. Global Components
- **Navbar & Footer:** Sticky navigation and detailed footer available across all main pages.
- **Language Support:** Built-in Context Provider for multi-language functionality.
- **Floating WhatsApp:** Quick connect button fixed at the bottom right for immediate guest assistance.
- **Scroll to Top:** Convenient navigation for longer pages.
- **Splash Screen:** Engaging initial loading animation.

### 2. Main Pages
- **Home (`/`):** The landing page featuring a live Sri Lankan clock, dynamic background images, location highlights (Kandy Heritage & Hikkaduwa Oceanfront), signature amenities, special offers, and a guest reviews module.
- **About Us (`/about`):** Details the Siyala philosophy, architectural legacy, and a timeline of the brand's journey since 2015.
- **Travel Guide (`/travel`):** Curated local experiences categorized by Culture, Highlands, Wildlife, and Coastal areas, along with transport service arrangements.
- **Contact (`/contact`):** Integrated contact form, quick WhatsApp connect, hotel contact details, and an embedded Google Map of the headquarters.

### 3. Authentication
- **Login (`/login`):** Split-screen glassmorphism design for returning guests, featuring traditional email/password and social login options (Google & Facebook).
- **Register (`/register`):** Account creation page with terms of service agreement, mirroring the premium design of the login page.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (or yarn/pnpm)

### Installation & Setup

1. Clone the repository and switch to the `Customer_Web` branch:
   ```bash
   git clone <repository-url>
   git checkout Customer_Web
   ```

2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Technologies Used
- **Frontend Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Language:** JavaScript
