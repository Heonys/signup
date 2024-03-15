import { z } from 'zod';

const passwordSchema = z
  .string()
  .min(1, { message: '패스워드를 입력해주세요' })
  .max(13, { message: '13자 이하로 입력해주세요' })
  .refine(
    (v) => {
      const hasNumber = /[0-9]/.test(v);
      const hasLower = /[a-z]/.test(v);
      const hasUpper = /[A-Z]/.test(v);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(v);
      return hasNumber && hasLower && hasUpper && hasSpecial;
    },
    {
      message: '숫자, 영문 소문자, 대문자, 특수문자를 최소 1개 이상 포함해야 합니다.',
    },
  )
  .refine(
    (v) => {
      return !/(?:\d{3,})/.test(v);
    },
    { message: '연속된 숫자 3개 이상을 포함할 수 없습니다.' },
  );

export const formSchema = z.object({
  id: z
    .string()
    .min(1, { message: '아이디를 입력해주세요' })
    .email({ message: '이메일 형식으로 입력해주세요' }),
  password: passwordSchema,
});

export const signupFormSchema = z
  .object({
    id: z
      .string()
      .min(1, { message: '아이디를 입력해주세요' })
      .email({ message: '이메일 형식으로 입력해주세요' }),
    password: passwordSchema,
    confirmPassword: z.string().min(1, { message: '패스워드를 입력해주세요' }),
    name: z
      .string()
      .min(1, { message: '이름을 입력해주세요' })
      .max(5, { message: '최대 5글자 입니다' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '패스워드와 일치하지 않습니다',
  });

export const updateFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: '이름을 입력해주세요' })
    .max(5, { message: '최대 5글자 입니다' }),
});
