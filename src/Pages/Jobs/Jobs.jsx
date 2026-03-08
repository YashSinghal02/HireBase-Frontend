import React, { useEffect } from 'react'
import './Jobs.css'
import HeroJob from './HeroJob';
import JobsCards from '@/Components/JobsMapCard/JobsCards';
import FilterJobs from './FilterJobs';
import JobCardTitle from './JobCardTitle';
import { api } from '@/Utils/axiosConfig';
import { apiTryCatch } from '@/Utils/trycatch';



function Jobs() {

  useEffect(() => {
  const getData = async () => {
    await apiTryCatch(async () => {
      const response = await api.post("/user/test");
      console.log("Test response:", response);
    });
  };

  getData();
}, []);
  
  return (
    <div>
      <HeroJob/>
      <JobCardTitle/>
      <FilterJobs/>
      <JobsCards/>
      
    </div>
  )
}

export default Jobs