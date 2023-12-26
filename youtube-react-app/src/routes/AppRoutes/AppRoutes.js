import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import CustomerCare from '../../pages/AboutUsPage/CustomerCare/CustomerCare';
import HocDemoPage from '../../pages/HocDemoPage/HocDemoPage';
import { PageNotFound } from '../../containers/shared/PageNotFound/PageNotFound';
import GalleryPage from '../../pages/GalleryPage/GalleryPage';
import { AboutMe } from '../../pages/AboutUsPage/AboutMe/AboutMe';
import HooksDemoPage from '../../pages/HooksDemoPage/HooksDemoPage';
import HomePage from '../../pages/HomePage/HomePage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage';
import VideoPage from '../../pages/VideoPage/VideoPage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import UnitTestingDemoPage from '../../pages/UnitTestingDemoPage/UnitTestingDemoPage';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' pageTitle='My Company Name' element={<HomePage />} />
        <Route path='/video' element={<VideoPage />} />
        <Route path='/hoc-demo' element={<HocDemoPage />} />
        <Route path='/about-us' element={<AboutUsPage />}>
          <Route path='about-me' element={<AboutMe />} />
          <Route path='customer-care' element={<CustomerCare />} />
        </Route>
        <Route path='/gallery-page' element={<GalleryPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/hooks-demo' element={<HooksDemoPage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='/unit-testing' element={<UnitTestingDemoPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
library.add(fas, far);
