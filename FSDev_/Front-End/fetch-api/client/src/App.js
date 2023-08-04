import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'

import './styles/App.css';

import {
  Banner, MenuBar,MainContent
} from './components'

function App() {
  return (
    <div className="container-fluid">
      <Banner></Banner>
      <MenuBar></MenuBar>
      <MainContent></MainContent>
    </div>
  );
}

export default App;