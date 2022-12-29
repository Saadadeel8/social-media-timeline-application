import React from 'react';
import '../../styles/topbar.css';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social Media Application</span>
      </div>
      <div className="topbarCentre" />
      <div className="topbarRight" />
    </div>
  );
}
