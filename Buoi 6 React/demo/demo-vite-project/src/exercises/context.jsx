import { useEffect, useState } from "react"

const fetchUserInfo = () => {
  return Promise.resolve({
    userName: 'bot.test',
    email: 'bot@gmail.com',
    roles: ['user', 'admin']
  })
}

const useUser = () => {
  // @TODO implement useUser here
}

const UserProfile = () => {
  const { name, email } = useUser()

  return <div >
    <p>Name: {name}</p>
    <p>Email: {email} </p>
  </div>
}

const EmployeeList = () => {
  const { checkIsAdmin } = useUser()
  const [listEmployee, setListEmployee] = useState(['Daniel', 'Jackson', "Micheal"])

  const removeEmployee = (employee) => {
    setListEmployee(list => list.filter(_employee => _employee !== employee))
  }

  return <div>
    <ul>
      {listEmployee.map(item => {
        return <li key={item}>
          <p>{item}</p>
          {checkIsAdmin() && <button onClick={() => removeEmployee(item)}>Remove</button>}
        </li>
      })}
    </ul>
  </div >
}

const Body = () => {
  return <div>
    <UserProfile />
    <EmployeeList />
  </div>
}

export const App = () => {

  /**
   * @TODO 
   * 1. using useEffect and useState to fetch user info
   * 2. using context to pass the info into child component
   */
  return <div>
    <Body />
  </div>
}