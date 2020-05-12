export const limitTextLength = (text, len) => {
  if (text.length > len) {
    return `${text.slice(0, len)}...`;
  }
  return text;
};
