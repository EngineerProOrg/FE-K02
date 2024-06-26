import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UseContext() {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
      <div>
        <label>User</label>
        <input value={user} onChange={(e) => setUser(e.target.value)} />
      </div>
    </>
  );
}
