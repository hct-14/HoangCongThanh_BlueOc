import axios from 'axios';
import { ADD_POST, FETCH_POSTS } from '../postTypes';

export const fetchPosts = (page = 1, limit = 20) => async dispatch => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: page, 
          _limit: limit  
        }
      });
      dispatch({
        type: FETCH_POSTS,
        payload: {
          posts: response.data,
          page: page,
          limit: limit,
          total: parseInt(response.headers['x-total-count'], 10),  // Đọc tổng số bài viết từ header (nếu có)
        }
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post
});
