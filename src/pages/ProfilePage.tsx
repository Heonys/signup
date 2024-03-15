import styled from '@emotion/styled';
import ProfileForm from '../components/ProfileForm';

const Container = styled.div`
  position: relative;
  top: 50vh;
  transform: translateY(-50%);
  overflow: hidden;
`;

const ProfilePage = () => {
  return (
    <Container>
      <ProfileForm />
    </Container>
  );
};

export default ProfilePage;
