export const limitTextLength = (text) => {
  if (text.length > 100) {
    return `${text.slice(0, 100)}...`;
  }
  return text;
};
