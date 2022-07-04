export const colors = {
  antiqueBrass: '#D59171',
  copperPenny: '#B47363',
  primary: '#3A2F42',
  secondary: '#F5F0F1',
  smokyTopaz: '#983548',
};

export const addAlpha = (color: string, targetOpacity: number): string => {
  // coerce values so ti is between 0 and 1.
  const opacity = Math.round(Math.min(Math.max(targetOpacity || 1, 0), 1) * 255);

  return color + opacity.toString(16).toUpperCase();
};
