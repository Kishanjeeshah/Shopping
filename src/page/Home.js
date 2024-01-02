import { SiWelcometothejungle } from 'react-icons/si';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import image1 from '../components/image/Clothes.png'
import image2 from '../components/image/Electronics.png'
import image3 from '../components/image/footwear.png'
import image4 from '../components/image/kitchen.png'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <div>
      <Navbar/>
      <div className=' md:flex justify-center align-center gap-10'>

      <div className=' flex flex-col justify-center align-center'>

        <div className='mt-20 md:text-6xl text-4xl w-full font-bold animate-pulse'>
          <SiWelcometothejungle className='inline' />
          <span className='italic font-serif'>ELCOME !</span>
        </div>

        <div className='md:w-[400px] font-light py-2'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
        </div>

        <div className='md:w-[400px] text-center mt-5'>
          <FaLongArrowAltDown className='animate-bounce text-4xl w-full' />
          <button className='bg-green-600 p-2 text-white font-semibold rounded-md' ><NavLink to='/products'>SHOP NOW</NavLink></button>
        </div>

      </div>


        <div className='mt-20 sm:grid grid-cols-2 space-x-10 space-y-10 text-center'>
          <img src={image1} alt='clothes' width={250} height={250}/>
          <img src={image2} alt='Electronic' width={200} height={200}/>
          <img src={image3} alt='footwear' width={200} height={200}/>
          <img src={image4} alt='kitchen' width={200} height={200}/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Home