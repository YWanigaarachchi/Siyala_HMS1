# Siyala_HMS1

🛎️ Siyala is a comprehensive, multi-chain Hotel Management System built for Sri Lankan hospitality. Seamlessly manage multi-location hotels (e.g., Kandy & Hikkaduwa) from a centralized dashboard. Features advanced kitchen inventory with local vendor tracking, dynamic scaling from small Airbnbs to heritage hotels, and multi-tier analytics.

## About This Branch (`Manager_Dash`)

This branch contains the manager-facing dashboard for the Siyala Hotel Management System. It provides comprehensive tools for hotel managers to oversee operations, manage bookings, control inventory, and analyze performance across their properties.

## Application Structure & Features

The `Manager_Dash` frontend is built with a modern, responsive design and includes the following key areas:

### 1. Global Components
- **Navbar & Footer:** Sticky navigation and detailed footer available across all main pages.
- **Language Support:** Built-in Context Provider for multi-language functionality.
- **Floating WhatsApp:** Quick connect button fixed at the bottom right for immediate guest assistance.
- **Scroll to Top:** Convenient navigation for longer pages.
- **Splash Screen:** Engaging initial loading animation.

### 2. Main Pages
- **Home (`/`):** The central hub for hotel management. Features a dynamic Sri Lankan clock, multi-location overview, booking statistics, recent bookings, room status overview, and quick access to key management modules.
- **Hotel Management (`/hotel-management`):** Manage hotel properties, locations, and room types.
- **Reservation Management (`/reservation-management`):** Handle all guest reservations and bookings.
- **Inventory Management (`/inventory-management`):** Track and manage hotel inventory and supplies.
- **Employee Management (`/employee-management`):** Manage hotel staff and employee information.
- **Finance (`/finance`):** Financial reporting and analytics.
- **Analytics (`/analytics`):** Advanced analytics and business intelligence.
- **Settings (`/settings`):** System and user settings configuration.

### 3. Authentication
- **Login (`/login`):** Split-screen glassmorphism design for returning guests, featuring traditional email/password and social login options (Google & Facebook).
- **Register (`/register`):** Account creation page with terms of service agreement, mirroring the premium design of the login page.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (or yarn/pnpm)

### Installation & Setup

1. Clone the repository and switch to the `Manager_Dash` branch:
   ```bash
   git clone <repository-url>
   git checkout Manager_Dash
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
