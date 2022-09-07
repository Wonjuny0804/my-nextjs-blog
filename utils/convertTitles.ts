export const convertTitleToURL = (title: string) => {
  return title.split(" ").join("-");
};

export const convertURLToTitle = (url: string) => {
  return url.split("-").join(" ");
};
