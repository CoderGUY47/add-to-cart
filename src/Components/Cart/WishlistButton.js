import { getState } from "../../store/store.js";

export default function WishlistButton() {
  const { wishlist } = getState();

  return `
    <button
      class="flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-purple-500 border border-purple-300 cursor-pointer px-2 py-1 rounded-full"
    >
      <i class="fa-solid fa-heart"></i>
      <span>Wishlist (${wishlist.length})</span>
    </button>
  `;
}
