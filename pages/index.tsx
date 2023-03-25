import Header from '@/components/Header';
import PostFeed from '@/components/posts/PostFeed';
import PostCreateForm from '@/components/Form';

export default function Home() {
  return (
    <>
      <Header label='Home' />
      <PostCreateForm placeholder="What's happening?" />
      <PostFeed />
    </>
  );
}
