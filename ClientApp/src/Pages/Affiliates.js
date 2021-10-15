import { useEffect } from "react";
import AffiliatesTable from "../components/AffiliatesTable/AffiliatesTable";
import useHttp from "../hooks/use-http";
import { getActivesAffiliates, updateAffiliate } from "../api/api";

function Affiliates() {
  const {
    sendRequest: getActiveAffiliates,
    data: affiliates,
    status,
  } = useHttp(getActivesAffiliates);

  const { sendRequest: disableAffiliate } = useHttp(updateAffiliate);

  useEffect(() => {
    getActiveAffiliates();
  }, [getActiveAffiliates]);

  const disableAffiliateHandler = async (affiliate) => {
    const confirm = window.confirm("Are you sure do you want to disable?");
    if (confirm) {
      await disableAffiliate(affiliate);
      getActiveAffiliates();
    }
  };

  let content;
  if (status === "pending") {
    content = <p className="text-center">Loading...</p>;
  } else if (status === "completed" && affiliates.length === 0) {
    content = <p className="text-center">No actives affiliates found</p>;
  } else if (status === "completed" && affiliates.length > 0) {
    content = (
      <AffiliatesTable
        affiliates={affiliates}
        onDisableAffiliate={disableAffiliateHandler}
      />
    );
  }

  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Affiliates</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">{content}</div>
        </div>
      </div>
    </section>
  );
}

export default Affiliates;
