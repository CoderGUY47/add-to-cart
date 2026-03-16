import { discountedPrice } from "../../pricing/pricing.js";

export default function Price(price, discount) {
  return `
    <div class="flex flex-col items-center">
      <!-- Discounted price -->
      <span class="text sm text-gray-600 font-semibold">$${discountedPrice(price, discount).toFixed(2)}</span>

      <!-- Original price -->
      <span class="text-sm text-gray-400 font-semibold line-through">$${price}</span>

      <!-- Discount -->
      <span class="flex gap-1 items-center text-xs text-red-500 rounded-lg">
        <i class="fa-solid fa-tags"></i>
        ${discount}% OFF
      </span>
    </div>
  `;
}
