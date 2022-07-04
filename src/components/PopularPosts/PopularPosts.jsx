import React from 'react';
import {popularPosts} from "../../constant";

const stylePostItem = {
  width: '50px'
}

const PostItem = (props) => {
  return (
    <ul className="w3-ul w3-hoverable w3-white">

      {
        popularPosts.map(item =>{
          return (
            <li key={item.id} className="w3-padding-16">
              <img src={item.imgUrl} className="w3-left w3-margin-right" style={stylePostItem}/>
              <span className="w3-large">{item.title}</span><br/>
              <span>{item.text}</span>
            </li>
          )
        })
      }

    </ul>
  )
}

const PopularPosts = () => {
  return (
    <>
      <div>
        <div className="w3-card w3-margin">
          <div className="w3-container w3-padding">
            <h4>Popular Posts</h4>
          </div>
          <PostItem/>
        </div>
        <hr/>
      </div>
    </>
  );
};

export default PopularPosts;