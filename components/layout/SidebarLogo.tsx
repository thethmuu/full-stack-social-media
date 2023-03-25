import { useRouter } from 'next/router';
import { BsTwitter } from 'react-icons/bs';

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className='flex items-center justify-center p-4 rounded-full cursor-pointer h-14 w-14 hover:bg-blue-300 hover:bg-opacity-10'
    >
      <BsTwitter size={28} color='#31A4F1' />
    </div>
  );
};

export default SidebarLogo;
