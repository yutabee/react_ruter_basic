//
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/Router';
import './styles.css';

export default function App() {
  return (
    // BrowserRouter配下でルーティングを行うことができる
    //linkタグはhtmlで言うとaタグみたいなもの
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
