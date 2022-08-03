import { render } from '@testing-library/react';

import reactIconImg from '@/assets/images/React-icon.png';

import Card from './index';

describe('<Card />', () => {
  it('renders header', () => {
    const { getByText } = render(<Card content="project" msg="msg" />);
    const header = getByText('msg');
    expect(header).toBeInTheDocument();
  });
  it('renders paragraph', () => {
    const { getByText } = render(<Card content="project" msg="msg" />);
    const paragraph = getByText('project');
    expect(paragraph).toBeInTheDocument();
  });
  it('renders image', () => {
    const { getByAltText } = render(<Card content="project" msg="msg" />);
    const image = getByAltText('react-icon');
    expect(image).toHaveAttribute('src', reactIconImg);
  });
});
