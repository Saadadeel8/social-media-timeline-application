import endpoints from './api-end-points';

const token = '<---ADD BEARER TOKEN--->';

// eslint-disable-next-line consistent-return
export const fetchTimelineData = async (page) => {
  const response = await fetch(`${endpoints.main.getTimelinePosts}?page=${page}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
export const unlikePost = async (postId) => {
  const response = await fetch(`${endpoints.common.unlikePost}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json charset=UTF-8',
    },
    body: JSON.stringify({
      post_id: postId,
    }),
  });
  return response.json();
};

export const likePost = async (postId) => {
  const response = await fetch(`${endpoints.common.likePost}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json charset=UTF-8',
    },
    body: JSON.stringify({
      post_id: postId,
    }),
  });
  return response.json();
};
