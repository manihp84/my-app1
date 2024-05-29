import React, { useState } from 'react';
function Reactapicomp() {
    const [data, setData] = useState(null);
  
    function handleClick() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/');
      xhr.responseType = 'json';
      xhr.onload = function() {
        if (xhr.status === 200) {
        //   setData('response', this.response);
        // setData('response', this.response)
        const limitedData = this.response.slice(0, 10);
        setData(limitedData);
        

        }
      };
      xhr.send();
    }
    // console.log(data)
    return (
      <div>
        <button onClick={handleClick}>Get Data</button>
     
        
       {data ? <div> {
        data.map((ele, index)=>{
            return(
                <>
                <p>{ele.title}</p>
                </>
            )
        })
      } </div> : <div>Loading...</div>} 
      </div>
    );
  }
// import { React, useEffect, useState } from "react";

// import axios from "axios";
// const baseURL = "https://jsonplaceholder.typicode.com/posts/";

// function Reactapicomp() {
//     const [post, setPost] = useState(null);

//     useEffect(() => {
//         axios.get(baseURL).then((response) => {
//             setPost(response.data);
//         });
//     }, []);
//     if (!post) return null;
//     return (
//         <div>
//             <p>Hello</p>{
//                 post.map((ele, index) => {
//                     return (
//                         <>
//                             <p>{ele.title}</p>
//                             <p>{ele.id}</p>
//                             <p>{ele.body}</p>
//                             <p>{ele.title}</p>
//                         </>
//                     )
//                 })
//             }
//         </div>
//     )
// }



export default Reactapicomp;