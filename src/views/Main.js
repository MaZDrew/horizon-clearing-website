import React from 'react';
import HomePage from './HomePage';
import CompanyHero from './CompanyHero';
import CompanyDetails from './CompanyDetails';
import ContactUs from './ContactUs';
import CommercialCategories from './CommercialCategories';
import ResidentialCategories from './ResidentialCategories';
import CustomAppBar from '../components/CustomAppBar';
import ScrollUpFAB from '../components/ScrollUpFAB';
import { scrollToHashElement } from '../utils/scrollingUtil';

export default function Main() {

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