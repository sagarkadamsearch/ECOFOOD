
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";
import AOS from "aos"
import 'aos/dist/aos.css'


export const AdminAbout=()=>{
 const[users,setUsers]=useState([])
    const data = [
        {
          id: 1,
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          firstName: "Ankit",
          lastName: "Kumar",
          email: "ankit@gmail.com",
          orders: 3
        },
        {
          id: 2,
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          firstName: "Amit",
          lastName: "Sharma",
          email: "amitsharma@gmail.com",
          orders: 5
        },
        {
          id: 3,
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          firstName: "Priya",
          lastName: "Patel",
          email: "priyapatel@gmail.com",
          orders: 8
        },
        {
          id: 4,
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          firstName: "Neha",
          lastName: "Singh",
          email: "nehasingh@gmail.com",
          orders: 6
        },
        {
          id: 5,
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          firstName: "Vikram",
          lastName: "Yadav",
          email: "vikramyadav@gmail.com",
          orders: 9
        },
        {
          id: 6,
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          firstName: "Pooja",
          lastName: "Mishra",
          email: "poojamishra@gmail.com",
          orders: 4
        },
        {
          id: 7,
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          firstName: "Suresh",
          lastName: "Gupta",
          email: "sureshgupta@gmail.com",
          orders: 7
        },
        {
          id: 8,
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          firstName: "Manisha",
          lastName: "Verma",
          email: "manishaverma@gmail.com",
          orders: 10
        },
        {
          id: 9,
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          firstName: "Deepak",
          lastName: "Rajput",
          email: "deepakrajput@gmail.com",
          orders: 12
        },
        {
          id: 10,
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          firstName: "Anita",
          lastName: "Kaur",
          email: "anitakaur@gmail.com",
          orders: 11
        }
      ];
     // console.log(users);
      const handleDelete=(id)=>{
         const newarr=data.filter((e,i)=>{return e.id!=id})
         console.log(newarr)
         setUsers(newarr)
      }
      useEffect(()=>{
           setUsers(data);
           AOS.init({duration:2000})
      },[])
  
return(<>
    <h1 className="text-center mt-4"> Users<span className="text-danger" style={{marginLeft:"10px"}}>details</span></h1>
    <DIV data-aos="fade-right">
  <div className="outerDiv d-flex flex-column align-items-center">
<table className="headerTable">
<thead>
  <tr className="bg-danger text-white" >
    <th></th>
    <th>first name</th>
    <th>last name</th>
    <th>email</th>
    <th>orders</th>
    <th></th>
  </tr>
</thead>

<tbody className="gap-3">
{users&&
    users.map((e, i) => {
      return (
        <tr className="container shadow " key={i} style={{height:"80px"}} >
          <td style={{width:"20%"}}>
            <img  src={e.image} alt="" />
          </td>
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>{e.email}</td>
          <td>{e.orders}</td>
          <td>
            <button className="deleteBtn" onClick={()=>{handleDelete(e.id)}} ><MdDeleteForever className="my-1 fs-4"/></button>
          </td>
        </tr>
      );
    })}
</tbody>
</table>
</div>
</DIV>
</>   
  
)    
}
const DIV=styled.div`
.outerDiv{
width: 100%;
}
display: flex;
margin-top: 25px;

img {
width: 30%;
border-radius: 10px;
}
.headerTable {
width: 75%;
border-collapse: collapse;
margin-left: 20px;
}
.headerTable th, .headerTable td {
text-align: center;
padding: 10px;
border: none; 
}
.item-image {
width: 50px;
border-radius: 10px;
}
.headerTable tr {
margin: 5px;
}
.deleteBtn{
border:none;
background-color:#dc3545;
color: white;
border-radius: 3px;
width: 50px;
}
`