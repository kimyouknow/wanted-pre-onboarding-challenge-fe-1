import { render, fireEvent } from '@testing-library/react';

import LoginForm from './index';

describe('<LoginForm />', () => {
  it('renders email input', () => {
    const { getByPlaceholderText } = render(<LoginForm handleSubmit={() => null} />);
    const email = getByPlaceholderText(/@test.com$/);
    expect(email).toBeInTheDocument();
  });

  it('password input has not value', () => {
    const { getByLabelText } = render(<LoginForm handleSubmit={() => null} />);
    const password = getByLabelText('비밀번호');
    expect(password).toHaveValue('');
  });

  it('enables button when both email and password are entered', () => {
    const { getByText, getByLabelText } = render(<LoginForm handleSubmit={() => null} />);

    const button = getByText('로그인');
    const email = getByLabelText('이메일');
    const password = getByLabelText('비밀번호');

    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: 'user@test.com' } });
    fireEvent.change(password, { target: { value: 'Test1234' } });

    expect(button).toBeEnabled();
  });

  it('submits form when buttion is clicked', () => {
    const handleSubmit = jest.fn(event => event.preventDefault());
    const { getByText, getByLabelText } = render(<LoginForm handleSubmit={handleSubmit} />);

    const button = getByText('로그인');
    const email = getByLabelText('이메일');
    const password = getByLabelText('비밀번호');

    fireEvent.change(email, { target: { value: 'user@test.com' } });
    fireEvent.change(password, { target: { value: 'Test1234' } });

    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
