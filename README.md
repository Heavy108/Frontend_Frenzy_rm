To create a **README** for your project, here's a basic template you can follow, specifically focusing on the **Menu Page** and **Order Summary Page** being active.

---

# **Food Order Application**

This is a food order application built using **Next.js**. It allows users to view a menu, add items to their cart, view their order summary, and place an order.

---

## **Features**

- **Menu Page**: Displays a list of food items available for purchase. Users can add these items to their cart.
- **Order Summary Page**: Shows a summary of the items in the user's cart, including the quantity, price, and total cost. Users can modify the quantity or remove items. They can also place an order.

---

## **Pages**

### **1. Menu Page**
- URL: `/menu`
- Displays a list of food items with an option to add them to the cart.
- Each item has a name, description, price, and an "Add to Cart" button.
- When an item is added to the cart, it updates the cart in **localStorage**.

### **2. Order Summary Page**
- URL: `/order-summary`
- Shows a summary of the items currently in the user's cart.
- Users can modify the quantity of items (by clicking "Add More") or remove items (by clicking "Delete").
- Displays the total price of the cart.
- Includes a "Place Order" button that clears the cart and redirects to the **Thank You Page**.

---

## **Technologies Used**
- **Next.js**: Framework for server-side rendering and building React-based applications.
- **React**: JavaScript library for building user interfaces.
- **CSS Modules**: For styling individual components in a scoped manner.
- **localStorage**: To store cart data persistently in the browser.

---

## **Installation**

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/food-order-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd food-order-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Visit the application at `http://localhost:3000`.

---

## **Folder Structure**

```bash
food-order-app/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── MenuItem.js
├── pages/
│   ├── index.js         # Home page or Menu page
│   ├── order-summary.js # Order Summary page
│   ├── thank-you.js     # Thank You page after placing the order
├── public/
│   ├── found.svg        # Image for empty cart
├── css/
│   ├── OrderSummary.module.css
│   ├── Menu.module.css
├── package.json
└── README.md
```

---

## **How to Use**

1. **Menu Page**:
   - Go to the `/menu` page where you can view a list of food items.
   - Click the "Add to Cart" button to add an item to your cart.

2. **Order Summary Page**:
   - After adding items to the cart, navigate to the `/order-summary` page.
   - You can increase the quantity of any item or delete it.
   - The total cost will automatically update.
   - Click the "Place Order" button to complete the order. You will be redirected to the **Thank You Page**.

3. **Thank You Page**:
   - After placing an order, you'll be shown a confirmation message on the Thank You Page.

---

## **Deployment**

You can deploy this project using services like **Vercel** or **Netlify**.

---

## **License**

This project is licensed under the **MIT License**.

---

By following this README, anyone can understand the structure of the **Menu Page** and **Order Summary Page**, and how to interact with them in the app.