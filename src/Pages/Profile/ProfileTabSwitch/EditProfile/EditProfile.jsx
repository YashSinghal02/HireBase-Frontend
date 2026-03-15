import { useContext } from "react";
import { AuthContext } from "@/AuthContext/AuthContext";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import CompanyEditProfileForm from "./CompanyEditProfileForm";
import "./EditProfile.css";

function EditProfile({ setActiveTab, setRefreshProfile }) {
  const { isAuthorized, role } = useContext(AuthContext);

  return (
    <div>
      {/* Employee View */}
      {isAuthorized && role === "employee" && (
        <EditProfileForm
          setActiveTab={setActiveTab}
          setRefreshProfile={setRefreshProfile}
        />
      )}

      {/* Employer View */}
      {isAuthorized && role === "employer" && (
        <CompanyEditProfileForm
          setActiveTab={setActiveTab}
          setRefreshProfile={setRefreshProfile}
        />
      )}
    </div>
  );
}

export default EditProfile;