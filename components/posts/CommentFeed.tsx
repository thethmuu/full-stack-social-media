import CommentItem from './CommentItem';

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
  console.log(comments);
  
  return (
    <>
      {comments.map((comment: Record<string, any>) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default CommentFeed;
