import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { signIn, updateUser } from '../api/user';
import { useNavigate } from 'react-router-dom';
import { SignupUserType } from '../types';

const queryKey = ['auth'];

const useAuthQuery = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const authQuery = useQuery<SignupUserType>({ queryKey });

  const authMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, data);
      navigate(`/profile`);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, data);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const authInitalize = () => {
    navigate(`/`);
    queryClient.setQueryData(queryKey, undefined);
  };

  return { authQuery, authMutation, updateMutation, authInitalize };
};

export default useAuthQuery;
