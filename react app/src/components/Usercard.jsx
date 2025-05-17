const userdata=[{
    profile:"image.png",
    name:"shafee",
    role:"backend-developer",
    place:"pudhukottai",
    skills:["ai and ml","web dev","cybersecurity"],
    online:true
},{
    profile:"image.png",
    name:"karthik",
    role:"ml-engnieer",
    place:"chennai",
    skills:["ai and ml","web dev","frontend-developer"],
    online:false
},{
    profile:"image.png",
    name:"mohit",
    role:"backend-developer",
    place:"karaikudi",
    skills:["backend","front-end","cybersecurity"],
    online:true
},
{
    profile:"image.png",
    name:"shiva",
    role:"backend-developer",
    place:"madurai",
    skills:["backend","cybersecurity","ai and ml"],
    online:false
},
];
function User1(props){
   return (
    <div className="card-container">
        <img src={props.profile} alt="user" className="img"/>
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <div>
            <h3>{props.name}</h3>
            <h3>{props.role}</h3>
            <h3>{props.place}</h3>
        </div>
        <div className="buttons">
            <button className="primary">message</button>
            <button className="primary outline">follow</button>
        </div>
        <div className="skills">
            <h6>skill</h6>
            <ul>
                {props.skills.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
   );
}
const Usercard = () => {
  return (
    <>
     {userdata.map((skill,index)=>(
        <User1 key={index} profile={skill.profile} name={skill.name} role={skill.role} online={skill.online} place={skill.place} skills={skill.skills} />
     ))} 
    </>
  )
}

export default Usercard
