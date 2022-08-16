import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { useEffect, useReducer, useState } from 'react';

const LOADING_TYPE = 'LOADING';
const SUCCESS_TYPE = 'SUCCESS';
const ERROR_TYPE = 'ERROR';
const RESET_TYPE = 'RESET';

interface UseFetchProps<T> {
  axiosInstance: (params: any) => AxiosPromise<T>;
  axiosConfig?: AxiosRequestConfig;
  immediate?: boolean;
}

export interface ApiState<T> {
  responseData: T | null;
  isLoading: boolean;
  apiError: { isError: boolean; msg: string };
}

interface ReturnState<T> {
  apiState: ApiState<T>;
  execution: (newConfig: AxiosRequestConfig) => Promise<void>;
  forceRefetch: () => void;
}

type Action<T> =
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: T }
  | { type: 'ERROR'; payload: string }
  | { type: 'RESET' };

const useFetch = <T>({
  axiosInstance,
  axiosConfig,
  immediate = true,
}: UseFetchProps<T>): ReturnState<T> => {
  const reducer = (state: ApiState<T>, action: Action<T>): ApiState<T> => {
    switch (action.type) {
      case LOADING_TYPE:
        return {
          ...state,
          isLoading: true,
        };
      case SUCCESS_TYPE:
        return {
          ...state,
          isLoading: false,
          responseData: action.payload,
        };
      case ERROR_TYPE:
        return {
          isLoading: false,
          responseData: null,
          apiError: { isError: true, msg: action.payload },
        };
      case RESET_TYPE:
        return {
          isLoading: false,
          responseData: null,
          apiError: { isError: false, msg: '' },
        };
      default:
        throw new Error(`Unhandled action type: ${action}`);
    }
  };

  const [trigger, setTrigger] = useState(Date.now());
  const [controller, setController] = useState<AbortController | null>(null);
  const [apiState, dispatch] = useReducer(reducer, {
    isLoading: true,
    responseData: null,
    apiError: { isError: false, msg: '' },
  });

  const forceRefetch = () => {
    setTrigger(Date.now());
  };

  const resetState = () => {
    dispatch({ type: RESET_TYPE });
  };

  const execution = async (newConfig: AxiosRequestConfig) => {
    dispatch({ type: LOADING_TYPE });
    try {
      const ctrl = new AbortController();
      setController(ctrl);
      const response = await axiosInstance({
        ...axiosConfig,
        ...newConfig,
        signal: ctrl.signal,
      });
      dispatch({ type: SUCCESS_TYPE, payload: response.data });
    } catch (error: any) {
      console.error(error);
      dispatch({ type: ERROR_TYPE, payload: error });
    }
  };

  useEffect(() => {
    resetState();
    if (immediate) {
      execution({});
    }
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, []);

  return { apiState, execution, forceRefetch };
};

export default useFetch;
