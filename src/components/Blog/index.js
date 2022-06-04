import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import categoriesData from 'src/data/categories';
import NotFound from '../NotFound';
import Spinner from '../Spinner';

// data, styles et utilitaires
import './styles.scss';

// == Composant
function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(categoriesData);
  const [isZen, setIsZen] = useState(false);
  const [loading, setLoading] = useState(true);

  async function fetchPosts() {
    try {
      const result = await axios.get('https://oclock-open-apis.vercel.app/api/blog/posts');
      setPosts(result.data);
    }
    catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(fetchPosts, []);

  return (
    <div className="blog">
      <Header categories={categories} isZen={isZen} setIsZen={setIsZen} />
      {loading && <Spinner />}
      {!loading && (
      <Routes>
        <Route path="/" element={<Posts posts={posts} isZen={isZen} label="React" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      )}
      <Footer />
    </div>
  );
}

// == Export
export default Blog;
