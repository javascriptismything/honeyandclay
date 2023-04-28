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
