import React, {useState, useEffect} from 'react'

import users from 'users'

const View = (props) => {

  let [data, setData] = useState({});

  useEffect(() => {
    const request = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`);
      const json = await response.json();
      setData(data = json);
    }

    request();
  }, []);

    return <>
      {data.length == 0 ? <img className="loading" src="logo192.png" /> :
        <div>
          <h1>{data.title}</h1>
          <h2>By {data.userId}</h2>
          <p>{data.body}</p>
        </div>
      }
    </>
}

export default View
