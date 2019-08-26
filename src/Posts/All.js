import React, {useState, useEffect} from 'react'

import users from 'users'
import View from './View'

const All = () => {

  let [data, setData] = useState([]);
  let [view, setView] = useState(0);
  let [viewId, setViewId] = useState(0);

  useEffect(() => {
    const request = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(data = json);
    }

    request();
  }, []);

  const allView = () => {
    return <>
        <div className="all">
          <h1>All Posts</h1>
          <ul>
            {data.length == 0 ? <img className="loading" src="logo192.png" /> :
              data.map((item, index) => (
              <div className="item">
                <li key={item.id} onClick={() =>{setView(view = 1); setViewId(viewId = item.id)}} >{item.title}</li>
                <div className="backing-box"></div>
              </div>
            ))}
          </ul>
        </div>
    </>
  }

  const singleView = (id) => {
    return <>
        <div className="view">
          <View id={id} />
          <button onClick={() => setView(view = 0)}>Back</button>
        </div>
    </>
  }

    return <>
        {view !== 0 ? singleView(viewId) : allView()}
    </>
}

export default All
