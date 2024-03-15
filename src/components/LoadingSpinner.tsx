import styled from '@emotion/styled';
import { ClipLoader } from 'react-spinners';

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`;
const LoadingSpinner = () => {
  return (
    <Background>
      <ClipLoader size={50} color="#36d7b7" loading />
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
    </Background>
  );
};

export default LoadingSpinner;
