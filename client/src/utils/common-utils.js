export const getaccesstoken = () => {
  return sessionStorage.getItem("accesstoken");
};

export const Addellipsis = (str, limit) => {
  return str.length > limit ? str.substring(0, limit) + "....more" : str;
};
