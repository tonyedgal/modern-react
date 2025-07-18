export const trimTo500Chars = (text: string): string => {
  if (text.length > 500) {
    return text.substring(0, 500) + '...';
  }
  return text;
};
