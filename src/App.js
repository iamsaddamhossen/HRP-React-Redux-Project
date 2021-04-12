import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import BaseLayout from "./components/BaseLayout";
import { CreateDepartmentType, DepartmentTypeList, Home, Login, Register } from "./containers";

//////////////////////////END OF SETTINGS COMPONENT CALL////////////////////////////////

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>

        <AuthLayout exact path="/Login" component={Login} />
        <AuthLayout exact path="/Register" component={Register} />

        <div className="App">
          <BaseLayout
            exact
            path="/DepartmentTypeList"
            component={DepartmentTypeList}
          />
          <BaseLayout exact path="/Home" component={Home} />

          <BaseLayout exact path="/CreateDepartmentType" component={CreateDepartmentType} />
        </div>
      </Switch>
    </Router>
  );
}
export default App;
