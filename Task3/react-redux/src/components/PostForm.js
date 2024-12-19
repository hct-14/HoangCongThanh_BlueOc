import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions/postActions';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const PostForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      setError('Both title and body are required.');
      return;
    }

    const newPost = {
      userId: 1,
      id: Date.now(),
      title,
      body,
    };

    dispatch(addPost(newPost));
    setTitle('');
    setBody('');
    setError('');
    onClose(); 

    toast.success('Post successfully!');
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add New Post</h5>
          <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                id="body"
                className="form-control"
                rows="3"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Enter body"
              />
            </div>

            <div className="d-flex justify-content-center mt-3">
              <button type="submit" className="btn btn-primary">
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
