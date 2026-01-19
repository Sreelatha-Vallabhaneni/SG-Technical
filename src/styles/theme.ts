const defaultColors = {
  white: '#f9f9f9',
  black: '#141414',
  gray300: '#E1E1E5',
  primary300: '#5176D6',
  primary500: '#0035CD',
  primary700: '#002ba6',
  primary900: '#03184F',
};

const colors = {
  ...defaultColors,
  textColor: defaultColors.black,
  background: defaultColors.white,
};

const sizes = {
  spacing1: '4px',
  spacing2: '8px',
  spacing3: '12px',
  spacing4: '16px',
  spacing6: '24px',
};

const theme = {
  colors,
  sizes,
};

export default theme;
