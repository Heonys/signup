import styled from '@emotion/styled';
import SignupForm from '../components/SignupForm';

const Container = styled.div`
  position: relative;
  top: 50vh;
  transform: translateY(-50%);
  overflow: hidden;
`;

const SignupPage = () => {
  return (
    <Container>
      <SignupForm />
    </Container>
  );
};

export default SignupPage;
