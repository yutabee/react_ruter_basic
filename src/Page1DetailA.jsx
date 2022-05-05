import { useLocation, useHistory } from 'react-router-dom';

export const Page1DetailA = () => {
  const { state } = useLocation(); //useLocationでパスnameだけでなくオブジェクトの情報を引き渡すことができる
  console.log(state);
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAのページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
