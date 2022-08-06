import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

import authApi from '@/api/auth';
import StackColumn from '@/components/Common/StackColumn';
import { ROUTE } from '@/constant/route';
import { useToastNotificationAction } from '@/context/ToastNotification';
import { notifyNewMessage } from '@/context/ToastNotification/action';
import useForm from '@/hooks/useForm';
import loginValidate, { LoginValidateProps } from '@/service/login.validation';
import { handleLocalStorage } from '@/utils/localstorage';

const Login = () => {
  const navigate = useNavigate();
  const notifyDispatch = useToastNotificationAction();
  const submitCallback = async (submitData: LoginValidateProps) => {
    // TODO: 1초가 넘으면 처리중입니다 메세지 보여지게 수정
    notifyNewMessage(notifyDispatch, '처리 중입니다...', 'Info');
    try {
      const response = await authApi.login({ data: submitData });
      const { message, token } = response.data;
      // TODO: serivce 로직으로 분리
      handleLocalStorage.set('accessToken', token);
      notifyNewMessage(notifyDispatch, message, 'Success');
      setTimeout(() => {
        navigate(ROUTE.MAIN);
      }, 1000);
    } catch (error) {
      console.error(error);
      notifyNewMessage(notifyDispatch, '로그인 과정에서 에러가 발생했습니다', 'Error');
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
