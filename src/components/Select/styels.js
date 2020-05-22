export const selectStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid #f55656',
    marginBottom: '12px',
    color: '#fff',
  }),
  option: (styles) => ({
    ...styles,
    color: '#333',
    background: 'rgba(255,255,255,0.1)',
  }),
  placeholder: (styles) => ({ ...styles, color: '#fff' }),
  singleValue: (styles) => ({ ...styles, color: '#fff' }),
};
