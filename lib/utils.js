import toast from "react-hot-toast";

export const updateLocalStorage = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

export const getLocalStorage = () => {
  if (localStorage.getItem("cart") === null) {
    return [];
  }

  return JSON.parse(localStorage.getItem("cart"));
};

export const clearLocalStorage = () => {
  localStorage.setItem("cart", "[]");
};

export const addToCart = (
  title,
  price,
  url,
  dimensions,
  description,
  quantity,
  type,
  context,
  setContext
) => {
  if (context.items.some((item) => item.title === title)) {
    toast.error("This is already in your cart");
  } else {
    toast.success("Added to cart!");
    setContext((prevContext) => {
      const items = prevContext.items;
      items.push({
        title,
        price,
        url,
        dimensions,
        quantity,
        description,
        quantity,
        type,
      });
      updateLocalStorage(items);
      const total = prevContext.total + price;
      return {
        ...prevContext,
        items: items,
        total: total,
      };
    });
  }
};

export const removeFromCart = (title, price, setContext) => {
  setContext((prevContext) => {
    const items = prevContext.items.filter((item) => item.title !== title);

    updateLocalStorage(items);
    const total = prevContext.total - price;
    return {
      ...prevContext,
      items: items,
      total: total,
    };
  });
  toast.success("Item removed from cart");
};

export const updateQuantity = (quantity, title, setContext) => {
  setContext((prevContext) => {
    const index = prevContext.items.findIndex((item) => item.title == title);
    prevContext.items[index].quantity = quantity;
    const items = prevContext.items;
    updateLocalStorage(items);
    let total;
    prevContext.items.forEach((item) => {
      total += item.quantity * item.price;
    });
    return {
      ...prevContext,
      items: items,
      total: total,
    };
  });
  toast.success("Quantity updated");
};
