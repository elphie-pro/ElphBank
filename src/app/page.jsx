import Started from '../components/Started'
import Navbar from '../components/Navbar.jsx'
import Why from '../components/Why.jsx'
import Savings from '../components/Savings.jsx'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Started />
      <Why />
      <Savings />
    </div>
      
  );
}
