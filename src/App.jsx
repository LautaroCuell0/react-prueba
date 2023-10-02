import { useEffect, useState } from 'react'
import './App.css' 
import FormuCrud from './Formu'
import UserTable from './Table'
// import { useEffect, useState } from 'react'
function App() {

const userData= [
  {id:1, name: 'Juan', email: 'juan@gmail.com'},
  {id:2, name: 'Sofia', email: 'sofia@gmail.com'},
  {id:3, name: 'Ignacio', email: 'ignacio@gmail.com'}
]

const [users, setUsers] = useState(userData);

const addUsers = (user)=>{
    user.id = users.length+1
    setUsers([...users, user])
} 





  return (
    <>
    <h1>Hola </h1>
      
      <div className='row'>
        <div className='col-xl-6 col-lg-6 col-md-10 col col-sm-12'>
          <UserTable user={users}/>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-10 col col-sm-12'>
          <FormuCrud addUsers={addUsers}/>
        </div>
      </div>
    </>
  )

}
export default App
