import { useMutation } from '@tanstack/react-query';
import { createUser } from '../api/user';
import { useNavigate } from 'react-router-dom';
import useToast from './useToast';

const useSignup = () => {
  const navigate = useNavigate();

  const { openToast } = useToast({
    title: '회원가입이 완료 되었습니다',
    status: 'info',
    duration: 3000,
  });

  const userMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      navigate('/');
      openToast();
    },
  });

  return { userMutation };
};

export default useSignup;
