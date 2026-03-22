import "./ProfileHeaderSkeleton.css";

function ProfileHeaderSkeleton() {
  return (
    <div className="profile-header-skeleton-wrapper">
      {/* Banner */}
      <div className="skeleton-banner">
        {/* Edit icon */}
        <div className="skeleton-edit-icon" />
      </div>

      {/* Bottom section */}
      <div className="skeleton-bottom-section">
        {/* Avatar */}
        <div className="skeleton-avatar" />

        {/* Text area */}
        <div className="skeleton-text-area">
          {/* <div className="skeleton-line lg" /> */}
          <div className="skeleton-line md" />
          <div className="skeleton-line sm" />
        </div>

        {/* Button */}
        {/* <div className="skeleton-button" /> */}
      </div>
    </div>
  );
}

export default ProfileHeaderSkeleton;