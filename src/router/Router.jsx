import { Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { page1Routes } from './Page1Routes';
import { page2Routes } from './Page2Routes';
import { Page404 } from '../Page404';

export const Router = () => {
  return (
    <Switch>
      {/* exactはパスが完全一致したものをルーティングする。これがなければa部分一致のホームが永遠にレンダリングされる */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={(
          { match: { url } } //render関数の引数には自動でpropsが定義されている.引数なしで直接パス書いてもネストは作れる
        ) => (
          <Switch>
            {page1Routes.map((route) => {
              const { path, exact, children } = route;
              return (
                <Route
                  key={path}
                  exact={exact}
                  path={`${url}${path}`}
                >
                  {children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={(
          { match: { url } } //render関数の引数には自動でpropsが定義されている.引数なしで直接パス書いてもネストは作れる
        ) => (
          <Switch>
            {page2Routes.map((route) => {
              const { path, exact, children } = route;
              return (
                <Route
                  key={path}
                  exact={exact}
                  path={`${url}${path}`}
                >
                  {children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      {/* //アスタリスクはどれにも一致しない場合に表示する */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
