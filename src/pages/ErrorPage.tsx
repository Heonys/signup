import { Alert, AlertDescription, AlertIcon, AlertTitle, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ErrorPage = () => {
  const { type } = useParams();

  return (
    <Flex justify="center" align="center" h="100vh">
      <Alert
        status="warning"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          {!type && '모바일 디바이스에 최적화되어 있습니다'}
          {type === 'login' && '로그인에 3회 이상 실패 했습니다'}
          {type === 'signup' && '회원가입에 3회 이상 실패 했습니다'}
        </AlertTitle>
        <AlertDescription maxWidth="sm"></AlertDescription>
      </Alert>
    </Flex>
  );
};

export default ErrorPage;
