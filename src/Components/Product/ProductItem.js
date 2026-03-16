import WishButton from "./WishButton.js";
import RemoveButton from "./RemoveButton.js";
import Image from "./Image.js";
import Quantity from "./Quantity.js";
import Price from "./Price.js";
import Ratings from "./Ratings.js";

import { lineTotal } from "../../pricing/pricing.js";

export default function ProductItem(product) {
  const {
    id,
    title,
    images,
    category,
    brand,
    stock,
    ratings,
    price,
    quantity,
    discount,
    availabilityStatus,
    isSelected,
    isWishlisted,
  } = product;

  return `
    <li
      data-id="${id}"
      data-checked="${isSelected}"
      data-wishlisted="${isWishlisted}"
      class="${isSelected ? "border-l-3  border-l-blue-500 bg-blue-100/50 hover:bg-blue-100" : "opacity-60"} product-item flex gap-3 p-4 border-t border-t-gray-300"
    >
      <input
        type="checkbox"
        name="select-item"
        id="select-item"
        ${isSelected && "checked"}
        class="select-item scale-120 cursor-pointer"
      />
      <div class="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
      
        <!-- Product -->
        <div class="order-1 sm:col-span-2 md:col-span-3 flex items-center gap-2">
          <!-- Image -->
          ${Image(images[0])}

          <!-- Product Details -->
          <div class="flex flex-col gap-1">
            <!-- Product Title -->
            <h2 class="font-semibold truncate w-48">${title}</h2>

            <!-- Product Category -->
            <p class="text-xs text-gray-500 capitalize">${category} • ${brand}</p>

            <!-- Product Stock -->
            <p class="flex items-center gap-1 text-xs text-green-400">
              <span class="in-stock"></span>${availabilityStatus} • ${stock} items left
            </p>

            <!-- Rattings -->
            ${Ratings(ratings)}

            <!-- Buttons -->
            <div class="flex gap-2 text-gray-600">
              <!-- Wish button -->
              ${WishButton(isWishlisted)}

              <!-- Remove button -->
              ${RemoveButton(id)}
            </div>
          </div>
        </div>

        <div class="order-3 sm:col-span-2 md:col-span-1 md:order-2 text-center flex items-center justify-center">
          <!-- Quantity -->
          ${Quantity(quantity)}
        </div>

        <div class="order-2 md:order-3 text-center flex justify-end  md:justify-center items-center">
          <!-- Price -->
          ${Price(price, discount)}
        </div>

        <!-- Total -->
        <div class="order-4 text-end flex items-center justify-end">
          <span class="text-lg text-gray-600 font-semibold">$${lineTotal(price, discount, quantity).toFixed(2)}</span>
        </div>
      </div>
    </li>
  `;
}
