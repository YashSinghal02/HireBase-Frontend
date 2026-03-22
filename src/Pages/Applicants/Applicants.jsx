import { useEffect, useState } from "react";
import { api } from "@/Utils/axiosConfig";
import ApplicantCard from "./ApplicantCard";
import { apiTryCatch } from "@/Utils/trycatch";
import JobCardSkeleton from "@/Components/JobsMapCard/JobCardSkeleton";



function Applicants() {
  const [data, setData] = useState([]);
  
    // ✅ Loading states
    const [loading, setLoading] = useState(true);
    const [showSkeleton, setShowSkeleton] = useState(false);

useEffect(() => {
  let timer;
  const fetchApplicants = async () => {
     setLoading(true);

    timer = setTimeout(() => {
      setShowSkeleton(true);
    }, 300);
    try {
      const res = await apiTryCatch(() =>
        api.get("/jobs/applicants")
      );

      const raw = res.data.data;

      const filtered = raw.filter(item => item.job);

      setData(filtered);

    } catch (err) {
      // console.log("Handled Error 👉", err);
    }
    clearTimeout(timer);
    setLoading(false);
    setShowSkeleton(false);
  };

  fetchApplicants();
    return () => clearTimeout(timer); // ✅ important
}, []);

  return (
  <div>
     {loading ? (
        showSkeleton ? (
          <div className="job-card-skeleton-wrapper-jobcreated">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <JobCardSkeleton key={i} />
              ))}
          </div>
        ) : (
          <div style={{ height: "200px" }} />
        )
      ) : (
<ApplicantCard applicants={data} />
      )}

  </div>
  );
}

export default Applicants;