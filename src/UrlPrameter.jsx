import { useParams, useLocation } from 'react-router-dom';

export const UrlPrameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search); //queryParameterを扱える関数を大量に用意してくれている
  console.log(query);
  return (
    <div>
      <h1>UrlPrameterのページです</h1>
      <p>クエリパラメーターは{query.get('name')}です</p>
    </div>
  );
};
