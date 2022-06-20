import React from 'react';

const BlogEntries = () => {
  return (
    <div>
      <div className="w3-card-4 w3-margin w3-white">
        <img src="/w3images/woods.jpg" alt="Nature" style={{width: '100%'}} />
        <div className="w3-container">
          <h3><b>TITLE HEADING</b></h3>
          <h5>Title description, <span className="w3-opacity">April 7, 2014</span></h5>
        </div>
      </div>
    </div>
  );
};

export default BlogEntries;