import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import SimpleSlider from '../banner/Banner';
import './home.styles.scss'

const Home = () => {
  

  return (
    <div>
      <SimpleSlider/>
      <h2 className='product-cetagory'>Product cetagory</h2>
      <Directory />
      <Outlet />
      
    </div>
  );
};

export default Home;
