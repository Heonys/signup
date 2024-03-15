import styled from '@emotion/styled';
import LoginForm from '../components/LoginForm';

const Container = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 80%;
`;

const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
