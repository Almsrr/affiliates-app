import NewAffiliateForm from "../components/NewAffiliateForm/NewAffiliateForm";
import { createAffiliate } from "../api/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function NewAffiliates() {
  const { sendRequest, status } = useHttp(createAffiliate);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/affiliates");
    }
  }, [status, history]);

  const newAffiliateAddedHandler = async (newAffiliate) => {
    sendRequest(newAffiliate);
  };

  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">New Affiliate</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <NewAffiliateForm onNewAffiliateAdded={newAffiliateAddedHandler} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewAffiliates;
