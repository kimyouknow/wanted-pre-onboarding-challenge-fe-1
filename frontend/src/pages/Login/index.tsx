import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import authApi from '@/api/auth';
import StackColumn from '@/components/Common/StackColumn';
import useForm from '@/hooks/useForm';
import loginValidate, { LoginValidateProps } from '@/service/login.validation';

const Login = () => {
  const submitCallback = async (submitData: LoginValidateProps) => {
    try {
      const response = await authApi.login({ data: submitData });
      console.log('response :>> ', response);
      // TODO: 성공 이후 메인 페이지로 이동
    } catch (error) {
      console.error(error);
    }
  };
  const {
    inputValues,
    validateError,
    isLoading,
    onChangeHandler,
    submitHandler,
    satisfyAllValidites,
  } = useForm<LoginValidateProps>({
    initialValues: { email: '', password: '' },
    submitCallback,
    validate: loginValidate,
  });
  return (
    <Box component="form" autoComplete="off" onSubmit={submitHandler}>
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

export default Login;
