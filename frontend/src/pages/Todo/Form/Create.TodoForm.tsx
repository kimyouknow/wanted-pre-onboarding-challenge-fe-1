import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import StackColumn from '@/components/Common/StackColumn';
import { useTodoListProviderAction } from '@/context/TodoList';
import useForm from '@/hooks/useForm';
import todoValidate, { TodoValidateProps } from '@/service/todo.validation';

import * as S from '../style';

const CreateTodoForm = () => {
  const { createTodo } = useTodoListProviderAction();
  const {
    inputValues,
    validateError,
    isLoading,
    onChangeHandler,
    submitHandler,
    satisfyAllValidites,
  } = useForm<TodoValidateProps>({
    initialValues: { title: '', content: '' },
    submitCallback: createTodo,
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
            작성
          </Button>
        </StackColumn>
      </Box>
    </S.TodoForm>
  );
};

export default CreateTodoForm;
