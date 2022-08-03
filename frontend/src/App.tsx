import { FormEvent } from 'react';

import Card from '@/components/Card';
import ComplexForm from '@/components/ComplexForm';
import LoginForm from '@/components/LoginForm';

export default function App() {
  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <Card content="project" msg="start" />
      <LoginForm handleSubmit={handleSubmit} />
      <ComplexForm onSubmit={() => {}} onCancel={() => {}} />
    </div>
  );
}
