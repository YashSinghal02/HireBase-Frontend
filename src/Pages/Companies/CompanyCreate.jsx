import "./CompanyCreate.css";
import google from '../../assets/Googlelogo.png'
import Wipro from '../../assets/Wipro.png'
import Microsoft from '../../assets/Microsoft.png'
import Airtel from '../../assets/Airtel.png'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


function CompanyCreate() {
  const companies = [
    { id: 1, name: "Google", date: "2026-02-03", logo: google },
    { id: 2, name: "Microsoft", date: "2026-02-03", logo: Microsoft },
    { id: 3, name: "Wipro", date: "2026-02-04", logo: Wipro },
    { id: 4, name: "Airtel", date: "2026-02-05", logo:Airtel },
  ];

  return (
    <div className="company-table">
      <div className="company-table-head">
        <span>Logo</span>
        <span>Name</span>
        <span>Date</span>
        <span>Action</span>
      </div>

      {companies.map((company) => (
        <div className="company-row" key={company.id}>
          <div className="logo-col">
            <img src={company.logo} alt={company.name} />
          </div>
          <div>{company.name}</div>
          <div>{company.date}</div>
         <div className="action-col">
  <div className="action-btn edit-btn">
    <MdEdit size={18} />
  </div>
  <div className="action-btn delete-btn">
    <MdDelete size={18} />
  </div>
</div>
        </div>
      ))}
    </div>
  );
}

export default CompanyCreate;