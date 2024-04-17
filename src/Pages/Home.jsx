import NavBar from '../components/NavBar';
import TicketCard from '../components/TicketCard';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <NavBar />
      
      <div className='text-sm breadcrumbs pl-20'>
        <ul>
          <li>
            <a>Help Desk</a>
          </li>
          <li>
            <a>Submit a Request</a>
          </li>
        </ul>
      </div>
      <div className='flex justify-center'>
      <TicketCard/>
      </div>
      
      <Footer />
    </div>
    
  );
};

export default Home;
