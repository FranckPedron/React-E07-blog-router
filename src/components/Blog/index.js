import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from '../NotFound';
import Spinner from '../Spinner';

// data, styles et utilitaires
import './styles.scss';

function useFetchData(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      setLoading(false);
    }
  };
  useEffect(fetchData, []);

  return [loading, data];
}

// == Composant
function Blog() {
  const [isZen, setIsZen] = useState(false);

  const [postsLoading, posts] = useFetchData('https://oclock-open-apis.vercel.app/api/blog/posts');
  const [categoriesLoading, categories] = useFetchData('https://oclock-open-apis.vercel.app/api/blog/categories');

  return (
    <div className="blog">
      {categoriesLoading && <Spinner />}
      {!categoriesLoading
      && <Header categories={categories} isZen={isZen} setIsZen={setIsZen} />}
      {postsLoading && <Spinner />}
      {!postsLoading && (
      <Routes>
        {
          categories.map((category) => (
            <Route
              key={category.label}
              path={category.route}
              element={<Posts posts={posts} isZen={isZen} label={category.label} />}
            />
          ))
        }
        <Route path="*" element={<NotFound />} />
      </Routes>
      )}
      <Footer />
    </div>
  );
}

// == Export
export default Blog;
