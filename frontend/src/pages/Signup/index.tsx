import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import authApi from '@/api/auth';
import StackColumn from '@/components/Common/StackColumn';
import useForm from '@/hooks/useForm';
import signUpValidate, { SignUpValidateProps } from '@/service/signUp.validation';

// TODO: api요청 이후 로딩, 에러, 성공 상태 보여주기
const SignUp = () => {
  const submitCallback = async (submitData: SignUpValidateProps) => {
    try {
      const response = await authApi.signUp({ data: submitData });
      console.log('response :>> ', response);
      // TODO: 성공 이후 로그인 페이지로 이동
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
  } = useForm<SignUpValidateProps>({
    initialValues: { email: '', password: '' },
    submitCallback,
    validate: signUpValidate,
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

export default SignUp;
