export default function WishButton(isWishlisted) {
  return `
    <button 
    id="wish-button"
    class="flex justify-center items-center gap-1 text-xs ${isWishlisted ? "text-red-500" : ""} hover:text-red-500 cursor-pointer"
    >
      ${isWishlisted ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'}
      ${isWishlisted ? "Wishlisted" : "Wishlist"} 
    </button>
  `;
}
