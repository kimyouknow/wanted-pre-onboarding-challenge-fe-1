/* eslint-disable react/display-name */
import { FC } from 'react';

interface WithProviderPropsTypes<T> {
  Component: FC<T>;
  Provider: FC<ProviderTypes>;
}

interface ProviderTypes {
  children: JSX.Element;
}

const WithProvider = <T,>({ Component, Provider }: WithProviderPropsTypes<T>) => {
  return (props: T) => {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
};

export default WithProvider;
