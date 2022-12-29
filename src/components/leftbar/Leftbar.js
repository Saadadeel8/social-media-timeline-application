import React from 'react';
import {
  BellOutlined,
  BookOutlined,
  BorderlessTableOutlined, EllipsisOutlined,
  HomeFilled,
  MailOutlined,
  TeamOutlined, UserOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { Container } from '../../styles/leftBar.styles';

export default function LeftSide() {
  const menus = [
    {
      id: 'home',
      label: 'Home',
      Icon: <HomeFilled />,
      link: '/home',
    },
    {
      id: 'explore',
      label: 'Explore',
      Icon: <BorderlessTableOutlined />,
    },
    {
      id: 'communities',
      label: 'Communities',
      Icon: <TeamOutlined />,
    },
    {
      id: 'notifications',
      label: 'Notifications',
      Icon: <BellOutlined />,
      link: '/notifications',
    },
    {
      id: 'messages',
      label: 'Messages',
      Icon: <MailOutlined />,
    },
    {
      id: 'bookmarks',
      label: 'Bookmarks',
      Icon: <BookOutlined />,
    },
    {
      id: 'profile',
      label: 'Profile',
      Icon: <UserOutlined />,
    },
  ];

  return (
    <Container>
      <div className="buttons">
        {menus.map((m) => (
          <Button>
            <div className="btn--icon">
              {m.Icon}
            </div>
            <span>{m.label}</span>
          </Button>
        ))}
        <Button>
          <div className="btn--icon">
            <EllipsisOutlined />
          </div>
          <span>More</span>
        </Button>
      </div>
      <button type="button" className="tweet-btn">
        Tweet
      </button>
    </Container>
  );
}
