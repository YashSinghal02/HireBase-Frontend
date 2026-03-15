// import LeftMainProfile from "./LeftMainProfile/LeftMainProfile";
// import "./MainProfile.css";
// import RightMainProfile from "./RightMainProfile/RightMainProfile";
// import RightCompanyMainProfile from "./RightMainProfile/RightCompanyMainProfile";
// import LeftCompanyMainProfile from "./LeftMainProfile/LeftCompanyMainProfile";
// import CompanyCurrentOpenings from "./CompanyCurrentOpenings ";

// function MainProfile({ refreshProfile }) {
//   return (
//     <div className="main-profile-wrapper">
//       <div className="combine-main-profiles">
//         {/* <LeftMainProfile refreshProfile={refreshProfile} />
//         <RightMainProfile refreshProfile={refreshProfile} /> */}
//         <LeftCompanyMainProfile refreshProfile={refreshProfile}/>
//         <RightCompanyMainProfile refreshProfile={refreshProfile}/>
//         <CompanyCurrentOpenings />
//       </div>
//     </div>
//   );
// }

// export default MainProfile;

import { useContext } from "react";
import LeftMainProfile from "./LeftMainProfile/LeftMainProfile";
import RightMainProfile from "./RightMainProfile/RightMainProfile";
import LeftCompanyMainProfile from "./LeftMainProfile/LeftCompanyMainProfile";
import RightCompanyMainProfile from "./RightMainProfile/RightCompanyMainProfile";
import CompanyCurrentOpenings from "./CompanyCurrentOpenings";
import { AuthContext } from "@/AuthContext/AuthContext";
import "./MainProfile.css";

function MainProfile({ refreshProfile }) {
  const { isAuthorized, role } = useContext(AuthContext);

  return (
    <div className="main-profile-wrapper">
      <div className="combine-main-profiles">

        {/* Employee View */}
        {isAuthorized && role === "employee" && (
          <>
            <LeftMainProfile refreshProfile={refreshProfile} />
            <RightMainProfile refreshProfile={refreshProfile} />
          </>
        )}

        {/* Employer View */}
        {isAuthorized && role === "employer" && (
          <>
            <LeftCompanyMainProfile refreshProfile={refreshProfile} />
            <RightCompanyMainProfile refreshProfile={refreshProfile} />
            <CompanyCurrentOpenings />
          </>
        )}

      </div>
    </div>
  );
}

export default MainProfile;