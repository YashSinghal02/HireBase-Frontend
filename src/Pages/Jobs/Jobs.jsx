import React, { useEffect, useState } from "react";
import "./Jobs.css";
import HeroJob from "./HeroJob";
import JobsCards from "@/Components/JobsMapCard/JobsCards";
import JobCardSkeleton from "@/Components/JobsMapCard/JobCardSkeleton";
import FilterJobs from "./FilterJobs";
import JobCardTitle from "./JobCardTitle";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [showSkeleton, setShowSkeleton] = useState(false);
  

 useEffect(() => {
   let timer;
  const getData = async () => {
    setLoading(true);

    // start delay timer
    timer = setTimeout(() => {
      setShowSkeleton(true);
    }, 300); // show only if slow

    await apiTryCatch(async () => {
      const response = await api.get("/employer/jobs");
 // ⏳ ADD FAKE DELAY (2 seconds)
      // await new Promise((resolve) => setTimeout(resolve, 2000));
   

      setJobs(response.data.data);
      setFilteredJobs(response.data.data);
    });

      clearTimeout(timer); // stop timer if fast
    setLoading(false);
    setShowSkeleton(false); // reset
  };

  getData();
    return () => clearTimeout(timer);
}, []);
// Array(6) - How many fake cards do I want to show while loading
// fill(0) - .map() does NOT work properly on empty slots [0,0,0,0,0,0] → real items → map runs 6 times
// key={i} - React needs unique key for each item ,i is used just for identification

// “Array(6) creates 6 empty slots.
// .map() does not run on empty slots.
// .fill(0) fills them with real values, so .map() runs 6 times.
// i is used only for React key.”

return (
  <div>
    <HeroJob jobs={jobs} setFilteredJobs={setFilteredJobs} />
    <JobCardTitle />
    <FilterJobs />

    {loading ? (
      showSkeleton ? (
        // ✅ show only if slow
        <div className="jobCards-home-wrapper">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <JobCardSkeleton key={i} />
            ))}
        </div>
      ) : (
        // ✅ prevent blank jump
        <div
          className="jobCards-home-wrapper"
          style={{ minHeight: "300px" }}
        />
      )
    ) : (
      <JobsCards jobs={filteredJobs} />
    )}
  </div>
);
}

export default Jobs;