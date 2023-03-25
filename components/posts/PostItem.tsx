import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';

import Avatar from '../Avatar';
import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import useLike from '@/hooks/useLike';

interface PostItemProps {
  userId?: string;
  post: Record<string, any>;
}
dayjs.extend(relativeTime);

const PostItem: React.FC<PostItemProps> = ({ post, userId }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const { hasLiked, toggleLike } = useLike({ postId: post.id, userId });
  const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;

  const goToPost = () => {
    router.push(`/posts/${post.id}`);
  };

  const onLike = async (event: any) => {
    event.stopPropagation();

    if (!currentUser) {
      return loginModal.onOpen();
    }

    toggleLike();
  };

  const formattedCreatedAt = useMemo(() => {
    if (!post.createdAt) {
      return null;
    }
    return dayjs(post.createdAt).fromNow();
  }, [post.createdAt]);

  return (
    <div
      onClick={goToPost}
      className='border-b-[1px] 
        border-neutral-800 
        p-5 
        cursor-pointer 
        hover:bg-neutral-900 
        transition text-white flex items-start gap-3'
    >
      <Avatar userId={post.user.id} />
      {/* right column */}
      <div>
        <header className='flex items-center gap-2'>
          <p className='font-semibold text-white cursor-pointer hover:underline'>
            {post.user.name}
          </p>
          <span className='hidden cursor-pointer text-neutral-500 hover:underline md:block'>
            @{post.user.username}
          </span>
          <time className='text-sm text-neutral-500'>{formattedCreatedAt}</time>
        </header>
        <p className='mt-1 text-white'>{post.body}</p>
        <footer className='flex items-center gap-10 mt-3'>
          <div className='flex items-center gap-2 transition cursor-pointer text-neutral-500 hover:text-sky-500'>
            <AiOutlineMessage size={20} />
            <p>{post.comments?.length || 0}</p>
          </div>
          <button
            onClick={onLike}
            className='flex items-center gap-2 transition cursor-pointer text-neutral-500 hover:text-red-500'
          >
            <LikeIcon color={hasLiked ? 'red' : ''} size={20} />
            <p>{post.likedIds.length}</p>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PostItem;
