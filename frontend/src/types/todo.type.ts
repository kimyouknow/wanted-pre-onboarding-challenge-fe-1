export interface TodoType {
  id: string;
  content: string;
  title: string;
}

export type TodoInfoType = Omit<TodoType, 'id'>;

export interface TodoRequestType {
  id: string;
  data: TodoInfoType;
}

export interface TodoListResponseType {
  data: TodoType[];
}

export interface TodoDetailResponseType {
  data: TodoType;
}
