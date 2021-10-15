import { Link, useRouteMatch } from "react-router-dom";

function Affiliate(props) {
  const math = useRouteMatch();

  const {
    id,
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

  const disableHandler = () => {
    const disabledAffiliate = {
      ...props.affiliate,
      statusId: 2,
    };
    props.onDisable(disabledAffiliate);
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
        <Link
          className="btn btn-primary me-1"
          to={`${math.url}/${id}/consumed-amount`}
        >
          Edit amount
        </Link>
        <button onClick={disableHandler} className="btn btn-danger">
          Disable
        </button>
      </td>
    </tr>
  );
}

export default Affiliate;
