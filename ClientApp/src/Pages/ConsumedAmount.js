import { useEffect, useRef } from "react";
import { getAffiliate, updateAffiliate } from "../api/api";
import { useParams, useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";

function ConsumedAmount() {
  const params = useParams();
  const history = useHistory();
  const amountRef = useRef("");
  const { id } = params;

  const {
    sendRequest: getInfo,
    data: loadedAffiliate,
    status,
    error,
  } = useHttp(getAffiliate);

  const { sendRequest: sendInfo } = useHttp(updateAffiliate);

  useEffect(() => {
    getInfo(id);
  }, [getInfo, id]);

  const closeUpdateHandler = () => {
    history.push("/affiliates");
  };

  const updateAmountHandler = () => {
    const currentAmount = loadedAffiliate.consumedAmount;
    const updatedAmount = currentAmount + Number(amountRef.current.value);
    const uptatedAffiliate = {
      ...loadedAffiliate,
      consumedAmount: updatedAmount,
    };
    sendInfo(uptatedAffiliate);
    getInfo(id);
  };

  let currentAffiliateAmount;
  if (status === "pending") {
    currentAffiliateAmount = <p>Loading amount...</p>;
  }
  if (status === "completed" && !error) {
    currentAffiliateAmount = <h3>{loadedAffiliate.consumedAmount} USD</h3>;
  }

  return (
    <section>
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold">Consumed Amount </h2>
            {currentAffiliateAmount}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div>
              <label htmlFor="amount">Update amount</label>
              <input
                ref={amountRef}
                className="form-control"
                type="number"
                id="amount"
              />
              <button
                onClick={updateAmountHandler}
                className="btn btn-success mt-3 me-3"
                type="button"
              >
                Update
              </button>
              <button
                onClick={closeUpdateHandler}
                className="btn btn-secondary mt-3"
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsumedAmount;
