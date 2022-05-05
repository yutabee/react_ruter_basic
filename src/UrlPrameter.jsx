import { useParams } from 'react-router-dom';

export const UrlPrameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlPrameterのページです</h1>
      <p>パラメーターは{id}です</p>
    </div>
  );
};
