import { Page2 } from '../Page2';
import { UrlPrameter } from '../UrlPrameter';

export const page2Routes = [
  {
    path: '/',
    exact: 'true',
    children: <Page2 />
  },
  {
    path: '/:id', //UrlPrameterを扱う場合は:を使う。今回はIdを使用するけど中身はなんでもいい。
    exact: 'false',
    children: <UrlPrameter />
  }
];
