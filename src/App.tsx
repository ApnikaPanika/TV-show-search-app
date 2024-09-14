import { Route, Routes } from 'react-router-dom';
import './Reset.scss';
import './App.scss';
import axios from 'axios';
import Home from './Pages/Home/Home';
import IndividualShow from './Pages/IndividualShow/IndividualShow';
import Error404 from './Pages/Error/Error404';
import { Header } from './Components/Header/Header';

axios.defaults.baseURL = 'https://api.tvmaze.com';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="show/:id" element={<IndividualShow />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </div>
);

export default App;
