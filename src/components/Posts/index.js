import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Post from '../Post';

import './styles.scss';

function Posts({ posts, isZen, label }) {
  return (
    <main className={classNames('posts', { 'posts--zen': isZen })}>
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className="posts-list">
        {
          posts.map((post) =>
            /* {post.category}=
            {
              label
            }; */
            <Post key={post.id} {...post} />)
        }
      </div>
    </main>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  })).isRequired,
  isZen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default React.memo(Posts);
