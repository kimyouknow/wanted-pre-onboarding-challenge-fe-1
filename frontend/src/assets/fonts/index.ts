import { css } from 'styled-components';

import NanumMyeongjo_Bold from './NanumMyeongjo_Bold.woff';
import NanumMyeongjo_ExtraBold from './NanumMyeongjo_ExtraBold.woff';
import NanumMyeongjo_Regular from './NanumMyeongjo_Regular.woff';
import NotoSansKR_Black from './NotoSansKR_Black.woff';
import NotoSansKR_Bold from './NotoSansKR_Bold.woff';
import NotoSansKR_Light from './NotoSansKR_Light.woff';
import NotoSansKR_Medium from './NotoSansKR_Medium.woff';
import NotoSansKR_Regular from './NotoSansKR_Regular.woff';
import NotoSansKR_Thin from './NotoSansKR_Thin.woff';

export default css`
  @font-face {
    font-family: 'NotoSansKR';
    src: local('NotoSansKR'), url(${NotoSansKR_Thin}) format('woff');
    font-weight: 100;
  }
  @font-face {
    font-family: 'NotoSansKR';
    src: local('NotoSansKR'), url(${NotoSansKR_Light}) format('woff');
    font-weight: 300;
  }
  @font-face {
    font-family: 'NotoSansKR';
    src: local('NotoSansKR'), url(${NotoSansKR_Regular}) format('woff');
    font-weight: 400;
  }
  @font-face {
    font-family: 'NotoSansKR';
    src: local('NotoSansKR'), url(${NotoSansKR_Medium}) format('woff');
    font-weight: 500;
  }
  @font-face {
    font-family: 'NotoSansKR';
    src: local('NotoSansKR'), url(${NotoSansKR_Bold}) format('woff');
    font-weight: 700;
  }
  @font-face {
    font-family: 'NotoSansKR';
    src: local('NotoSansKR'), url(${NotoSansKR_Black}) format('woff');
    font-weight: 900;
  }
  @font-face {
    font-family: 'NanumMyeongjo';
    src: local('NanumMyeongjo'), url(${NanumMyeongjo_Regular}) format('woff');
    font-weight: 400;
  }
  @font-face {
    font-family: 'NanumMyeongjo';
    src: local('NanumMyeongjo'), url(${NanumMyeongjo_Bold}) format('woff');
    font-weight: 700;
  }
  @font-face {
    font-family: 'NanumMyeongjo';
    src: local('NanumMyeongjo'), url(${NanumMyeongjo_ExtraBold}) format('woff');
    font-weight: 800;
  }
`;
