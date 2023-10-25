
import './App.css';
import AboutCompanySection from './components/AboutCompanySection';
import FeaturesSection from './components/FeaturesSection';

import Header from './components/Header';
import OurServiceSection from './components/OurServiceSection';
import PartnerSection from './components/PartnerSection';
import ShowcaseSection from './components/ShowcaseSection';

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

      


      </main>


   </div>
  );
}

export default App;
