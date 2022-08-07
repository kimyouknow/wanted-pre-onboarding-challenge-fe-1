import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import todoApi from '@/api/todo.api';
import StackColumn from '@/components/Common/StackColumn';
import { useToastNotificationAction } from '@/context/ToastNotification';
import { notifyNewMessage } from '@/context/ToastNotification/action';
import { useTodoListProviderState } from '@/context/TodoList';
import useForm from '@/hooks/useForm';
import todoValidate, { TodoValidateProps } from '@/service/todo.validation';
import { TodoInfoType } from '@/types/todo.type';

import * as S from '../style';

const CreateTodoForm = () => {
  const { targetTodoId } = useTodoListProviderState();
  const notifyDispatch = useToastNotificationAction();
  const submitCallback = async (submitData: TodoInfoType) => {
    // TODO: 1초가 넘으면 처리중입니다 메세지 보여지게 수정
    notifyNewMessage(notifyDispatch, '처리 중입니다...', 'Info');
    try {
      const response = await todoApi.createTodo({ id: targetTodoId, data: submitData });
      console.log(response);
      notifyNewMessage(notifyDispatch, '작성 성공', 'Success');
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
  } = useForm<TodoValidateProps>({
    initialValues: { title: '', content: '' },
    submitCallback,
    validate: todoValidate,
  });
  return (
    <S.TodoForm>
      <Box component="form" autoComplete="off" onSubmit={submitHandler}>
        <StackColumn>
          <TextField
            id="outlined-basic"
            label="제목"
            variant="outlined"
            type="title"
            name="title"
            value={inputValues.title}
            onChange={onChangeHandler}
            error={!!validateError.title}
            helperText={validateError.title}
          />
          <TextField
            id="outlined-basic"
            label="내용"
            variant="outlined"
            type="content"
            name="content"
            multiline
            rows={4}
            value={inputValues.content}
            onChange={onChangeHandler}
            error={!!validateError.content}
            helperText={validateError.content}
          />
          <Button type="submit" variant="contained" disabled={!satisfyAllValidites}>
            +
          </Button>
        </StackColumn>
      </Box>
    </S.TodoForm>
  );
};

export default CreateTodoForm;
