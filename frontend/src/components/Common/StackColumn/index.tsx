import Stack from '@mui/material/Stack';
import { ReactNode } from 'react';

interface IStackColumn {
  children: ReactNode;
}

const StackColumn = ({ children }: IStackColumn) => {
  return <Stack spacing={2}>{children}</Stack>;
};

export default StackColumn;
