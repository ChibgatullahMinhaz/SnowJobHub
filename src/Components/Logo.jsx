import { FaBriefcase } from 'react-icons/fa';
import { FaSnowflake } from 'react-icons/fa';

const Logo = () => (
  <div className="logo flex gap-x-2 items-center">
    <FaBriefcase size={25} color="#5A9BD4" />
    <span className='text-xl font-medium'>
  <span className='text-blue-500'>Snow</span>
  <span className='text-gray-700'>Job</span>
  <span className='text-blue-500'>Hub</span>
</span>

  </div>
);
export default Logo;
