export interface TodoType {
  content: string;
  title: string;
}

export interface TodoRequestType {
  id: string;
  data: TodoType;
}

export interface TodoResponseType extends TodoType {
  id: string;
  createdAt: string;
  updatedAt: string;
}
