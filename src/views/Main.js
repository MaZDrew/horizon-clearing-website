import React, { useState } from 'react';
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

  const [modalData, setModalData] = useState({
    open: false,
    title: '',
    src: null
  });

  const openPictureModal = (title, src) => {
    setModalData({title, src, open: true});
  }

  const closePictureModal = () => {
    setModalData({...modalData, open: false});
  }
  
  return (
    <React.Fragment>

      <CustomAppBar />
      <HomePage />
      <CompanyHero />
      <CompanyDetails />
      <CommercialCategories openModal={openPictureModal} />
      <ResidentialCategories openModal={openPictureModal} />
      <ContactUs />

      <ScrollUpFAB />

    </React.Fragment>
  )
}