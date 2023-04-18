import styled from '@emotion/styled';
import theme from 'theme';

export const Section = styled.section({
  margin: '2vh auto',
  height: '96vh',
  width: '820px',
  color: theme.colors.blue,
  background: theme.img.bg,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
});
export const Container = styled.div({
  margin: '0 auto',
  padding: '16px 110px 16px 100px',
  maxHeight: '96%',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '6px',
});
export const Content = styled.div({
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'center',
});
export const Title = styled.h1({
  marginBottom: '20px',
  fontSize: '52px',
  textDecoration: 'underline',
});
