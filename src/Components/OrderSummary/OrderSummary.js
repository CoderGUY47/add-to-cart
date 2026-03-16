import { SHIPPING_METHODS } from "../../store/data.js";
import ShippingMethod from "./ShippingMethod.js";
import PromoCard from "./PromoCard.js";
import CheckoutButton from "./CheckoutButton.js";

import {
  originalPrice,
  subTotal,
  itemSavings,
  shipAmount,
  taxAmount,
} from "../../pricing/pricing.js";

export default function OrderSummary({ selectedItems: items, shipMethod }) {
  const sub_total = items.length && subTotal(items);
  const ship_amount = items.length && shipAmount(shipMethod);
  const tax_amount = items.length && taxAmount();
  const item_savings = items.length && itemSavings(items);
  const original_price = items.length && originalPrice(items);
  const grand_total =
    items.length && (sub_total + ship_amount + tax_amount).toFixed(2);

  return `
    <!-- Order Summary -->
    <div class="h-fit flex flex-col gap-4 p-4 bg-gray-50 rounded-lg shadow-lg ">
      <!-- Tittle -->
      <h1 class="text-2xl font-semibold">Order Summary</h1>

      <hr class="border-t border-gray-300" />

      <div class="flex flex-col gap-4 text-sm text-gray-700">
        <ul class="">
          <li class="flex justify-between border-b border-gray-300 p-2">
            <span class="">Original Price</span>
            <span class="font-semibold">$${original_price.toFixed(2)}</span>
          </li>

          <li class="flex justify-between border-b border-gray-300 p-2">
            <span class="">Discounted Price</span>
            <span class="font-semibold">$${sub_total.toFixed(2)}</span>
          </li>

          <li class="flex justify-between border-b border-gray-300 p-2">
            <span class="">Total Savings</span>
            <span class="font-semibold text-green-500">-$${item_savings.toFixed(2)}</span>
          </li>
        </ul>

        <!-- Shipping Methods -->
        <fieldset class="space-y-2">
          <legend class="text-sm text-gray-500 font-semibold">
            Shipping
          </legend>

          ${SHIPPING_METHODS.map((method) => ShippingMethod(method)).join("")}
        </fieldset>

        <hr class="border-t border-gray-300" />

        <!-- Promo card -->
        ${PromoCard()}

        <hr class="border-t border-gray-300" />

        <ul class="">
          <li class="flex justify-between border-b border-gray-300 p-2">
            <span class="">Subtotal</span>
            <span class="font-semibold">$${sub_total.toFixed(2)}</span>
          </li>

          <li class="flex justify-between border-b border-gray-300 p-2">
            <span class="">Shipping</span>
            <span class="font-semibold">$${ship_amount.toFixed(2)}</span>
          </li>

          <li class="flex justify-between border-b border-gray-300 p-2">
            <span class="">Tax (8%)</span>
            <span class="font-semibold">$${tax_amount.toFixed(2)}</span>
          </li>

          <li class="flex justify-between border-b border-gray-300 p-2">
            <span class="">Grand Total</span>
            <span class="font-semibold">$${grand_total}</span>
          </li>
        </ul>

        <!-- Checkout Button -->
        ${CheckoutButton()}

        <div class="text-center text-xs opacity-65">
          <p>
            <i class="fa-solid fa-lock"></i>
            Secure payment
          </p>
        </div>
      </div>
    </div>
  `;
}
