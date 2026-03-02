import './JobCards.css'
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

import Blinkit from '../../assets/Blinkit.png'
import Zomato from '../../assets/Zomato.png'
import Swiggy from '../../assets/Swiggy.png'

function JobCards() {
 return (
    <div>
<h2 className="home-cards-title2">
           <span>Latest & Top</span> Job Opening
        </h2>
  
    <div className="jobCards-home-wrapper">

      {/* Card 1 */}
      <div className="jobCards-home">
        <div className="jobCards-home-top">
          <span className="jobCards-home-date">Today</span>
          <span className='bookmark-circle'><FaRegBookmark  className="jobCards-home-bookmark" /></span>
        </div>

        <div className="jobCards-home-company">
          <img
            src={Blinkit}
            alt="company"
            className="jobCards-home-logo"
          />
          <div>
            <h4>Blinkit</h4>
            <span>India</span>
          </div>
        </div>

        <h3 className="jobCards-home-title">Product Manager</h3>
        <p className="jobCards-home-desc">
           Drive product vision, analyze market insights, and coordinate cross-functional teams to launch high-impact features that improve user growth and engagement.

        </p>

        <div className="jobCards-home-tags">
          <span className="tag-blue">4 Positions</span>
          <span className="tag-orange">Full Time</span>
          <span className="tag-purple">16 LPA</span>
        </div>

        <div className="jobCards-home-buttons">
          <button className="apply-btn">Apply</button>
          <button className="details-btn">Details</button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="jobCards-home">
        <div className="jobCards-home-top">
          <span className="jobCards-home-date">Today</span>
          <span className='bookmark-circle'><FaRegBookmark  className="jobCards-home-bookmark" /></span>
        </div>

        <div className="jobCards-home-company">
          <img
            src={Zomato}
            alt="company"
            className="jobCards-home-logo"
          />
          <div>
            <h4>Zomato</h4>
            <span>India</span>
          </div>
        </div>

        <h3 className="jobCards-home-title">Product Engineer</h3>
        <p className="jobCards-home-desc">
            Build scalable systems and user-focused features to enhance Zomato’s food delivery experience.

        </p>

        <div className="jobCards-home-tags">
          <span className="tag-blue">4 Positions</span>
          <span className="tag-orange">Full Time</span>
          <span className="tag-purple">20 LPA</span>
        </div>

        <div className="jobCards-home-buttons">
          <button className="apply-btn">Apply</button>
          <button className="details-btn">Details</button>
        </div>
      </div>

           {/* Card 3 */}
      <div className="jobCards-home">
        <div className="jobCards-home-top">
          <span className="jobCards-home-date">Today</span>
          <span className='bookmark-circle'><FaRegBookmark  className="jobCards-home-bookmark" /></span>
        </div>

        <div className="jobCards-home-company">
          <img
            src={Swiggy}
            alt="company"
            className="jobCards-home-logo"
          />
          <div>
            <h4>Swiggy</h4>
            <span>India</span>
          </div>
        </div>

        <h3 className="jobCards-home-title">DevOps Engineer</h3>
        <p className="jobCards-home-desc">
            Manage CI/CD pipelines, cloud infrastructure, and deployment automation to ensure high availability and scalability of production systems.

        </p>

        <div className="jobCards-home-tags">
          <span className="tag-blue">4 Positions</span>
          <span className="tag-orange">Full Time</span>
          <span className="tag-purple">20 LPA</span>
        </div>

        <div className="jobCards-home-buttons">
          <button className="apply-btn">Apply</button>
          <button className="details-btn">Details</button>
        </div>
      </div>

    </div>
      </div>
  );
}

export default JobCards
