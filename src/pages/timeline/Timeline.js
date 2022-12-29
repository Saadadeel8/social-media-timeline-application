import React from 'react';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import NewsFeed from '../../components/newsFeed/Newsfeed';
import '../../styles/timeline.css';
import Topbar from '../../components/topbar/topbar';

function Timeline() {
  return (
    <div className="timeline-container">
      <Topbar />
      <Leftbar />
      <NewsFeed />
      <Rightbar />
    </div>
  );
}

export default Timeline;
