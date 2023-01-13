const normalize = (date) => {
  return date.replaceAll("-", "/");
};
console.log(normalize("20-05-2017"));
