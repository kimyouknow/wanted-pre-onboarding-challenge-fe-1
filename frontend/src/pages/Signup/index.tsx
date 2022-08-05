import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import StackColumn from '@/components/Common/StackColumn';
import useForm from '@/hooks/useForm';
import signUpValidate, { SignUpValidateProps } from '@/service/signUp.validation';

const SignUp = () => {
  const onSubmit = async () => {};
  const {
    inputValues,
    validateError,
    isLoading,
    onChangeHandler,
    submitHandler,
    satisfyAllValidites,
  } = useForm<SignUpValidateProps>({
    initialValues: { email: '', password: '' },
    onSubmit,
    validate: signUpValidate,
  });

  return (
    <Box component="form" autoComplete="off">
      <StackColumn>
        <TextField
          id="outlined-basic"
          label="이메일"
          variant="outlined"
          type="email"
          name="email"
          value={inputValues.email}
          onChange={onChangeHandler}
          error={!!validateError.email}
          helperText={validateError.email}
        />
        <TextField
          id="outlined-basic"
          label="비빌번호"
          variant="outlined"
          type="password"
          name="password"
          value={inputValues.password}
          onChange={onChangeHandler}
          error={!!validateError.password}
          helperText={validateError.password}
        />
        <Button type="submit" variant="contained" disabled={!satisfyAllValidites}>
          회원가입
        </Button>
      </StackColumn>
    </Box>
  );
};

export default SignUp;
