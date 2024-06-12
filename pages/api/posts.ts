
import { NextApiRequest, NextApiResponse } from 'next';

interface Post {
  id: number;
  title: string;
  content: string;
}

let posts: Post[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    const newPost: Post = { id: posts.length + 1, title, content };
    posts.push(newPost);
    res.status(201).json({ message: 'Post created' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
