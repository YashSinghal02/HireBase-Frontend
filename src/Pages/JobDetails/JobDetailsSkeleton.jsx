import "./JobDetailsSkeleton.css";

function JobDetailsSkeleton() {
  return (
    <div className="jobDetails-wrapper-jobdetails-skeleton">
      <div className="jobDetails-card-jobdetails-skeleton">

        {/* Top */}
        <div className="jobDetails-top-jobdetails-skeleton">
          <div className="jobDetails-btn-jobdetails-skeleton" />
        </div>

        {/* Company */}
        <div className="jobDetails-company-jobdetails-skeleton">
          <div className="jobDetails-logo-jobdetails-skeleton" />
          <div>
            <div className="jobDetails-line-lg-jobdetails-skeleton" />
            <div className="jobDetails-line-md-jobdetails-skeleton" />
            <div className="jobDetails-line-sm-jobdetails-skeleton" />
          </div>
        </div>

        {/* Meta */}
        <div className="jobDetails-meta-jobdetails-skeleton">
          <div className="jobDetails-pill-jobdetails-skeleton" />
          <div className="jobDetails-pill-jobdetails-skeleton" />
          <div className="jobDetails-pill-jobdetails-skeleton" />
        </div>

        {/* Description */}
        <div className="jobDetails-section-jobdetails-skeleton">
          <div className="jobDetails-line-lg-jobdetails-skeleton" />
          <div className="jobDetails-line-jobdetails-skeleton" />
          <div className="jobDetails-line-jobdetails-skeleton" />
          <div className="jobDetails-line-sm-jobdetails-skeleton" />
        </div>

        {/* Responsibilities */}
        <div className="jobDetails-section-jobdetails-skeleton">
          <div className="jobDetails-line-lg-jobdetails-skeleton" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="jobDetails-line-jobdetails-skeleton" />
          ))}
        </div>

        {/* Qualifications */}
        <div className="jobDetails-section-jobdetails-skeleton">
          <div className="jobDetails-line-lg-jobdetails-skeleton" />
          {[...Array(3)].map((_, i) => (
            <div key={i} className="jobDetails-line-jobdetails-skeleton" />
          ))}
        </div>

        {/* Skills */}
        <div className="jobDetails-section-jobdetails-skeleton">
          <div className="jobDetails-line-lg-jobdetails-skeleton" />
          <div className="jobDetails-tags-jobdetails-skeleton">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="jobDetails-tag-jobdetails-skeleton" />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="jobDetails-buttons-jobdetails-skeleton">
          <div className="jobDetails-btn-large-jobdetails-skeleton" />
          <div className="jobDetails-btn-large-jobdetails-skeleton" />
        </div>

      </div>
    </div>
  );
}

export default JobDetailsSkeleton;