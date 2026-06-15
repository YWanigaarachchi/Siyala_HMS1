# Siyala HMS - Unified Hotel Management System

🛎️ Siyala is a comprehensive, multi-chain Hotel Management System built for Sri Lankan hospitality. Seamlessly manage multi-location hotels (e.g., Kandy Heritage & Hikkaduwa Oceanfront) from a centralized infrastructure. The system is designed to dynamically scale from boutique Airbnbs to large heritage hotels.

## About This Branch (`main`)

This is the unified `main` branch. It integrates all four major portals of the Siyala HMS into a single React application. Everything runs seamlessly on one development server through nested routing.

## 🔗 Portals & Routing

The system is cleanly divided into four distinct areas:

### 1. Customer Website (`/`)
The public-facing website for guest acquisition and branding.
* **Features:** Landing page, About Us (Heritage & Architecture), Travel Guide (Curated Local Experiences), Contact & Location Maps, and split-screen Authentication (Login/Register).
* **Routing:** `/*` (e.g., `/`, `/about`, `/travel`, `/login`)

### 2. Customer Dashboard (`/dashboard/`)
The private portal for authenticated guests to manage their relationship with Siyala.
* **Features:** Booking management (My Bookings), Room Booking interface, Payment History, Customer Support Tickets, and comprehensive Account/Notification Settings.
* **Routing:** `/dashboard/*` (e.g., `/dashboard/`, `/dashboard/my-bookings`, `/dashboard/settings`)

### 3. Manager Portal (`/manager/`)
The operational portal for Branch Managers to oversee daily hotel activities.
* **Features:** Live occupancy analytics, Hotel configuration, Reservation management, Employee oversight, Inventory tracking, and localized Financial reports.
* **Routing:** `/manager/*` (e.g., `/manager/`, `/manager/inventory-management`, `/manager/finance`)

### 4. Admin Portal (`/admin/`)
The centralized command center for system administrators and hotel chain owners.
* **Features:** Global analytics across all branches, Multi-hotel management, Cross-branch inventory, Manager/Employee creation, Customer CRM, and high-level Finance.
* **Routing:** `/admin/*` (e.g., `/admin/`, `/admin/hotel-management`, `/admin/analytics`)

## 🛠️ Application Architecture

* **Unified `App.jsx`**: Controls the top-level routing, directing traffic to `CustomerApp`, `CustomerDashboardApp`, `ManagerApp`, or `AdminApp` based on the URL path.
* **Layouts**: 
  * `DashboardLayout.jsx`: The standardized sidebar-navigation wrapper used by Admin and Manager portals.
  * `CustomerDashLayout.jsx`: A refined sidebar wrapper tailored specifically for the Customer Dashboard.
* **Global Context**: `LanguageContext` enables dynamic switching between English, Sinhala, and Tamil across all portals.
* **Design System**: A consistent Emerald and Amber color palette is used throughout. It utilizes modern glassmorphism, responsive grids, and Recharts for live data visualization.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (or yarn/pnpm)

### Installation & Setup

1. Clone the repository and ensure you are on the `main` branch:
   ```bash
   git clone <repository-url>
   git checkout main
   ```

2. Navigate to the `frontend` directory (crucial):
   ```bash
   cd frontend
   ```

3. Install all dependencies:
   ```bash
   npm install
   ```

4. Start the Vite development server:
   ```bash
   npm run dev
   ```

5. Access the portals in your browser:
   * **Main Site:** `http://localhost:5173/`
   * **Customer Dash:** `http://localhost:5173/dashboard/`
   * **Manager Portal:** `http://localhost:5173/manager/`
   * **Admin Portal:** `http://localhost:5173/admin/`

## 💻 Technologies Used
- **Frontend Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (with arbitrary value support and complex grid layouts)
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **Data Visualization:** Recharts
- **Language:** Modern JavaScript (ES6+)
