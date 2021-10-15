import styles from "./FoundAffiliatesList.module.css";

function FoundAffiliatesList(props) {
  const { foundAffiliates } = props;

  if (!foundAffiliates || foundAffiliates.length === 0) {
    return <p className="text-center">No results</p>;
  }

  return (
    <ul className={styles.list}>
      {foundAffiliates.map((affiliate) => {
        return (
          <li key={affiliate.id} className={styles.item}>
            <div>
              <h5>{`${affiliate.firstName} ${affiliate.lastName}`}</h5>
              <p>Gender: {affiliate.gender.toUpperCase()}</p>
              <p>
                Birthday: {new Date(affiliate.birthday).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p>ID: {affiliate.idCard}</p>
              <p>Security Social Number: {affiliate.securitySocialNumber}</p>
              <p>
                Registration Date:{" "}
                {new Date(affiliate.registrationDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p>Status: {affiliate.statusId === 1 ? "Active" : "Inactive"}</p>
              <p>
                Plan:{" "}
                {affiliate.planId === 1
                  ? "Basic"
                  : affiliate.planId === 2
                  ? "Standard"
                  : affiliate.planId === 3
                  ? "Premium"
                  : ""}
              </p>
              <p>Con. amount: {affiliate.consumedAmount}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default FoundAffiliatesList;
