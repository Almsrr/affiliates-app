import React from "react";
import Layout from "./components/UI/Layout";
import { Route, Switch } from "react-router-dom";
import Affiliates from "./Pages/Affiliates";
import NewAffiliate from "./Pages/NewAffiliates";
import ConsumedAmount from "./Pages/ConsumedAmount";
import InactiveAffiliates from "./Pages/InactivesAffiliates";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/affiliates" component={Affiliates} exact />
        <Route path="/inactives" component={InactiveAffiliates} exact />
        <Route path="/new-affiliate" component={NewAffiliate} />
        <Route
          path="/affiliates/:id/consumed-amount"
          component={ConsumedAmount}
        />
      </Switch>
    </Layout>
  );
}

export default App;
