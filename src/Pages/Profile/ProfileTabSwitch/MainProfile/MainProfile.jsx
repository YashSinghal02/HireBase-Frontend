import LeftMainProfile from "./LeftMainProfile/LeftMainProfile";
import "./MainProfile.css";
import RightMainProfile from "./RightMainProfile/RightMainProfile";

function MainProfile({ refreshProfile }) {
  return (
    <div className="main-profile-wrapper">
      <div className="combine-main-profiles">
        <LeftMainProfile refreshProfile={refreshProfile} />
        <RightMainProfile refreshProfile={refreshProfile} />
      </div>
    </div>
  );
}

export default MainProfile;