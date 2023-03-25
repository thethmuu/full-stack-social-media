import Head from 'next/head';
import React from 'react';
import FollowBar from './layout/FollowBar';
import Sidebar from './layout/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='container h-screen max-w-6xl mx-auto xl:px-30'>
      <Head>
        <title>Full-stack Twitter</title>
        <link
          rel='shortcut icon'
          href='https://abs.twimg.com/favicons/twitter.2.ico'
          type='image/x-icon'
        />
      </Head>
      <div className='grid h-full grid-cols-4'>
        <Sidebar />
        <main className='col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800 overflow-y-auto'>
          {children}
        </main>
        <FollowBar />
      </div>
    </div>
  );
};

export default Layout;
