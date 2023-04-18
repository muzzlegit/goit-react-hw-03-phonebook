import styled from '@emotion/styled';
import theme from 'theme';

export const Form = styled.form({
  marginBottom: '20px',
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '16px',
});
export const Label = styled.label({
  color: theme.colors.black,
  fontSize: '28px',
});
export const Item = styled.li(
  {
    fontSize: '28px',
    display: 'flex',
    gap: '20px',
  },
  props => ({
    color: props.color,
  })
);
export const Input = styled.input({
  padding: '4px 8px 0 8px',
  width: '200px',
  border: 'none',
  borderBottom: `1px solid ${theme.colors.blue}`,
  backgroundColor: 'transparent',
  fontFamily: theme.fontFamily.caveat,
  color: theme.colors.blue,
  fontSize: '26px',
  '&:focus': {
    outline: 'none',
  },
});
export const Button = styled.button({
  border: 'none',
  backgroundColor: 'transparent',
  color: theme.colors.green,
  '&:hover': {
    cursor: 'pointer',
  },
});
