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
      {!data.title ? <img className="loading" src="logo192.png" /> :
        <div>

          <div className="backing-box"><h1>{data.title}</h1></div>
          <h2>By {users[data.userId]}</h2>
          <p>{data.body}</p>
        </div>
      }
    </>
}

export default View
