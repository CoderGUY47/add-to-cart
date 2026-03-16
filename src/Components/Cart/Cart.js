import EmptyCart from "./EmptyCart.js";
import ProductItem from "../Product/ProductItem.js";
import WishlistButton from "./WishlistButton.js";
import ClearAllButton from "./ClearAllButton.js";

export default function Cart({ cart, isAllSelected }) {
  return `
  <!-- Cart Products -->
    <div class="w-full h-fit flex flex-col bg-gray-50 rounded-lg shadow-lg ">
      <div class="flex justify-between items-center p-4">
        <h1 class="flex items-center gap-4 text-2xl font-semibold">
          Shoping Cart
          <span
            class="text-xs font-semibold bg-purple-500 text-gray-50 px-2 py-1 rounded-full"
            >${cart.length} Items</span
          >
        </h1>

        <div class="flex flex-col sm:flex-row gap-2 text-xs">
          <!-- Wish list button -->
          ${WishlistButton()}

          <!-- Wish list button -->
          ${ClearAllButton()}
        </div>
      </div>

      <ul id="product-container" class="flex flex-col">
        <li class="flex gap-2 p-4 border-t border-gray-300">
          <input
            type="checkbox"
            name="select-all"
            id="select-all"
            ${isAllSelected ? "checked" : ""}
            class="scale-120 cursor-pointer"
          />
          <div
            class="flex-1 grid grid-cols-6 text-xs capitalize text-gray-600"
          >
            <p class="col-span-3">products</p>
            <p class="text-center hidden md:block">quantity</p>
            <p class="text-center hidden md:block">price</p>
            <p class="text-end col-span-3 md:col-span-1">total</p>
          </div>
        </li>

        ${cart.length === 0 ? EmptyCart() : cart.map((product) => ProductItem(product)).join("")}
      </ul>

      <div class="flex justify-between p-4 text-blue-900 bg-blue-200/65 border-t border-t-neutral-300 text-sm">
        <a href="#" class="sm:hidden md:flex md:items-center md:gap-2 hover:underline">
          <i class="fa-solid fa-arrow-left-long"></i>
          <span class="">Continue shopping</span>
        </a>

        <p class="flex items-center gap-1">
          <i class="fa-solid fa-circle-info"></i>
          <span class="hidden md:inline-block">Only selected items are included in checkout.</span>
        </p>
      </div>
    </div>
  `;
}
