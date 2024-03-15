import { useToast as chackraUseToast } from '@chakra-ui/react';

type Props = {
  title: string;
  status?: 'info' | 'warning' | 'success' | 'error' | 'loading';
  duration: number;
};

const useToast = ({ title, duration, status }: Props) => {
  const toast = chackraUseToast();

  const openToast = () =>
    toast({
      title,
      position: 'top',
      status,
      duration,
      isClosable: true,
    });

  return { openToast };
};

export default useToast;
