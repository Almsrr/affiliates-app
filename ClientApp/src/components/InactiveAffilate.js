function InactiveAffiliate(props) {
  const {
    firstName,
    lastName,
    idCard,
    consumedAmount,
    securitySocialNumber,
    statusId,
    planId,
  } = props.affiliate;

  let status = null;
  if (statusId && statusId === 1) {
    status = "Active";
  } else if (statusId && statusId === 2) {
    status = "Inactive";
  }

  let plan = null;
  if (planId && planId === 1) {
    plan = "Basic";
  } else if (planId && planId === 2) {
    plan = "Standard";
  } else if (planId && planId === 3) {
    plan = "Premium";
  }

  const restoreHandler = () => {
    const restoredAffiliate = {
      ...props.affiliate,
      statusId: 1,
    };
    props.onRestore(restoredAffiliate);
  };

  return (
    <tr>
      <td>{idCard}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{consumedAmount}</td>
      <td>{securitySocialNumber}</td>
      <td>{status}</td>
      <td>{plan}</td>
      <td>
        <button onClick={restoreHandler} className="btn btn-warning">
          Restore
        </button>
      </td>
    </tr>
  );
}

export default InactiveAffiliate;
