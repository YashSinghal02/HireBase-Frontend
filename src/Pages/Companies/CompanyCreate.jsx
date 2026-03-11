import "./CompanyCreate.css";
import google from '../../assets/Googlelogo.png'
import Wipro from '../../assets/Wipro.png'
import Microsoft from '../../assets/Microsoft.png'
import Airtel from '../../assets/Airtel.png'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { apiTryCatch } from "@/Utils/trycatch";
import { api } from "@/Utils/axiosConfig";
import { useState,useEffect } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import NoPageFound from "../../assets/NoPageFound.png"


function CompanyCreate({ jobs,deleteCard }) {
// const[data,setData]=useState([]);

//   async function getCompanies() {
//     await apiTryCatch(async()=>{
//       const response=await api.get("/companies/");
//       setData(response.data.data)
//     })
//   }
// useEffect(() => {
//     getCompanies();
//   }, [])

//   async function deleteCard(id) {
//     await apiTryCatch(async()=>{
//       await api.delete(`/companies/${id}`);
//       getCompanies()
//     })
//   }

  return (
    <div className="company-table">
      <div className="company-table-head">
        <span>Logo</span>
        <span>Name</span>
        <span>Date</span>
        <span>Action</span>
      </div>

      {jobs.length >0? jobs.map((company) => {
        let created = dayjs(company.createdAt).format("DD/MM/YY");
        return(
        <div className="company-row" key={company._id}>
          <div className="logo-col">
            <img src={company.logo ? company.logo : google}  alt={company.companyName} />
          </div>
          <div>{company.companyName}</div>
          <div>{created}</div>
         <div className="action-col">
          <Link to={`/dashboard/companyedit/${company._id}`}>
  <div className="action-btn edit-btn">
    <MdEdit size={18} />
  </div>
  </Link>
  <div className="action-btn delete-btn" onClick={() => deleteCard(company._id)}>
    <MdDelete size={18} />
  </div>
</div>
        </div>
      )
      }):<img src={NoPageFound} alt="" style={{width:"350px",margin:"auto",padding:"10px"}}/>}
    </div>
  );
}

export default CompanyCreate;