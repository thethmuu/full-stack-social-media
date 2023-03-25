import React, { use, useCallback } from 'react';
import { IconType } from 'react-icons';
import { useRouter } from 'next/router';

import { BsDot } from 'react-icons/bs';
import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  isProtected?: boolean;
  alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  href,
  isProtected,
  onClick,
  alert,
}) => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (isProtected && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, currentUser, loginModal, isProtected]);

  return (
    <div onClick={handleClick} className='flex flex-row items-center'>
      <div className='relative flex items-center justify-center p-4 rounded-full cursor-pointer h-14 w-14 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden'>
        <Icon size={28} color='white' />
        {alert ? (
          <BsDot className='absolute -right-2 text-sky-500 -top-2' size={50} />
        ) : null}
      </div>
      <div className='relative items-center hidden gap-4 p-4 rounded-full cursor-pointer lg:flex items-row hover:bg-slate-300 hover:bg-opacity-10'>
        <Icon size={24} color='white' />
        <p className='hidden text-xl text-white lg:block'>{label}</p>
        {alert ? (
          <BsDot className='absolute left-3 text-sky-500 -top-1' size={50} />
        ) : null}
      </div>
    </div>
  );
};

export default SidebarItem;
