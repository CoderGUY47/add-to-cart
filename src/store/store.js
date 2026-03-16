const INITIAL_STATE = {
  cart: [],
  selectedItems: [],
  wishlist: [],
  isAllSelected: false,
  shipMethod: "",
  promotion: {
    code: null,
    erorr: null,
  },
};

let state = { ...INITIAL_STATE };
export let listeners = new Set();

export const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const getState = () => Object.freeze({ ...state });

export const setState = (updater) => {
  const partial = updater(state);
  state = { ...state, ...partial };
  listeners.forEach((fn) => fn(Object.freeze({ ...state })));
};

export const clearCart = () => {
  setState(() => ({ cart: [], selectedItems: [], isAllSelected: false }));
};

export const increaseQuantity = (id) => {
  setState(({ cart, selectedItems }) => ({
    cart: cart.map((item) =>
      item.id === id && item.quantity < item.stock && item.quantity < 99
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    ),

    selectedItems: selectedItems.map((item) =>
      item.id === id && item.quantity < item.stock && item.quantity < 99
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    ),
  }));
};

export const decreaseQuantity = (id) => {
  setState(({ cart, selectedItems }) => ({
    cart: cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    ),

    selectedItems: selectedItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    ),
  }));
};

export const toggleSelect = (id) => {
  setState(({ cart }) => ({
    cart: cart.map((item) =>
      item.id === id ? { ...item, isSelected: !item.isSelected } : item,
    ),
  }));

  setState(({ cart }) => ({
    isAllSelected: cart.every((item) => item.isSelected),
    selectedItems: cart.filter((item) => item.isSelected),
  }));
};

export const toggleSelectAll = (checked) => {
  setState(({ cart }) => ({
    cart: cart.map((item) => ({ ...item, isSelected: checked })),
    isAllSelected: checked,
  }));

  setState(({ cart }) => ({
    isAllSelected: cart.every((item) => item.isSelected),
    selectedItems: cart.filter((item) => item.isSelected),
  }));
};

export const removeItem = (id) => {
  setState(({ cart, selectedItems }) => ({
    cart: cart.filter((item) => item.id !== id),
    selectedItems: selectedItems.filter((item) => item.id !== id),
  }));
};

export const toggleWishlist = (id) => {
  setState(({ cart, wishlist }) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return {};

    item.isWishlisted = !item.isWishlisted;
    const hasItem = wishlist.some((item) => item.id === id);

    return {
      wishlist: hasItem
        ? wishlist.filter((item) => item.id !== id)
        : [...wishlist, item],

      cart: [...cart],
    };
  });
};

export const toggleMethod = (method) => {
  setState(() => ({
    shipMethod: method,
  }));
};
