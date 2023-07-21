const getMaxCharacters = (): number => {
  if (window.innerWidth <= 767) {
    return 100;
  } else {
    return 199;
  }
};

export const truncateText = (text: string): string => {
  const reqLength = getMaxCharacters();
  if (text.length > reqLength) {
    return text.substring(0, reqLength - 3) + " ...";
  }
  return text;
};
