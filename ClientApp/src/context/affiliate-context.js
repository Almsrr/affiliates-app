import React from "react";

const AffiliateContext = React.createContext({
  affiliates: [],
  addAffiliate() {},
  disableAffiliate() {},
  updateAffiliate() {},
  filterAffiliates() {},
});

export default AffiliateContext;
