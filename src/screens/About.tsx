import AboutHero from "../components/about/AboutHero"
import AboutStory from "../components/about/AboutStory"
import Cant from "../components/about/Cant"
import Team from "../components/about/Team"
import Middle from "../components/reusable/Middle"
import Values from "../components/reusable/Values"


const About = () => {
  return (
    <div className="bg-primary overflow-x-hidden">
        <AboutHero />
        <AboutStory />
        <Values />
        <Middle />
        <Team />
        <Cant />
    </div>
  )
}

export default About