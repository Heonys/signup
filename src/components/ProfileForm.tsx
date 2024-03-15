import { Stack, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { updateFormSchema } from '../utils/validation';
import { ProfileFormType } from '../types';
import useAuthQuery from '../hooks/useAuthQuery';
import LoadingSpinner from './LoadingSpinner';
import FormAvatar from './FormAvatar';
import InputForm from './InputForm';
import useToast from '../hooks/useToast';
import ButtonGroup from './ButtonGroup';

const StyledForm = styled.form`
  width: 100%;
  max-width: 80%;
`;

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormType>({
    resolver: zodResolver(updateFormSchema),
  });

  const {
    authQuery: { data, isLoading },
    updateMutation: { mutate, isPending },
    authInitalize,
  } = useAuthQuery();

  const { openToast } = useToast({
    title: '프로필 수정 완료',
    status: 'info',
    duration: 3000,
  });

  const [file, setFile] = useState<string>();

  const onSubmit = (value: ProfileFormType) => {
    mutate({ id: data!.id, file, name: value.name });
    openToast();
  };

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setFile(file.name);
  };

  if (isLoading) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      {isPending && <LoadingSpinner />}
      <Flex direction="column" gap={2} align="center">
        <FormAvatar file={data?.file ? (file ? file : data.file) : undefined} />
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <input
              type="file"
              {...register('image')}
              accept="image/*"
              onChange={handleMainImageChange}
            />

            <InputForm label="ID" disabled value={data?.id} />
            <InputForm
              label="Name"
              padding={1}
              defaultValue={data?.name}
              error={errors.name?.message}
              register={register('name')}
            />
            <InputForm label="Created By" disabled value={data?.createdBy} />
            <InputForm label="Updated By" disabled value={data?.updatedBy} />

            <ButtonGroup leftLabel="로그아웃" rightLabel="수정" leftFn={() => authInitalize()} />
          </Stack>
        </StyledForm>
      </Flex>
    </>
  );
};

export default ProfileForm;
