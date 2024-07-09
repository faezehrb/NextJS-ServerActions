
import StyledPostList from '../components/styledPostList'

interface Post {
    id: number;
    title: string;
    content: string;
  }
  
  interface PostListProps {
    posts: Post[];
  }
  
  const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
      <StyledPostList>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            
            <p>{post.content}</p>
          </div>
        ))}
      </StyledPostList>
    );
  };
  
  export default PostList;
  