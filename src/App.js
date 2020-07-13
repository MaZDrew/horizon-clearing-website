import React from 'react';
import HomePage from './views/HomePage';
import CompanyHero from './views/CompanyHero';
import CompanyDetails from './views/CompanyDetails';
import ContactUs from './views/ContactUs';
import CommercialCategories from './views/CommercialCategories';
import ResidentialCategories from './views/ResidentialCategories';
import CustomAppBar from './components/CustomAppBar';
import ScrollUpFAB from './components/ScrollUpFAB';
import { scrollToHashElement } from './utils/scrollingUtil';
import withRoot from './utils/withRoot';

//TODO: CI/CD Test
//TODO: Get google hosting linked to firebase hosting
//TODO: Deploy v1.0.0 of Horizon Clearing website

// ----- Improvements -------
//TODO: Think of ways to fix about us on mobile / general mobile improvements
//TODO: Image fader priority loading - look into fade/blur issue
//TODO: Carousel inside image modal
//TODO: Contact us box at bottom (maybe)

function App(props) {
  
  React.useEffect(() => {
    scrollToHashElement();
  }, []);

  return (
    <React.Fragment>
      <CustomAppBar />
      <HomePage />
      <CompanyHero />
      <CompanyDetails />
      <CommercialCategories />
      <ResidentialCategories />
      <ContactUs />
      <ScrollUpFAB />
    </React.Fragment>
  )
}

export default withRoot(App);