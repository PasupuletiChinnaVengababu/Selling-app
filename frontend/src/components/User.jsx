import { useState,useEffect } from "react";

const User = () => {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [course,setCourse]=useState([])
    const [courseId,setCourseId]=useState("")

     const fetchData=async ()=>{
        const url=await fetch("http://localhost:3000/user/preview");
        const data = await url.json();
        console.log(data)
        setCourse(data)
      }
      useEffect(()=>{
        fetchData();
      },[])
    const userCreate = async () => {
        const data = await fetch("http://localhost:3000/user/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Firstname: firstname,
                Lastname: lastname,
                email,
                password
            })
        })
    }
    const userSignin = async () => {
        try {
            const data = await fetch("http://localhost:3000/user/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const result= await data.json()
            console.log(result)
            localStorage.setItem('token', JSON.stringify(result));
        }
        catch(error){
            console.log(error)
        }
        
    }
    console.log(courseId)
    const purchase= async(id)=>{
        const token = localStorage.getItem('token');
        const userId=JSON.parse(token)
        setCourseId(id)
        const coursePurchase= await fetch("http://localhost:3000/user/purchase/course",{
            method:"POST",
            headers:{
                 'Content-Type': 'application/json',
                 'token':userId
            },
            body:JSON.stringify({
                courseId:id,
               userId
            })
            
        })
        console.log( coursePurchase)

    }

    return (
        <>
            <h3>User Sign up</h3>
            <input type="text" placeholder="Firstname" onChange={(e) => setFirstName(e.target.value)} />
            <br />
            <input type="text" placeholder="Lastname" onChange={(e) => setLastName(e.target.value)} />
            <br />
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={() => userCreate()}>Submit</button>
            <h3>User Signin</h3>

            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={() => userSignin()}>Submit</button>
           
            <input type="text" onChange={(e)=>setCourseId(e.target.value)}/>
            {/* <button onClick={course}>Purchase</button> */}
        {course.map((item)=>(
            <h4 onClick={()=>purchase(item._id)}>{item._id}</h4>
        ))}
        
        </>
    )
}
export default User;
