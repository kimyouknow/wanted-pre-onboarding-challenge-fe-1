import { ACCESS_TOKEN } from '@/constant/auth';
import { handleLocalStorage } from '@/utils/localstorage';

export const getAcccesToken = () => handleLocalStorage.get(ACCESS_TOKEN);

export const checkIsLogin = () => !!getAcccesToken();

export const logout = () => handleLocalStorage.delete(ACCESS_TOKEN);
