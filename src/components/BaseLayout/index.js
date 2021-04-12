import React from 'react';
import { Route } from 'react-router-dom';
import Footer from "../../containers/shared/footerContainer";
import Header from "../../containers/shared/headerContainer";
import Navbar from "../../containers/shared/navBarContainer";

const DashboardLayout = ({ children, ...rest }) => {
  return (
    <div id="main-wrapper">
      <Header />
       <Navbar />
       <div class="page-wrapper">
        <div class="content container-fluid">
        {children}
        </div>
        </div>     
      <Footer />
    </div>
  );
};

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      )}
    />
  );
};

export default DashboardLayoutRoute;






