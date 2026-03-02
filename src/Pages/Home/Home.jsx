import "./Home.css";
import HomeCards from "./HomeCards";
import TrustCompany from "./TrustCompany";
import DownloadApp from "./DownloadApp";
// import JobCards from './JobCards';
import Homehero from "./Homehero";
import JobsCards from "@/Components/JobsMapCard/JobsCards";
import WorkingProcess from "./WorkingProcess";
import HomeBolg from "./HomeBolg";
import WhyPopular from "./WhyPopular";
import HomeTestimonial from "./HomeTestimonial";
import HomeFAQs from "./HomeFAQs";
import HomeBadge from "./HomeBadge";
import JobCardTitle from "../Jobs/JobCardTitle";

function Home() {
  return (
    <div>
      <HomeBadge />
      <Homehero /> {/* 1️⃣ Strong first impression */}
      <TrustCompany /> {/* 2️⃣ Social proof early */}
      <HomeCards /> {/* 3️⃣ Key features / value */}
      <WhyPopular /> {/* 4️⃣ Why choose HireBase */}
      <WorkingProcess /> {/* 5️⃣ How it works */}
      <JobCardTitle/>{/* 5️ It is title of Live jobs (engagement) only */}
      <JobsCards /> {/* 6️⃣ Live jobs (engagement) */}
      <HomeTestimonial /> {/* 7️⃣ More social proof */}
      <DownloadApp /> {/* 8️⃣ Conversion CTA */}
      <HomeFAQs /> {/* 9️⃣ Objection handling */}
      <HomeBolg /> {/* 🔟 SEO / extra content */}
    </div>
  );
}

export default Home;
