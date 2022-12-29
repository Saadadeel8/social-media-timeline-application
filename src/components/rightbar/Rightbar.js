import React from 'react';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import { Container } from '../../styles/rightBar.styles';

const trends = [
  {
    title: 'iPhone 14 Pro',
    tweetsCount: '16.9k',
    category: 'Technology',
  },
  {
    title: 'LinkedIn',
    tweetsCount: '54.2K',
    category: 'Business & finance',
  },
  {
    title: 'Messi',
    tweetsCount: '980k',
    category: 'Sports',
  },
  {
    title: '#Apple',
    tweetsCount: '9,824',
    category: 'Business & finance',
  },
  {
    title: '#DataAnalysis',
    tweetsCount: '14.2k',
    category: 'Technology',
  },
];

export default function RightSide() {
  return (
    <Container>
      <div className="search-container">
        <form className="search-form">
          <div className="search-icon">
            <SearchOutlined />
          </div>
          <input
            placeholder="Search..."
          />
          <button
            className="submit-btn"
            type="button"
          >
            X
          </button>
        </form>
      </div>

      <div className="trends">
        <h2>Trends for you</h2>
        <div className="trends-list">
          {trends.map((trend, i) => (
            <div className="trend" key={`${trend.title}-${i}`}>
              <div className="trend__details">
                <div className="trend__details__category">
                  {trend.category}
                  <span className="trend__details__category--label">
                    Trending
                  </span>
                </div>
                <span className="trend__details__title">{trend.title}</span>
                <span className="trend__details__tweets-count">
                  {trend.tweetsCount}
                  {' '}
                  Tweets
                </span>
              </div>
              <MoreOutlined className="more-btn" />
            </div>
          ))}
        </div>
      </div>
      <div className="follows">
        <h2>Who to follow</h2>
        <span className="show-more-text">Show more</span>
      </div>
    </Container>
  );
}
