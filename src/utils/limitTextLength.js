export const limitTextLength = (text) => {
    let sliced = text.slice(0, 100);
    if (sliced.length < text.length) {
      sliced += "...";
    }
    return sliced;
  };