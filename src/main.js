import { CART } from "./store/data.js";
import Cart from "./Components/Cart/Cart.js";
import OrderSummary from "./Components/OrderSummary/OrderSummary.js";
import {
  getState,
  setState,
  subscribe,
  toggleSelect,
  toggleSelectAll,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  toggleWishlist,
  clearCart,
  toggleMethod,
} from "./store/store.js";

const render = (state) => {
  document.getElementById("cart-container").innerHTML =
    Cart(state) + OrderSummary(state);
};

const init = () => {
  // Initial state
  setState(() => ({
    cart: [...CART],
    selectedItems: [...CART],
    wishlist: [],
    isAllSelected: true,
    shipMethod: "standard",
    promotion: {
      code: null,
      error: null,
    },
  }));

  subscribe(render);
  render(getState());
};

document.getElementById("cart-container").addEventListener("click", (e) => {
  if (e.target.closest("#clear-all")) clearCart();

  const selectAll = e.target.closest("#select-all");
  if (selectAll) toggleSelectAll(e.target.checked);

  const product = e.target.closest(".product-item");
  if (product) {
    const id = Number.parseInt(product.dataset.id);

    if (e.target.matches(".select-item")) toggleSelect(id);
    if (e.target.closest("#increase-quantity")) increaseQuantity(id);
    if (e.target.closest("#decrease-quantity")) decreaseQuantity(id);
    if (e.target.closest("#remove-button")) removeItem(id);
    if (e.target.closest("#wish-button")) toggleWishlist(id);
  }

  const shipMethod = e.target.closest(".method");

  if (shipMethod) {
    const method = shipMethod.dataset.method;
    toggleMethod(method);
    console.clear();
    console.log(getState());
  }
});

init();
