import React from 'react';

import Header from '../header/Header';
import Main from '../main/Main';
import Routes from '../router/Routes';
import Footer from '../footer/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Routes />
      </Main>
      <Footer />
    </>
  )
}
