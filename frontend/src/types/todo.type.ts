export interface TodoType {
  id: string;
  content: string;
  title: string;
}

export interface TodoRequestType {
  id: string;
  data: TodoType;
}

export interface TodoListResponseType {
  data: TodoType[];
}

export interface TodoDetailResponseType {
  data: TodoType;
}
