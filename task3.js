const removeRepeatValueFromString = (string) => {
  return [...new Set(string.split(","))].join(",");
};
