import { AxiosResponse } from 'axios';

export function successHandler(response: AxiosResponse) {
  // TODO: response 커스텀 타입
  // const { data } = response;
  return response;
}

// TODO: error 타입 찾아보기
export function errorHandler(error: any) {
  // 응답 오류가 있는 작업 수행
  if (error.response) {
    // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
    console.log(error);
    const {
      response: { data },
    } = error;
    // 서버에서 설정한 커스텀 에러 타입 키값들
    // detaills
    const hasDetail = data.hasOwnProperty('details');
    if (hasDetail) {
      return Promise.reject(data.details);
    }

    const hasMessage = data.hasOwnProperty('message');
    if (hasMessage) {
      return Promise.reject(data.message);
    }

    return Promise.reject('요청 에러 발생');
  }
  if (error.request) {
    // 요청이 이루어 졌으나 응답을 받지 못했습니다.
    // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
    // Node.js의 http.ClientRequest 인스턴스입니다.
    console.log(error.request);
  } else {
    // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
    console.log('Error', error.message);
  }
  console.log(error.config);
  return Promise.reject(error);
}
