const setToLocalStorage = (key, value) => {
  if (value !== null) {
    localStorage.setItem(key, JSON.stringify(value));
  } else localStorage.removeItem(key);
};

const getFromLocalStorage = key => {
  const value = localStorage.getItem(key);
  const response = value && value !== "undefined" ? JSON.parse(value) : "";

  return response;
};

const clearLocalStorageCredentials = () => {
  setToLocalStorage("authToken", null);
};

export { setToLocalStorage, getFromLocalStorage, clearLocalStorageCredentials };