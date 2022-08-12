import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useTodoListProviderAction, useTodoListProviderState } from '@/context/TodoList';
import EditTodoForm from '@/pages/Todo/Form/Edit.TodoForm';

const TodoDetail = () => {
  const { isActivateEditForm, todoDetailInfo } = useTodoListProviderState();
  const { handleClickActivateEditFormButton, deleteTarget } = useTodoListProviderAction();

  // TODO: todoId 상수로 처리하기
  const { todoId } = useParams();

  const handleClickDeleteButton = () => {
    if (todoId) {
      deleteTarget(todoId);
    }
  };

  // if (isLoading) {
  //   return <div>로딩중...</div>;
  // }

  // if (apiError.isError) {
  //   return (
  //     <div>
  //       <p>{apiError.msg}</p>
  //       <button onClick={() => {}}>다시 요청</button>
  //     </div>
  //   );
  // }

  if (!todoDetailInfo || !todoId) {
    return <div>보여줄 데이터가 없어요</div>;
  }

  // const { title, content } = todoInfo.data;
  const { title, content, id } = todoDetailInfo;

  return (
    <div>
      <h2>할 일 상세 정보</h2>
      {isActivateEditForm ? (
        <>
          <EditTodoForm id={id} title={title} content={content} />
          <Button variant="contained" onClick={handleClickActivateEditFormButton}>
            취소
          </Button>
        </>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
          <Button variant="contained" onClick={handleClickActivateEditFormButton}>
            수정
          </Button>
          <Button variant="contained" onClick={handleClickDeleteButton}>
            삭제
          </Button>
        </div>
      )}
    </div>
  );
};

export default TodoDetail;
