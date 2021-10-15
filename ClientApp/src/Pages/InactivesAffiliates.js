import { useEffect } from "react";
import InactivesAffiliatesTable from "../components/InactivesAffiliatesTable/InactivesAffiliatesTable";
import { getInactivesAffiliates, updateAffiliate } from "../api/api";
import useHttp from "../hooks/use-http";

function InactiveAffiliates() {
  const {
    sendRequest: getInactives,
    data: inactivesAffiliates,
    status,
  } = useHttp(getInactivesAffiliates);

  const { sendRequest: restoreAffiliate } = useHttp(updateAffiliate);

  useEffect(() => {
    getInactives();
  }, [getInactives]);

  const restoreAffiliateHandler = async (restoredAffiliate) => {
    const confirm = window.confirm("Are you sure do you want to restore?");
    if (confirm) {
      await restoreAffiliate(restoredAffiliate);
      getInactives();
    }
  };

  let content;
  if (status === "pending") {
    content = <p className="text-center">Loading...</p>;
  } else if (status === "completed" && inactivesAffiliates.length === 0) {
    content = <p className="text-center">No inactives affiliates found</p>;
  } else if (status === "completed" && inactivesAffiliates.length > 0) {
    content = (
      <InactivesAffiliatesTable
        inactivesAffiliates={inactivesAffiliates}
        onRestoreAffiliate={restoreAffiliateHandler}
      />
    );
  }
  return (
    <section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-4">Inactives</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">{content}</div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default InactiveAffiliates;
