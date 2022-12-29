import PropTypes from 'prop-types';
import React, { useState } from 'react';
import moment from 'moment';
import { HeartOutlined, HeartTwoTone, MoreOutlined } from '@ant-design/icons';
import '../../styles/post.css';
import { likePost, unlikePost } from '../../services/common-service';

function Post({ post }) {
  const {
    id,
    user,
    likes_count,
    replies_count,
    created_at,
    text,
  } = post;
  const [like, setLike] = useState(likes_count);
  const [isliked, setIsLiked] = useState(false);

  const likeHandler = (postId) => {
    setIsLiked(true);
    // eslint-disable-next-line no-unused-expressions
    !isliked
      ? likePost(postId).then((res) => {
        if (res.status === 'ok') {
          setLike(like + 1);
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      }).catch(() => {
        setIsLiked(false);
      })
      : unlikePost(postId).then((res) => {
        if (res.status === 'ok') {
          setLike(like - 1);
          setIsLiked(false);
        } else {
          setIsLiked(true);
        }
      }).catch(() => {
        setIsLiked(true);
      });
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profile_image_url}
              alt=""
            />
            <span className="postUsername">
              {`${user.first_name} ${user.last_name}`}
            </span>
            <span className="postCompanyName">
              {`@${user.company_name}`}
            </span>
            ·
            <span className="postDate">{moment(created_at).fromNow()}</span>
          </div>
          <div className="postTopRight">
            <MoreOutlined />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{text}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {
              isliked
                ? <HeartTwoTone twoToneColor="#eb2f96" className="likeIcon" onClick={() => likeHandler(id)} alt="" />
                : <HeartOutlined className="likeIcon" onClick={() => likeHandler(id)} alt="" />
            }
            <span className="postLikeCounter">
              {like}
              {' '}
              people like it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommenttext">
              {replies_count}
              {' '}
              comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
