
'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from '../../components/postform';
import PostList from '../../components/postlist';
import StyledHome from '../styledHome'

interface Post {
  id: number;
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
      <StyledHome>
        <h1>Blog App</h1>
        <PostForm fetchPosts={fetchPosts} />
        <PostList posts={posts} />
      </StyledHome>
  );
};

export default Home;
