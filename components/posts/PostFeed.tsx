import usePosts from '@/hooks/usePosts';

import PostItem from './PostItem';

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [], isLoading } = usePosts(userId);

  if(isLoading) <p>loading tweets...</p>

  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem userId={userId} key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostFeed;
