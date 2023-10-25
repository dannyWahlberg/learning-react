
import './App.css';
import AboutCompanySection from './components/AboutCompanySection';
import FeaturesSection from './components/FeaturesSection';

import Header from './components/Header';
import OurServiceSection from './components/OurServiceSection';
import PartnerSection from './components/PartnerSection';
import ProjectAndCaseSection from './components/ProjectAndCaseSection';
import ShowcaseSection from './components/ShowcaseSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';

function App() {
  return (
   <div className='wrapper-grid'>

      <Header />

      <main>

      <ShowcaseSection />
      <PartnerSection />
      <FeaturesSection />
      <AboutCompanySection />
      <OurServiceSection />
      <WhyChooseUsSection />
      <ProjectAndCaseSection />

      


      </main>


   </div>
  );
}

export default App;
