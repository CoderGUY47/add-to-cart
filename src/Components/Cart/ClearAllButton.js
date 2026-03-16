export default function ClearAllButton() {
  return `
    <button id="clear-all" class="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-500 border border-red-300 cursor-pointer px-2 py-1 rounded-full"
    >
      <i class="fa-regular fa-trash-can"></i>
      <span>Clear All</span>
    </button>
  `;
}
