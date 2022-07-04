import React, {useEffect, useState} from 'react';
import styles from "./Article.module.css"
import Comments from './Comments';
import {useParams} from "react-router-dom";
import {BASE_URL} from "../../constant";

const Article = () => {
  const params = useParams();
  const postId = parseInt(params.id);

  const [post, setPost] = useState({});
  useEffect(() => {
    const url =  BASE_URL +  '/posts/' + postId;

    fetch(url)
      .then(response => response.json())
      .then(data => setPost(data))
    }, [])
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img src="https://avatarko.ru/img/kartinka/29/znamenitost_Avatar_28258.jpg" alt=""/>
        <p>Askar Ashimov 18 марта в 14:28</p> <br/>
      </div>

      <h1>{post.title}</h1>
      <p>Блог компании Авито, Usability, Управление продуктом</p>


      <img src={post.imgUrl} style={{width:"1000px"}}/> <br/>
     
      <p> {post.desc} </p> <br/> <br/>
      <Comments postId={postId}/>
    </div>


  );
};

export default Article;