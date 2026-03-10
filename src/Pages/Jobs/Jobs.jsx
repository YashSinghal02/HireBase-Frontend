import React, { useEffect, useState } from "react";
import "./Jobs.css";
import HeroJob from "./HeroJob";
import JobsCards from "@/Components/JobsMapCard/JobsCards";
import FilterJobs from "./FilterJobs";
import JobCardTitle from "./JobCardTitle";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";

function Jobs() {
// The jobs state stores the original data fetched from the backend.
// The filteredJobs state stores the jobs that should currently be displayed after applying search or filters.
// This prevents modifying the original dataset and allows us to easily restore all jobs when the search input is cleared.



  //   Initial jobs:
  // jobs = [
  // React Developer
  // Node Developer
  // UI Designer
  // ]

  // User searches react:

  // jobs = [
  // React Developer
  // ]

  // Now original jobs are lost ❌

  // If user clears search:

  // Node Developer
  // UI Designer

  // cannot come back because they were removed from state.

  // That is why we keep:

  // jobs → original data
  // filteredJobs → search result

  // jobs = Full database
  // filteredJobs = What user is currently viewing
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);


  // API Call Is In Jobs.jsx because so that all component can access jobs
  useEffect(() => {
    const getData = async () => {
      await apiTryCatch(async () => {
        const response = await api.get("/employer/jobs");
        setJobs(response.data.data);
        setFilteredJobs(response.data.data);
      });
    };

    getData();
  }, []);

  return (
    <div>
      <HeroJob jobs={jobs} setFilteredJobs={setFilteredJobs} />
      <JobCardTitle />
      <FilterJobs />
      <JobsCards jobs={filteredJobs} />
    </div>
  );
}

export default Jobs;
