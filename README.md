<div align="center">

  <!-- Cover Image -->
  <img src="./public/cover.png" alt="Foodie Haven Cover" width="100%" style="border-radius: 12px; margin-bottom: 20px;" />

  <!-- Project Title -->
  <h1>🍽️ Foodie Haven</h1>
  <p><strong>Browse • Order • Pay • Reserve – All in One Place</strong></p>

  <!-- Tech Badges -->
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-404D59?style=for-the-badge" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <br><br>

  [🚀 Live Demo](https://foodie-haven.netlify.app) | 
  [📂 View Source](https://github.com/your-username/foodie-haven) |
  [🐞 Report Bug](https://github.com/your-username/foodie-haven/issues) |
  [💡 Suggest Feature](https://github.com/your-username/foodie-haven/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md)

</div>

---

## 🌟 Features

- 🍔 **Interactive Menu** – Browse dishes by category (Appetizers, Main Course, Desserts)
- 🛒 **Guest Cart** – Add items without login (saved in `localStorage`)
- 🔐 **Secure Auth** – JWT-based login/signup with protected routes
- 💳 **Stripe Payments** – Real checkout with `clientSecret` and transaction ID
- 📅 **Table Reservation** – Book a table with date, time, and guest count
- 👤 **User Dashboard** – View cart, payment history, bookings, and reviews
- 👨‍🍳 **Admin Panel** – Manage users, menu items, and bookings
- 📱 **Fully Responsive** – Works on mobile, tablet, and desktop
- 🔁 **Auto Logout** – Redirects to login if token expires or is invalid

---

## 🚀 Live Demo

👉 **[Click here to try the live app](https://foodie-haven.netlify.app)**  
Experience the full flow: browse, add to cart, log in, and simulate a payment.

---

## 🧪 Technologies Used

| Layer       | Tools & Libraries |
|-----------|-------------------|
| **Frontend** | React, Vite, Tailwind CSS, React Router, React Query, Stripe.js |
| **Backend**  | Node.js, Express, MongoDB (Mongoose), JWT |
| **Auth**     | Custom JWT with `access-token` in localStorage |
| **Payments** | Stripe Payment Intents API |
| **Styling**  | Tailwind CSS + Custom Components |
| **UI/UX**    | SweetAlert2, Icons (Heroicons or Lucide) |
| **Hosting**  | Frontend: Netlify/Vercel, Backend: Render/Cloud |
| **Dev Tools**| Axios, Custom Hooks, Vite Dev Server |

---

## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (v16 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local MongoDB
- Stripe account (for test payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/foodie-haven.git
   cd foodie-haven