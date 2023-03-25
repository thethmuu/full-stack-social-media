import { useCallback } from 'react';
import { FaFeather } from 'react-icons/fa';
import { useRouter } from 'next/router';

import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/');
  }, [loginModal, router, currentUser]);

  return (
    <button className='w-full' onClick={onClick}>
      <div className='flex items-center justify-center p-4 mt-6 transition rounded-full cursor-pointer lg:hidden h-14 w-14 bg-sky-500 hover:bg-opacity-80'>
        <FaFeather size={24} color='white' />
      </div>

      <p
        className='px-4 py-2 mt-6 rounded-full cursor-pointer bg-sky-500 hover:bg-opacity-90
            hidden lg:block 
            text-center
            font-semibold
            text-white 
            text-[20px]'
      >
        Tweet
      </p>
    </button>
  );
};

export default SidebarTweetButton;
