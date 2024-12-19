import React from 'react';
import PostList from './components/PostList';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

const App = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <h1>React Redux Posts</h1>
      </div>
      {/* <PostForm /> */}
      <PostList />
      
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </div>
  );
};

export default App;
