import LeftMainProfile from "./LeftMainProfile/LeftMainProfile";
import "./MainProfile.css";
import RightMainProfile from "./RightMainProfile/RightMainProfile";

function MainProfile() {
  return (
    <div className="main-profile-wrapper">
      <div className="combine-main-profiles">
        <LeftMainProfile />
        <RightMainProfile />
      </div>
    </div>
  );
}

export default MainProfile;