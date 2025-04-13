import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
