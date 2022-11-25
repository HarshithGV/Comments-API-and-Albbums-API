//import logo from './logo.svg';
import './App.css';
//import './style.css';
import React,{useEffect, userEffect, useState} from 'react';


function App() {
  
const [data,setData] = useState([]);
const url ="https://jsonplaceholder.typicode.com/comments/";
useEffect(() => {
  fetch(url)
  .then(response => response.json()).then(json  => {
    console.log("json data",json)
    setData(json)
  }).catch(e => {
    console.log("e",e)
  })
},[])

  return (
            <div className="App">
              <h2>API GET METHOD DATA</h2>
            
                 
                   <table>
                    <tr>
    <th>POST ID</th>
    <th>ID</th>
    <th>NAME</th>
    <th>EMAIL</th>
    <th>BODY</th>
  </tr>
             {data.map((item, index) =>(
                <tr key={index}>    
                     <td> 
                    {item.postId}
                    </td>
                    <td>
                     {item.id}
                     </td>
                     <td>
                     {item.name}
                     </td>
                     <td>
                     {item.email}
                     </td>
                     <td>
                     {item.body}
                     </td>
                     </tr>
             ))}
                    </table>
                  
                 
                
            </div>
  );
}

export default App;
