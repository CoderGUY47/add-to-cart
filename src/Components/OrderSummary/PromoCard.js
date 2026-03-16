export default function PromoCard() {
  return `
    <fieldset class="space-y-2">
      <legend class="text-xs text-gray-500 font-semibold uppercase">
        Promo Code
      </legend>

      <div class="flex justify-between items-center gap-2">
        <input
          type="text"
          name="promoCode"
          id="promo-code"
          placeholder="Promo Code"
          class="flex-1 border border-gray-400 px-4 py-2 rounded-lg bg-gray-300/50 focus:border-blue-400"
        />
        <input
          type="button"
          value="APLAY"
          class="bg-purple-500 text-gray-50 p-2 rounded-lg cursor-pointer"
        />
      </div>
    </fieldset>
  `;
}
