import './About.css'
import AboutTestimonial from './AboutTestimonial'
import FAQs from './FAQs'
import HeroAbout from './HeroAbout'
import HireBaseFeatures from './HireBaseFeatures'
import WhyHireBase from './WhyHireBase'
function About() {
  return (
    <div>
      <HeroAbout/>
      <WhyHireBase/>
      <HireBaseFeatures/>
      <AboutTestimonial/>
      <FAQs/>
    </div>
  )
}

export default About
