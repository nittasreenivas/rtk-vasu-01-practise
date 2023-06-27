
import './App.css';
import { Provider } from 'react-redux';
import store from './app/store';

import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div >
      <Provider store={store}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </Provider>
    </div>
  );
}

export default App;
