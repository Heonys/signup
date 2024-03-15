import styled from '@emotion/styled';
import UserIcon from './icon/UserSvg';

const StyledImageContainer = styled.div`
  width: 25vw;
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 50%;
  height: 100%;
  overflow: hidden;
  aspect-ratio: 1/1;
  border: 1px dotted gray;
  background-color: linen;
`;

type Props = {
  file?: string;
};

const FormAvatar = ({ file }: Props) => {
  return (
    <StyledImageContainer>
      {/*  */}
      {file ? <UserIcon name={file} /> : <UserIcon />}
    </StyledImageContainer>
  );
};

export default FormAvatar;
