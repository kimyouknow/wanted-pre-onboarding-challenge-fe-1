/* eslint-disable react/display-name */
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ComponentType } from 'react';

import { ApiState } from '@/hooks/useGetFecth';

interface WithLoadingProps<P, T> {
  apiState: ApiState<T>;
  Component: ComponentType<P>;
  execution: (newConfig: AxiosRequestConfig) => Promise<void>;
}

const WithLoading = <P, T>({ apiState, Component, execution }: WithLoadingProps<P, T>) => {
  return (props: P) => {
    const { responseData, isLoading, apiError } = apiState;

    if (isLoading) {
      return <div>로딩중...</div>;
    }

    if (apiError.isError) {
      return (
        <div>
          <h3>{apiError.msg}</h3>
          <button
            onClick={() => {
              execution({});
            }}
          >
            다시 요청
          </button>
        </div>
      );
    }

    const propsWithResponseData = { ...props, responseData };

    return <Component {...propsWithResponseData} />;
  };
};

export default WithLoading;
