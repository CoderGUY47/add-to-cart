import { CART, TAX_RATE, PROMOTIONS, SHIPPING_RATES } from "../store/data.js";

// Calculate the discount of an item in floating point number
export const calcDiscount = (discount) => 1 - discount / 100;

// Discounted price of an individual item - (without quantity)
export const discountedPrice = (price, discount) =>
  price * calcDiscount(discount);

// Total price of an individual item - (with quantity)
export const lineTotal = (price, discount, quantity) =>
  discountedPrice(price, discount) * quantity;

// Original price of all items - (with quantity)
export const originalPrice = (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

// Discounted price of all items - (with quantity)
export const subTotal = (items) =>
  items.reduce(
    (sum, item) => sum + lineTotal(item.price, item?.discount, item.quantity),
    0,
  );

// Total savings of all items
export const itemSavings = (items) => originalPrice(items) - subTotal(items);

// Total discount of all items
export const itemDicounts = (items) =>
  items.reduce((sum, item) => sum + item?.discount, 0);

// Shipping amount
export const shipAmount = (method) => SHIPPING_RATES[method];

// Tax amount included
export const taxAmount = () => calcDiscount(TAX_RATE);

// export const applyPromo = (promoCode, amount) =>
//   promoCode.trim() === PROMO.code
//     ? amount * calcDiscount(PROMO.discount)
//     : amount;
