import { useContext } from "react";
import LeftMainProfile from "@/Pages/Profile/ProfileTabSwitch/MainProfile/LeftMainProfile/LeftMainProfile";
import RightMainProfile from "@/Pages/Profile/ProfileTabSwitch/MainProfile/RightMainProfile/RightMainProfile";
import { AuthContext } from "@/AuthContext/AuthContext";

function MainUserProfile({ userId }) {
  const { isAuthorized, role } = useContext(AuthContext);

  return (
    <div className="main-profile-wrapper">
      <div className="combine-main-profiles">

        {/* Employee profile view */}
        {(role === "employee" || role === "employer") && (
          <>
            <LeftMainProfile userId={userId} />
            <RightMainProfile userId={userId} />
          </>
        )}

      </div>
    </div>
  );
}

export default MainUserProfile;