import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import StackColumn from '@/components/Common/StackColumn';

const SignUp = () => {
  return (
    <Box component="form" autoComplete="off">
      <StackColumn>
        <TextField id="outlined-basic" label="이메일" variant="outlined" />
        <TextField id="outlined-basic" label="비빌번호" variant="outlined" />
        <TextField id="outlined-basic" label="비빌번호확인" variant="outlined" />
        <button type="submit">회원가입</button>
      </StackColumn>
    </Box>
  );
};

export default SignUp;
