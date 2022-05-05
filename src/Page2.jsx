import { Link } from 'react-router-dom';

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      {/* //page2配下のidを記載する　とりあえず１００としておく */}
      <Link to="/page2/９９９">URL Prameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">
        Query Prameter
      </Link>
    </div>
  );
};
