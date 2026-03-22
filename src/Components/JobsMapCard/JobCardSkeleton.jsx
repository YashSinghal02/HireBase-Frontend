import ContentLoader from "react-content-loader";

const JobCardSkeleton = () => {
    // <rect /> → rectangle (text, buttons, tags)
   //<circle /> → circle (bookmark icon)
  return (
    <ContentLoader
      speed={2}
      width={360}
      height={340}
      viewBox="0 0 360 340"
      backgroundColor="#141c1b"
      foregroundColor="#1f2a28"
      style={{
        borderRadius: "18px",
        padding: "24px",
        margin: "10px",
      }}
    >
      {/* Top Row */}
      <rect x="0" y="0" rx="6" ry="6" width="120" height="14" />
      <circle cx="310" cy="18" r="12" />

      {/* Company Section */}
      <rect x="0" y="30" rx="10" ry="10" width="48" height="48" />
      <rect x="60" y="32" rx="6" ry="6" width="140" height="14" />
      <rect x="60" y="52" rx="5" ry="5" width="100" height="12" />

      {/* Job Title */}
      <rect x="0" y="90" rx="6" ry="6" width="220" height="16" />

      {/* Description (3 lines) */}
      <rect x="0" y="115" rx="5" ry="5" width="100%" height="10" />
      <rect x="0" y="130" rx="5" ry="5" width="90%" height="10" />
      <rect x="0" y="145" rx="5" ry="5" width="80%" height="10" />

      {/* Tags */}
      <rect x="0" y="170" rx="20" ry="20" width="90" height="22" />
      <rect x="100" y="170" rx="20" ry="20" width="80" height="22" />
      <rect x="190" y="170" rx="20" ry="20" width="100" height="22" />

      {/* Buttons */}
      <rect x="0" y="210" rx="10" ry="10" width="120" height="36" />
      <rect x="140" y="210" rx="10" ry="10" width="120" height="36" />
    </ContentLoader>
  );
};

export default JobCardSkeleton;