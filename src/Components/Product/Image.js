export default function Image(src) {
  return `
    <div class="min-w-[90px] w-[90px] h-[90px]">
      <img src="${src}" alt="Image" class="w-full object-fit" />
    </div>
  `;
}
