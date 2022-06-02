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
  console.log(categoriesData);
  console.log(postsData);
  const [posts, setPosts] = useState(postsData);
  const [categories, setCategories] = useState(categoriesData);

  return (
    <div className="blog">
      <Header categories={categories} />
      <Posts posts={posts} />
      <Footer />
    </div>
  );
}

// == Export
export default Blog;
