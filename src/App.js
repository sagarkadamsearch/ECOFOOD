
import { useSelector } from 'react-redux';
import './App.css';
import BasicAccordion from './Component/Accordian';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import SingleCardPage from './Component/S/SingleCardPage';
import AllRoutes from './Routes/AllRoutes';
import MainRoutes from './Routes/MainRoutes';


function App() {
  const mode = useSelector(store=>store.ProductsReducer.darkMode)
  return (
    <div className=''>
      <MainRoutes/>
    </div>
  );
}

export default App;
