import React, {useState} from 'react';
import styles from "./Test.module.css";
import {toast} from "react-hot-toast";
import {BASE_URL} from "../../constant";

const UserCard = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.button}>
          <div>
            <h5>{props.data.id}.{props.data.name}</h5>
          </div>
          <div>
            <button><b>Follow</b></button>
          </div>
        </div>
        <h6>{props.data.email}</h6>
        <p>
          Phone number:{props.data.phone}, Website: {props.data.website}, Company
          name: {props.data.company.name}
        </p>
        <h6>
          15K Followers &#9679; 7K Following &#9679; Since April 30,2017
        </h6>
      </div>
    </>
  )
};

const Test = () => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);

  const increment = () => {
    setNumber(number + 1);
  }

  const decrement = () => {
    setNumber(number - 1);
  }

  const getData = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
  }

  const getUsers = () =>{
    const url = BASE_URL + "/users";
          fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
  }

  const addUsers = () => {
    const url = BASE_URL + "/users";
    const user = {
      name:"Sasha",
      age:18
    }
    const options = {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    }
        fetch(url, options)
          .then((response) => response.json)
          .then((data) => console.log(data))
  }

  const updateUser = () => {
    const url = BASE_URL + "/users/2";
    const users = {
      age: 23
    }
    const options = {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(users)
    }
    fetch(url, options)
      .then(response => console.log(response))
  }

  const deleteUser = () =>{
    const url = BASE_URL + "/users/1";
    const options = {
      method: "DELETE"
    }
    fetch(url, options)
      .then((response) => {
        if(response.status === 200){
          toast.success("Пользователь успешно удален");
        }else if(response.status === 404){
          toast.error("Данный пользователь не найден");
        }else {
          toast.error("Повторить попытку");
        }
      })
  }


  return (
    <div className="container">
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={getData}>Запрос данных</button>
      <button onClick={getUsers}>Получить пользователей</button>
      <button onClick={addUsers}>Добавить пользователей</button>
      <button onClick={updateUser}>Изменить пользователя</button>
      <button onClick={deleteUser}>Удалить пользователя</button>
      <h1>{number}</h1>
      {data.map((item) => <UserCard key={item.id} data={item}/>)}
    </div>
  );
};

export default Test;