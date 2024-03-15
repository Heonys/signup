import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  padding?: number;
  type?: string;
  size?: string;
  label: string;
  value?: string;
  register?: UseFormRegisterReturn<any>;
  error?: string;
  disabled?: boolean;
  defaultValue?: string;
};

const InputForm = ({
  padding = 1,
  type = 'text',
  disabled = false,
  defaultValue,
  value,
  label,
  error,
  register,
}: Props) => {
  return (
    <FormControl p={padding}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={label}
        disabled={disabled}
        size="sm"
        {...register}
      />
      <FormHelperText color="red" fontSize="xs">
        {error}
      </FormHelperText>
    </FormControl>
  );
};

export default InputForm;
