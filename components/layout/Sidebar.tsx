import React from 'react';
import { signOut } from 'next-auth/react';
import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarTweetButton from './SidebarTweetButton';

import useCurrentUser from '@/hooks/useCurrentUser';

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: BsHouseFill,
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: BsBellFill,
      isProtected: true,
      alert: currentUser?.hasNotification,
    },
    {
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      icon: FaUser,
      isProtected: true,
    },
  ];

  return (
    <aside className='h-full col-span-1 pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo />
          {navItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isProtected={item.isProtected}
              alert={item.alert}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              label='Logout'
              icon={BiLogOut}
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
