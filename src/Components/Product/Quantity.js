export default function Quantity(quantity = 1) {
  return `
    <div
      id="product-quantity"
      class="flex justify-between items-center text-gray-700 border border-gray-300 rounded-lg shadow over"
    >
      <button
        id="decrease-quantity"
        class="w-[52px] sm:w-[34px] h-[30px] cursor-pointer hover:bg-gray-300"
      >
        -
      </button>
      <input
        type="number"
        id="quantity"
        value="${quantity}"
        class="w-[52px] sm:w-[34px] h-[30px] text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        id="increase-quantity"
        class="w-[52px] sm:w-[34px] h-[30px] cursor-pointer hover:bg-gray-300"
      >
        +
      </button>
    </div>
  `;
}
