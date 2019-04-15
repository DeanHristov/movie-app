export const catchRequestError = res => {
  if(res.hasOwnProperty('success') && !res.success)
    return Promise.reject(res);

  return res;
}
