import { Stack, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { signupFormSchema } from '../utils/validation';
import { SignupFormType } from '../types';
import useSignup from '../hooks/useSignup';
import LoadingSpinner from './LoadingSpinner';
import FormAvatar from './FormAvatar';
import InputForm from './InputForm';
import useToast from '../hooks/useToast';
import ButtonGroup from './ButtonGroup';

const StyledForm = styled.form`
  width: 100vw;
  max-width: 80%;
`;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { id, name, password, confirmPassword },
    },
  } = useForm<SignupFormType>({
    resolver: zodResolver(signupFormSchema),
  });
  const {
    userMutation: { mutate, isPending, error },
  } = useSignup();

  const navigate = useNavigate();
  const [filename, setFilename] = useState<string>();
  const [signupAttempts, setSignupAttempts] = useState(0);
  const { openToast } = useToast({
    title: '이미 존재하는 아이디 입니다',
    status: 'error',
    duration: 3000,
  });

  const onSubmit = (value: SignupFormType) => {
    const formData = { ...value, file: filename };
    mutate(formData);
    setSignupAttempts((prev) => prev + 1);
  };

  useEffect(() => {
    if (error) openToast();
  }, [error]);

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setFilename(file.name);
  };

  if (signupAttempts >= 3 && error) {
    return <Navigate replace to="/error/signup" />;
  }

  return (
    <>
      {isPending && <LoadingSpinner />}
      <Flex direction="column" gap={2} align="center">
        <FormAvatar file={filename} />
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <input
              type="file"
              {...register('file')}
              accept="image/*"
              onChange={handleMainImageChange}
            />

            <InputForm label="ID" error={id?.message} register={register('id')} />
            <InputForm
              label="Password"
              padding={1}
              type="password"
              error={password?.message}
              register={register('password')}
            />
            <InputForm
              label="Confirm Password"
              padding={1}
              type="password"
              error={confirmPassword?.message}
              register={register('confirmPassword')}
            />
            <InputForm label="Name" error={name?.message} register={register('name')} />
            <ButtonGroup leftLabel="뒤로가기" rightLabel="회원가입" leftFn={() => navigate('/')} />
          </Stack>
        </StyledForm>
      </Flex>
    </>
  );
};

export default SignupForm;
