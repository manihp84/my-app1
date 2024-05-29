import { useEffect, useState } from "react";
import axios from "axios";

function Djangobackend(){
    const [students, setStudents] = useState([]);
    useEffect(()=>{
       async function getallstudents(){
        try{
            const students = await axios.get("http://127.0.0.1:8000/api/students/");
          console.log(students.data)
          setStudents(students.data)
        } catch (error){
            console.log(error)
        }
       }
       getallstudents();
    },[])
    return(
        <>
        <h1>react backend</h1>
        {
            students.map((student, index)=>{
                return(
                    <div key={index}>
                        <p>{student.sname}</p>
                        <p>{student.age}</p>
                        <p>{student.email}</p>
                        <p>{student.subject}</p>
                    </div>
                )
            })
        }
        </>
    )
}

export default Djangobackend;