import { Container } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import New from './components/New';
import Footer from './components/Footer';
import "./style/landingpage.css"

const App = () => {
  return (
    <div>
      <div className='myBG'>
      <NavigationBar />
      <Intro />
      </div>
      <div className='trending'>
      <Trending />
      </div>
      <div className='new'>
      <New />
      </div>
      <Footer />
    </div>
  );
}

export default App;
