import { ChangeEvent, SyntheticEvent, useState } from 'react';

interface UseFormProps<ValidateProps> {
  initialValues: ValidateProps;
  onSubmit: (submitData: ValidateProps) => void;
  validate: (values: ValidateProps) => ValidateProps;
}

const useForm = <ValidateProps>({
  initialValues,
  onSubmit,
  validate,
}: UseFormProps<ValidateProps>) => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [apiError, setApiError] = useState({});
  const [validateError, setValidateError] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const satisfyAllValidites = Object.values(validateError).every(value => !value);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
    setValidateError(validate({ ...inputValues, [name]: value }));
  };

  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!satisfyAllValidites) return; // TODO: api Error = true
    setIsLoading(true);
    await onSubmit(inputValues);
    setIsLoading(false);
  };

  return {
    inputValues,
    validateError,
    isLoading,
    onChangeHandler,
    submitHandler,
    satisfyAllValidites,
  };
};

export default useForm;
