import logo from './logo.svg';
import './App.css';
import Ip from './Ip';
import Font, { Text } from 'react-font'
// import * as ipInfo from 'ip-info-finder';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  // https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0 
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Ip />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
