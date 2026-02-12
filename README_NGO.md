# NGO Website - User Guide

## Getting Started

1.  **Install Dependencies** (if you haven't already):
    ```bash
    npm install
    npm install react-router-dom lucide-react
    ```

2.  **Start the Website**:
    ```bash
    npm run dev
    ```
    Access the website at: **http://localhost:5173**

## Features & Navigation

### 1. Public Website
*   **Header**: Displays "Hope Foundation" and Registration Number.
*   **Notifications**: Click the **"Updates"** tag in the top-right to view latest announcements.
    *   Each update includes a link to a Google Form.
*   **Home Page**:
    *   **Vision & Mission**: displayed side-by-side.
    *   **Founder Details**: located below the vision/mission section.
*   **Footer**: Contains contact information (Address, Phone, Email).

### 2. Admin Panel
*   **URL**: [http://localhost:5173/admin](http://localhost:5173/admin)
*   **Login Credentials**:
    *   **Username**: `admin`
    *   **Password**: `admin123`
*   **Capabilities**:
    *   Add new notifications with title, date, content, and Google Form link.
    *   Delete old notifications.
    *   *Note: Data is saved to your browser's Local Storage.*

## Project Structure
*   `src/pages/`: Contains Home, Notifications, and Admin pages.
*   `src/components/`: Header and Footer components.
*   `src/context/`: Manages notification data state.
