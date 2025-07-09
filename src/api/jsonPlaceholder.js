const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page = 1, limit = 10) => {
  const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

export const searchPosts = async (query) => {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  const posts = await response.json();
  return posts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.body.toLowerCase().includes(query.toLowerCase())
  );
};