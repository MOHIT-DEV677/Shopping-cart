import {useState} from 'react'
const User = () => {
  const [user,setuser]=useState({
    name:"rohit",
    age:25,
    gender:"male",
    isMarried:true
  })
  function Changehandle(e){
    const name=e.target.name;
    const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
    setuser({...user,[name]:value});
  }
  return (
    <>
      <table>
        <tr>
          <th>name</th>
          <td>{user.name}</td>
        </tr>
        <tr>
          <th>age</th>
          <td>{user.age}</td>
        </tr>
        <tr>
          <th>gender</th>
          <td>{user.gender}</td>
        </tr>
        <tr>
          <th>isMarried</th>
          <td>{user.isMarried?"yes":"no"}</td>
        </tr>
      </table>
      <form>
        <input type="text" name="name" placeholder="fullname" value={user.name} onChange={Changehandle}/>
        <input type="numeric" name="age" placeholder="age" value={user.age} onChange={Changehandle}/>
        <div>
        <label htmlFor="">
          <input type="radio" name="gender" value="male" checked={user.gender==="male"} onChange={Changehandle}/>male
          <input type="radio" value="female" name="gender" checked={user.gender==="female"} onChange={Changehandle}/>female
        </label>
      </div>
      <label htmlFor="">
          <input type="checkbox" name="isMarried" checked={user.isMarried} onChange={Changehandle}/> isMarried
        </label>
      </form>
    </>
  )
}

export default User
