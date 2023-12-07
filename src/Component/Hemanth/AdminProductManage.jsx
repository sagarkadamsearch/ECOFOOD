import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import { AdminProductSearch } from "./AdminProductSearch";
import { Link, useSearchParams } from "react-router-dom";
import { getAdminProducts } from "../../Redux/ProductReducer/action";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import AOS from "aos"
import 'aos/dist/aos.css'
import Loader from "../Loader";


export const AdminProductManage=()=>{
   
  const [loading,setLoading]= useState(false)
   
    const[search,setSearch]=useState("")
    const dispatch=useDispatch()



    const products = useSelector((store) => store.ProductsReducer.adminProducts);
    const [searchParams] = useSearchParams();
  
    const paramsObj = {
      params: {
        category: searchParams.getAll("category"),
        brand:searchParams.getAll("cate"),
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
      },
    };
  
  const handleDelete=(id)=>{
    setLoading(true)
   axios.delete(`https://grocryapi.onrender.com/products/${id}`)
   .then((res)=>{
    dispatch(getAdminProducts(paramsObj))
    setLoading(false)
   })
  }






    useEffect(() => {
              dispatch(getAdminProducts(paramsObj))
    }, [searchParams]);
    
    // useEffect(()=>{
    //     if(search===""){
    //     }else{

    //     }

    // },[search])

    useEffect(()=>{
      AOS.init({duration:2000})
      },[])

      if(loading){
        return <Loader/>
      }

    return(
   <>
        {/* <input type="text" onChange={(e)=>{setSearch(e.target.value)}} /> */}

                  {/* <Link className="editBtn text-decoration-none" to='/addNewProduct'>ADD NEW Product</Link> */}
             

        <DIV>
          <div className="ms-3 mt-5" style={{width:"20%"}}>
          <AdminProductSearch/>
          </div>
        <div className="outerDiv" data-aos="fade-left">
    <table className="headerTable">
      <thead>
        <tr className="bg-danger text-white">
          <th>Item</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className="gap-3">
        {products &&
          products.map((e, i) => {
            return (
              <tr className="container shadow " key={i} style={{height:"80px"}}>
                <td>
                  <img src={e.image} alt="" />
                </td>
                <td>{e.title}</td>
                <td>{e.category}</td>
                <td>{Math.floor(e.price)}</td>
                <td>1</td>
                <td>
                  <button className="editBtn" > 
                  <Link className="editBtn text-decoration-none " to={`/edit/${e.id}`}><AiFillEdit className="my-1 fs-4"/></Link>
                  </button>
              
                </td>
               
                <td>
                  <button className="deleteBtn" onClick={() => { handleDelete(e.id); }}><MdDeleteForever className="my-1 fs-4"/></button>
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
    width: 20%;
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


.pay {
  background-color: white;
  color: #dc3545;
  border: 1px solid #dc3545;
}
.plusMin{
  border:none;

  border-radius: 4px;
}

.deleteBtn{
  border:none;
  background-color:#dc3545;
  color: white;
  border-radius: 3px;
  width: 50px;
}
.editBtn{
  border:none;
  background-color:green;
  color: white;
  border-radius: 3px;
  width: 40px;
}
`