export default function RemoveButton() {
  return `
    <button
      id="remove-button"
      class="flex justify-center items-center gap-1 text-xs hover:text-red-500 cursor-pointer"
    >
      <i class="fa-regular fa-trash-can"></i>
      Remove
    </button>
  `;
}
