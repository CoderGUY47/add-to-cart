<div align="center">

# 🛒 Add-to-Cart

### Premium Shopping Cart & Order Summary Interface

*A high-fidelity modular Vanilla JavaScript interactive checkout and order management interface.*

[![React-style PubSub](https://img.shields.io/badge/Architecture-PubSub_State-6366f1?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
&nbsp;
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
&nbsp;
[![Vanilla JS](https://img.shields.io/badge/ES6-Vanilla_JS-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [❌ The Problem & ✅ The Solution](#-the-problem---the-solution)
- [💡 Business Value](#-business-value)
- [🚀 Key Features](#-key-features)
- [📦 Tech Stack & Architecture](#-tech-stack--architecture)
- [📂 Project Structure](#-project-structure)
- [🛠️ Installation & Setup](#️-installation--setup)
- [🤝 Social & Contributing](#-social--contributing)

---

## ✨ Overview

**Add-to-Cart** is a production-grade, modular shopping cart and checkout interface built entirely with Vanilla ES6+ JavaScript, custom templates, and Tailwind CSS. It demonstrates a lightweight alternative to heavy frameworks by utilizing a custom PubSub state store to manage items, selection states, promo code discounts, and dynamic shipping calculations in real-time.

Instead of writing standard spaghetti jQuery or DOM manipulation code, this project utilizes a reactive state subscription mechanism. When the user checks an item, increases quantity, or applies a promo code, the state store updates and automatically re-renders the UI components (`Cart` and `OrderSummary`) dynamically.

---

## ❌ The Problem & ✅ The Solution

> **E-commerce checkouts demand fluid, zero-latency interactions.**

Most plain JavaScript e-commerce implementations suffer from disjointed state where quantity changes in the cart fail to sync with taxes, discounts, and order totals.

| ❌ The Problem | ✅ Add-to-Cart's Solution |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| DOM-scraping logic leads to out-of-sync cart totals | Centrally managed **reactive store** acting as a single source of truth |
| Rigid checkouts where users must buy everything in cart | Interactive **select-to-buy checkbox flow** calculating checkout subtotal live |
| No way to save items for later without deleting them | Integrated **Wishlist (Heart)** toggle to move items between lists |
| Flat shipping rates regardless of checkout urgency | Dynamic **shipping selector** updating standard/express rates in real-time |
| Static templates hard to scale with new features | **Modular UI component templates** rendering dynamically from state |

---

## 💡 Business Value

| Feature | Impact |
| --------------------------------- | ------------------------------------------------------------------------------- |
| **PubSub Architecture** | Facilitates clean state updates without full-page reloads, reducing churn |
| **Dynamic Shipping Rules** | Context-aware pricing and delivery tiers improve checkout transparency |
| **Responsive Grid Layout** | Optimized for mobile shoppers, preventing checkout drop-offs on small screens |

---

## 🚀 Key Features

- **⚡ Reactive PubSub Store** — State updates propagate to subscribers instantly, keeping totals, quantities, and selections perfectly synchronized.
- **✅ Selected Items Flow** — Toggle individual or all items in the cart; totals only compute for checked products.
- **📦 Dynamic Quantity Toggles** — Instantly increase/decrease product quantities with automatic subtotal recalculation.
- **🚚 Multiple Shipping Methods** — Toggle between Standard and Express delivery to update order totals on the fly.
- **🏷️ Promo Code Engine** — Apply active codes (e.g., `SAVE-20%`) to apply instant discounts.
- **❤️ Wishlist Stashing** — Heart icons let users mark products for later consideration.

---

## 📦 Tech Stack & Architecture

### Core Architecture

- **State Management** — PubSub (Publish-Subscribe) Store pattern (`store.js`)
- **Rendering Engine** — Dynamic ES6 String Template Components
- **Style Engine** — Tailwind CSS v4 CDN + Font Awesome 6 Icons

---

## 📂 Project Structure

```text
add-to-cart/
├── assets/                 # Brand assets & static graphics
├── css/                    # Custom global styles
├── images/                 # Product catalog images
├── src/
│   ├── Components/
│   │   ├── Cart/           # Cart list container & product items
│   │   └── OrderSummary/   # Total breakdown & promo inputs
│   ├── store/
│   │   ├── data.js         # Initial mock product data
│   │   └── store.js        # PubSub state manager & action creators
│   └── main.js             # Event routing & entry point
├── index.html              # Shell layout file
└── package.json            # Dev metadata
```

---

## 🛠️ Installation & Setup

1. **Clone & Browse**

   ```bash
   git clone https://github.com/CoderGUY47/add-to-cart.git
   cd add-to-cart
   ```

2. **Run Locally**

   Since this project uses native ES6 modules, it must be run from a local server environment (e.g., Live Server extension in VS Code or any local static server utility).

   ```bash
   # Example using npx http-server
   npx http-server .
   ```

---

## 🤝 Social & Contributing

<div align="center">

Produced with precision by **[CoderGUY47](https://github.com/CoderGUY47)**.

[![GitHub](https://img.shields.io/badge/GitHub-CoderGUY47-181717?style=for-the-badge&logo=github)](https://github.com/CoderGUY47)

</div>
