export const catchRequestError = res => {
  if(res.hasOwnProperty('status_code') && !res.success)
    return Promise.reject(res);

  return res;
};

export const deBounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
};
