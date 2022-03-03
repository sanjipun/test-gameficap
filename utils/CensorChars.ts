export const CensorChars = (data: string) => {
  var first6 = data.substring(0, 6);
  var last7 = data.substring(data.length - 7);
  const mask = data.substring(6, data.length - 7).replace(/^[a-zA-Z0-9_.-]*$/, "...");
  return first6 + mask + last7;
};
