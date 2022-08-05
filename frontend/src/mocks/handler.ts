import authHandler from '@/mocks/authHandler';
import todoHandler from '@/mocks/todoHandler';

const handlers = [...todoHandler, ...authHandler];

export default handlers;
