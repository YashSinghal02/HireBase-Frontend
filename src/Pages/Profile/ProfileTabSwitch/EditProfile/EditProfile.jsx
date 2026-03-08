import './EditProfile.css'
import EditProfileForm from './EditProfileForm/EditProfileForm'

function EditProfile({ setActiveTab, setRefreshProfile }) {
  return (
    <div>
      <EditProfileForm
        setActiveTab={setActiveTab}
        setRefreshProfile={setRefreshProfile}
      />
    </div>
  );
}

export default EditProfile
