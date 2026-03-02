import React from 'react'
import './Jobs.css'
import HeroJob from './HeroJob';
import JobsCards from '@/Components/JobsMapCard/JobsCards';
import FilterJobs from './FilterJobs';
import JobCardTitle from './JobCardTitle';


function Jobs() {
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