import Affiliate from "../Affiliate";

function AffiliatesTable(props) {
  const { affiliates, onDisableAffiliate } = props;

  if (affiliates && affiliates.length === 0) {
    return <p className="text-center">No actives affiliates</p>;
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
        {affiliates.map((affiliate) => (
          <Affiliate
            key={affiliate.id}
            affiliate={affiliate}
            onDisable={onDisableAffiliate}
          />
        ))}
      </tbody>
    </table>
  );
}

export default AffiliatesTable;
