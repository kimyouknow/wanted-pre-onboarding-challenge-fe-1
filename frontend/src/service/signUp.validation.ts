export interface SignUpValidateProps {
  email: string;
  password: string;
}

// TODO: 정규표현식으로 바꿔보기
const signUpValidate = ({ email, password }: SignUpValidateProps) => {
  const validateErros: SignUpValidateProps = {
    email: '',
    password: '',
  };
  if (!email) {
    validateErros.email = '이메일이 입력되지 않았습니다. ';
  } else if (!email.includes('@') || !email.includes('.')) {
    validateErros.email =
      '입력된 이메일이 유효하지 않습니다. 이메일에 최소 "@" 혹은 "."을 포함해야합니다.';
  }

  if (!password) {
    validateErros.password = '비빌번호가 입력되지 않았습니다. ';
  } else if (password.length < 7) {
    validateErros.password = '비빌번호는 최소 8자 이상이어야 합니다. ';
  }

  return validateErros;
};

export default signUpValidate;
