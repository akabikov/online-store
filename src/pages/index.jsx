export default [
  { page: "SingleProductPage", path: "/products/:id" },
  {
    page: "ProductsPage",
    path: "/products",
    title: "Products",
    menuIdx: 1,
  },
  { page: "CartPage", path: "/cart", title: "Cart", menuIdx: 2 },
  { page: "ContactPage", path: "/contact", title: "Contact", menuIdx: 3 },
  { page: "AboutPage", path: "/about", title: "About", menuIdx: 4 },
  { page: "CheckoutPage", path: "/checkout" },
  { page: "SuccessPage", path: "/success" },
  { page: "HomePage", path: "/", title: "Home", menuIdx: 0 },
  { page: "NotFound" },
];
