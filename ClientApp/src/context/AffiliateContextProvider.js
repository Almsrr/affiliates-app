import { useState, useEffect, useCallback } from "react";
import AffiliateContext from "./affiliate-context";

function AffiliateContextProvider(props) {
  const [affiliates, setAffiliates] = useState([]);

  const getData = useCallback(async () => {
    try {
      const response = await fetch("https://localhost:5001/api/affiliates");
      if (response.ok) {
        const jsonResponse = await response.json();
        setAffiliates(jsonResponse);
        // console.log(jsonResponse);
        return;
      }
      throw new Error("Something went wrong");
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const addAffiliate = async (newAffiliate) => {
    try {
      await fetch("https://localhost:5001/api/affiliates", {
        method: "POST",
        body: JSON.stringify(newAffiliate),
        headers: {
          "Content-Type": "application/json",
        },
      });
      getData();
      return;
    } catch (e) {
      console.log(e);
    }
  };

  const affiliatesContext = {
    affiliates,
    addAffiliate,
  };
  return (
    <AffiliateContext.Provider value={affiliatesContext}>
      {props.children}
    </AffiliateContext.Provider>
  );
}

export default AffiliateContextProvider;
