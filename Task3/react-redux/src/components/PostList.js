import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PostForm from './PostForm';

const PostList = () => {
  const [showModal, setShowModal] = useState(false);
  
  const dispatch = useDispatch();
  const { posts, page, limit, total } = useSelector(state => state.posts);
  
  useEffect(() => {
    dispatch(fetchPosts(page, limit)); 
  }, [dispatch, page, limit]);

  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(fetchPosts(newPage, limit));
    }
  };

  return (
    <div className="px-5">
      <h2>Posts</h2>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        Add New Post
      </button>

      <ul className="list-group">
        {posts.map(post => (
          <li className="list-group-item shadow" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div className='d-flex justify-content-center mt-4'>
  <div className="pagination mt-2">
    <button
      className="btn btn-secondary height=15px"
      onClick={() => handlePageChange(page - 1)}
      disabled={page === 1}
    >
      Previous
    </button>
    <span className="mx-2">Page {page} of {totalPages}</span>
    <button
      className="btn btn-secondary"
      onClick={() => handlePageChange(page + 1)}
      disabled={page === totalPages}
    >
      Next
    </button>
  </div>
</div>


      {showModal && (
        <>
          <div
            className={`modal fade ${showModal ? 'show' : ''}`}
            style={{ display: showModal ? 'block' : 'none' }}
            aria-labelledby="postModalLabel"
            tabIndex="-1"
            role="dialog"
          >
            <PostForm onClose={() => setShowModal(false)} />
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
};

export default PostList;
