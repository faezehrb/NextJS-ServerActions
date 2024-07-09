

import { useState, FormEvent } from 'react';
import axios from 'axios';
import {StyledForm, SubmitButton} from '../components/styledForm'

interface PostFormProps {
  fetchPosts: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ fetchPosts }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/posts', { title, content });
      setTitle('');
      setContent('');
      fetchPosts();
    } catch (error) {
      console.error('Error submitting the post', error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content</label>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <SubmitButton> Submit </SubmitButton>
    </StyledForm>
  ); 
};

export default PostForm;
