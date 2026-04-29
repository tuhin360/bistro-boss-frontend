<div align="center">

<!-- Cover Image -->
<img src="./src/assets/home/01.jpg" alt="Bistro Boss Cover" width="100%" style="border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); margin-bottom: 24px;" />

<!-- Logo & Title -->
<img src="https://img.icons8.com/fluency/96/000000/restaurant.png" alt="Restaurant Icon" width="70" />

<h1 style="background: linear-gradient(90deg, #FF8C00, #FF6347, #D2691E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 3.2em; font-weight: 900; margin: 10px 0;">
  Bistro Boss Restaurant
</h1>

<p><strong>🔥 The Ultimate Online Restaurant Ordering & Management Platform</strong></p>

<!-- Animated Tech Badges -->
<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&animation=slow" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white&animation=slow" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white&animation=slow" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white&animation=slow" alt="Express" />
</p>
<p>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white&animation=slow" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white&animation=slow" alt="Stripe" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white&animation=slow" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black&animation=slow" alt="Firebase" />
</p>

<!-- Quick Links -->
<div style="margin: 20px 0;">
  <a href="https://bistro-boss-97f52.web.app">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-22C55E?style=plastic&logo=netlify&logoColor=white&labelColor=000000" alt="Live Demo" />
  </a>
</div>

</div>

---

### 🌈 Why Bistro Boss?

> 🍽️ **From menu to management** — Bistro Boss is a **full‑stack restaurant solution** built for owners, developers, and food lovers.  
> 💡 Clean UI, secure payments, and powerful admin tools — all in one place.

---

## 🌟 Features That Shine

| ✅ Feature | 🎯 Benefit |
|----------|-----------|
| 🍔 **Beautiful Menu UI** | Swiper sliders + AOS animations for stunning visuals |
| 🛒 **Guest Cart** | Add items without login (saved via `localforage`) |
| 🔐 **Firebase + JWT Auth** | Secure login with role‑based access |
| 💳 **Stripe Checkout** | Real payments with `PaymentIntent` |
| 📊 **Live Sales Charts** | Visualize revenue with `Recharts` |
| ⭐ **Star Ratings** | Interactive feedback with `@smastrom/react-rating` |
| 📅 **Table Booking** | Reserve with date, time, and guest count |
| 🎨 **Parallax & AOS** | Scroll animations for cinematic feel |
| 📱 **Fully Responsive** | Works on mobile, tablet, and desktop |

---

## 🚀 Live Demo

<p align="center">
  <a href="https://bistro-boss-97f52.web.app">
    <img src="https://img.shields.io/badge/👉_Click_Here_to_Try-FF8C00?style=for-the-badge&logo=netlify&logoColor=white&labelColor=black" />
  </a>
</p>

✅ Experience the full flow:  
1. Browse the menu  
2. Add items to cart  
3. Log in or sign up  
4. Pay securely with Stripe  
5. View order history in dashboard

---

## 🧪 Tech Stack

### Frontend
- React  
- Vite  
- Tailwind CSS  
- DaisyUI  
- React Router  

### Backend
- Node.js  
- Express.js  
- MongoDB  

### Tools & Libraries
- Firebase Auth  
- Stripe  
- React Query  
- Axios  
- SweetAlert2  
- Recharts  

---

## 📁 Project Structure

```text
src/
├── assets/        # Images, icons, and other static files
├── components/    # Reusable UI components
├── firebase/      # Firebase configuration and setup
├── hooks/         # Custom React hooks
├── layout/        # Layout components (Navbar, Dashboard layout, etc.)
├── pages/         # Page components for each route
├── providers/     # Context providers (e.g., AuthProvider)
├── routes/        # Route configuration
└── utils/         # Helper functions and utility modules
```

---

## 📦 Dependencies

### Core
- `react` – UI library for building components  
- `react-dom` – React DOM rendering support  
- `react-router-dom` – Routing system for navigation  

### Data Fetching & State
- `@tanstack/react-query` – Server state management & caching  
- `axios` – HTTP client for API requests  

### Authentication & Security
- `firebase` – Authentication and backend services  
- `react-hook-form` – Form handling and validation  
- `react-simple-captcha` – CAPTCHA verification for security  

### Payment
- `@stripe/react-stripe-js` – Stripe React integration  
- `@stripe/stripe-js` – Stripe payment SDK  

### UI & Styling
- `tailwindcss` – Utility‑first CSS framework  
- `daisyui` – Built‑in Tailwind UI components  
- `aos` – Scroll animations  
- `swiper` – Touch slider/carousel  
- `react-tabs` – Tab UI components  
- `react-icons` – Icon library  
- `lucide-react` – Modern SVG icons  
- `sweetalert2` – Beautiful alert modals  
- `react-responsive-carousel` – Responsive image carousel  

### Charts & Visualization
- `recharts` – Data visualization & charts  

### Utilities
- `localforage` – Offline storage (IndexedDB wrapper)  
- `match-sorter` – Fuzzy searching and sorting  
- `sort-by` – Sorting utility helper  
- `react-helmet-async` – SEO meta tag management  
- `@emailjs/browser` – Send emails from frontend  
- `@smastrom/react-rating` – Star rating component  
- `react-rating` – Simple rating UI component  

---

## 🛠️ Clone from GitHub

```bash
git clone https://github.com/tuhin360/bistro-boss-frontend.git
cd bistro-boss-frontend
```

---

## 📦 Install Dependencies

```bash
pnpm install
```

---

## 🔑 Setup Environment Variables

Create a `.env.local` file in the root directory and fill it like this:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_appId
VITE_IMAGE_HOSTING_KEY=your_image_hosting_key
VITE_Payment_Gateway_PK=your_payment_gateway_pk
```

---

## ▶️ Run the project

```bash
pnpm dev
```

---

## 🔐 Admin Access (Demo)

- Email: [jhon@gmail.com](mailto:jhon@gmail.com)  
- Password: `*Jhon123#`

---

## 📊 Dashboard Features

- Manage Users (Admin/User roles)  
- Add / Update / Delete Menu Items  
- View Sales Analytics  
- Manage Orders  

### Admin Dashboard Screenshots


<div align="center">
  <img src="./src/assets/dashboard/admin-dashboard-analytics.png" alt="Admin Dashboard Analytics" width="80%" style="border-radius: 8px; margin: 12px 0;" />
  <img src="./src/assets/dashboard/admin-add-item.png" alt="Admin Add Item" width="80%" style="border-radius: 8px; margin: 12px 0;" />
  <img src="./src/assets/dashboard/admin-manage_item.png" alt="Admin Manage Item" width="80%" style="border-radius: 8px; margin: 12px 0;" />
  <img src="./src/assets/dashboard/admin-manage_booking.png" alt="Admin Manage Booking" width="80%" style="border-radius: 8px; margin: 12px 0;" />
  <img src="./src/assets/dashboard/admin-manage-user.png" alt="Admin Manage User" width="80%" style="border-radius: 8px; margin: 12px 0;" />
</div>


---

## 🚀 Future Improvements

- 🔔 Real‑time notifications  
- 📦 Order tracking system  
- 🌍 Multi‑language support  
- 📱 Mobile App (React Native)  

---

## 👨‍💻 Author

**Jahedi Alam Tuhin**  
GitHub: [https://github.com/tuhin360](https://github.com/tuhin360)

---

> 📌 This repo contains the **frontend** for Bistro Boss. Backend runs on a separate Node.js + Express + MongoDB project.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!