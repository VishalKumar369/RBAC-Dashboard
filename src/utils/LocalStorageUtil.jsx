const LocalStorageUtil = {
    getItem: (key, defaultValue = []) => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    },
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  export {LocalStorageUtil};