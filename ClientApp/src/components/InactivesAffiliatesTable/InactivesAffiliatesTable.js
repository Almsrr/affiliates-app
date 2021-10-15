import InactiveAffiliate from "../InactiveAffilate";

function InactivesAffiliatesList(props) {
  const { inactivesAffiliates, onRestoreAffiliate } = props;

  if (inactivesAffiliates && inactivesAffiliates.length === 0) {
    return <p className="text-center">No inactives affiliates</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Consumed Amount</th>
          <th>Security Social Number</th>
          <th>Status</th>
          <th>Plan</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {inactivesAffiliates.map((affiliate) => (
          <InactiveAffiliate
            key={affiliate.id}
            affiliate={affiliate}
            onRestore={onRestoreAffiliate}
          />
        ))}
      </tbody>
    </table>
  );
}

export default InactivesAffiliatesList;
