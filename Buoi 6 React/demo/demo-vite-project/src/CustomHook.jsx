import { useEffect, useState } from "react";

// handle logic get user info, set user info, username, age, permisison, role
const useUser = (userId) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/').then(user => setUser(user)).finally(() => {
      setLoading(false)
    })
  }, [])

  return {
    loading,
    user,
    userName: user.userName,
    role: user.role,
    avatar: user.avatar
  }
}

const UseCustomHook = () => {
  const { loading, userName } = useUser(1);

  if (loading) return <>Loading</>

  return <>{userName}</>
}

export default UseCustomHook;


