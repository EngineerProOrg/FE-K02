import { useEffect, useState } from "react";
import axios from 'axios'





// https://jsonplaceholder.typicode.com/
const UseEffect = () => {
  const [userNames, setUserNames] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => {

      const _userNames = data.map(item => item.username);

      setUserNames(_userNames)
    })
  }, [])


  return <div >
    <ul>
      {
        userNames.map(userName => <li key={userName}>{userName}</li>)
      }
    </ul>
  </div>
}

export default UseEffect;