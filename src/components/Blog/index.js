import { useState } from 'react';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
function Blog() {
  const [posts, setPosts] = useState(postsData);
  const [categories, setCategories] = useState(categoriesData);
  const [isZen, setIsZen] = useState(true);

  return (
    <div className="blog">
      <Header categories={categories} isZen={isZen} setIsZen={setIsZen} />
      <Posts posts={posts} isZen={isZen} />
      <Footer />
    </div>
  );
}

// == Export
export default Blog;
