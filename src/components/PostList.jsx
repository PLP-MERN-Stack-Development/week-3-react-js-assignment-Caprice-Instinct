import { useState, useEffect } from 'react';
import { fetchPosts, searchPosts } from '../api/jsonPlaceholder';
import Card from './Card';
import Button from './Button';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const loadPosts = async (pageNum = 1) => {
    setLoading(true);
    setError(null);
    try {
      const newPosts = await fetchPosts(pageNum, 10);
      setPosts(prev => pageNum === 1 ? newPosts : [...prev, ...newPosts]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setIsSearching(false);
      setPage(1);
      loadPosts(1);
      return;
    }
    
    setLoading(true);
    setError(null);
    setIsSearching(true);
    try {
      const searchResults = await searchPosts(searchQuery);
      setPosts(searchResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadPosts(nextPage);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Posts from API</h2>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <Button onClick={handleSearch}>Search</Button>
          {isSearching && (
            <Button variant="secondary" onClick={() => {
              setSearchQuery('');
              setIsSearching(false);
              setPage(1);
              loadPosts(1);
            }}>
              Clear
            </Button>
          )}
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Error: {error}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="h-fit">
              <h3 className="font-semibold mb-2 capitalize">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{post.body}</p>
            </Card>
          ))}
        </div>

        {loading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {!isSearching && posts.length > 0 && !loading && (
          <div className="text-center mt-6">
            <Button onClick={loadMore}>Load More</Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PostList;