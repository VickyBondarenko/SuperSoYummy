const getMaxCharacters = (): number => {
  if (window.innerWidth <= 767) {
    return 12;
  } else {
    return 22;
  }
};

export const truncateText = (text: string): string => {
  const reqLength = getMaxCharacters();
  const array = text.split(" ");

  if (array.length > reqLength) {
    const modifiedText = array.slice(0, reqLength).join(" ") + " ...";
    return modifiedText;
  }
  return text;
};
