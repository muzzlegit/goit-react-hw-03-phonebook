import styled from '@emotion/styled';
import theme from 'theme';

export const Box = styled.div({
  marginBottom: '40px',
  width: '100%',
});
export const Label = styled.label({
  color: theme.colors.black,
  fontSize: '32px',
});
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
