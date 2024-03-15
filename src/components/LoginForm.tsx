import { Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { formSchema } from '../utils/validation';
import useAuthQuery from '../hooks/useAuthQuery';
import LoadingSpinner from './LoadingSpinner';
import InputForm from './InputForm';
import useToast from '../hooks/useToast';
import ButtonGroup from './ButtonGroup';

type FormType = { id: string; password: string };

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();
  const { authMutation } = useAuthQuery();
  const [loginAttempts, setLoginAttempts] = useState(0);

  const { openToast } = useToast({
    title: '아이디 또는 패스워드가 일치하지 않습니다',
    status: 'error',
    duration: 3000,
  });

  useEffect(() => {
    if (authMutation.error) {
      openToast();
    }
  }, [authMutation.error]);

  const onSubmit = async () => {
    const { id, password } = getValues();
    authMutation.mutate({ id, password });
    setLoginAttempts((prev) => prev + 1);
  };

  if (loginAttempts >= 3 && authMutation.error) {
    return <Navigate replace to="/error/login" />;
  }

  return (
    <>
      {authMutation.isPending && <LoadingSpinner />}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Flex direction="column" gap={1}>
          <InputForm label="ID" padding={3} error={errors.id?.message} register={register('id')} />
          <InputForm
            label="Password"
            type="password"
            padding={3}
            error={errors.password?.message}
            register={register('password')}
          />

          <ButtonGroup
            leftLabel="회원가입"
            rightLabel="로그인"
            leftFn={() => navigate('/signup')}
          />
        </Flex>
      </form>
    </>
  );
};

export default LoginForm;
