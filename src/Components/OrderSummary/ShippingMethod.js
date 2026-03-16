import { SHIPPING_RATES } from "../../store/data.js";
import { getState } from "../../store/store.js";

export default function ShippingMethod(method) {
  const { shipMethod } = getState();
  return `
    <!-- Standard ${method.toUpperCase()} -->
    <label
      for="Shipping-${method}"
      data-method="${method}"
      class="method flex gap-2 border border-gray-300 p-2 rounded-lg cursor-pointer"
    >
      <input
        type="radio"
        name="shippingMethod"
        id="Shipping-${method}"
        class="cursor-pointer"
        ${method === shipMethod ? "checked" : ""}
      />

      <div class="flex flex-1 justify-between items-center">
        <div>
          <p class="text-sm font-semibold capitalize">${method} Delivery</p>
          <p class="text-xs">3-5 business days</p>
        </div>

        <p class="text-sm font-semibold ${method === "free" ? "text-green-500" : ""}">
          ${method === "free" ? "Free" : `$${SHIPPING_RATES[method].toFixed(2)}`}
        </p>
      </div>
    </label>
  `;
}
