export const SlugToTitle = (slug: string) => {
  const splitStr = slug?.toLowerCase().split("-");
  for (var i = 0; i < splitStr?.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr?.join(" ");
};
