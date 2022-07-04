import React, {useState} from 'react';
import {tags} from "../../constant";

const Tags = () => {
  const [tag, setTag]  = useState('New York');
  const clickTag = () => {
    if(tag === 'New York'){
      setTag('Bishkek')
    }else {
      setTag('New York');
    }
  }
  return (
    <div className="w3-card w3-margin">
      <div className="w3-container w3-padding">
        <h4 onClick={clickTag}>{tag}</h4>
      </div>
      <div className="w3-container w3-white">
        <p>
          {
            tags.map(item =>{
              return (
                <span key={item.id} className="w3-tag w3-light-grey w3-small w3-margin-bottom">{item.name}</span>

              )
            })
          }
        </p>
      </div>
    </div>

  );
};

export default Tags;