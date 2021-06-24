export const getUserNameFromEmail = (str) => {
  return str?.split('@')?.[0] || '';
};

export const isValidUrl = (url) => {
  const regex =
    /^(http(s)?:\/\/.)?(ftp(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{0,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  ///^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

  return regex.test(url);
};

export const debounce = (callback, wait = 500) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
};
