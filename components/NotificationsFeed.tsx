import React, { useEffect } from 'react';
import { BsTwitter } from 'react-icons/bs';

import useCurrentUser from '@/hooks/useCurrentUser';
import useNotifications from '@/hooks/useNotifications';

const NotificationsFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return (
      <p className='p-6 text-xl text-center text-neutral-600'>
        No notifications
      </p>
    );
  }

  return (
    <ul className='flex flex-col'>
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <li
          key={notification.id}
          className='flex items-center p-6 gap-4 border-b-[1px] border-neutral-800'
        >
          <BsTwitter color='white' size={32} />
          <p className='text-white'>{notification.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default NotificationsFeed;
