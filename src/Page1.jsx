import { Link, useHistory } from 'react-router-dom';

export const Page1 = () => {
  //Array(n)でからの配列を用意→key()でインデックス番号をふる→スプレッド構文で配列に分解
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();
  const onClickDetailA = () =>
    history.push('/page1/detailA');

  return (
    <div>
      <h1>Page1ページです</h1>
      {/* //オブジェクトでかくこともできる */}
      <Link to={{ pathname: '/page1/detailA', state: arr }}>
        DetailA
      </Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
