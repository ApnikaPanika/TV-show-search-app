import { Route, Routes } from 'react-router-dom';
import './Reset.scss';
import './App.scss';
import Home from './Pages/Home/Home';
import IndividualShow from './Pages/IndividualShow/IndividualShow';
import Header from './Components/Header/Header';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="show/:id" element={<IndividualShow />} />
    </Routes>
  </div>
);

export default App;
