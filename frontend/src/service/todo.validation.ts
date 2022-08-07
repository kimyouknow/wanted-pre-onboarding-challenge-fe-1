export interface TodoValidateProps {
  title: string;
  content: string;
}

const todoValidate = ({ title, content }: TodoValidateProps) => {
  const validateErros: TodoValidateProps = {
    title: '',
    content: '',
  };

  if (!title) {
    validateErros.title = '제목을 입력해주세요.';
  }

  if (!content) {
    validateErros.content = '내용을 입력해주세요.';
  }

  return validateErros;
};

export default todoValidate;
