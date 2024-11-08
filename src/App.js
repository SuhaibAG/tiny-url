import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx'
import URLShrinking from './components/URLShrinking.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="container">
      <Header/>
      <URLShrinking/>
      <Footer year={2024}/>
    </div>
  );
}

export default App;
