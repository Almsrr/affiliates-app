import { useState } from "react";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

function NewAffiliateForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState("");
  const [idCard, setIdCard] = useState("");
  const [secSocNumber, setSecSocNumber] = useState("");
  const [consumedAmount, setConsumedAmount] = useState(0);
  const [statusId, setStatusId] = useState(0);
  const [planId, setPlanId] = useState(0);

  const enteredFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const enteredLastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const enteredBirthdayHandler = (event) => {
    setBirthday(event.target.value);
  };
  const enteredGenderHandler = (event) => {
    setGender(event.target.value);
  };
  const enteredIdCardHandler = (event) => {
    setIdCard(event.target.value);
  };
  const enteredSecSocNumberHandler = (event) => {
    setSecSocNumber(event.target.value);
  };
  const enteredConsumedAmountHandler = (event) => {
    setConsumedAmount(Number(event.target.value));
  };
  const enteredStatusIdHandler = (event) => {
    setStatusId(Number(event.target.value));
  };
  const enteredPlanIdHandler = (event) => {
    setPlanId(Number(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newAffiliate = {
      firstName,
      lastName,
      birthday,
      gender,
      idCard,
      securitySocialNumber: secSocNumber,
      consumedAmount,
      statusId,
      planId,
    };
    props.onNewAffiliateAdded(newAffiliate);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        label="First Name"
        input={{ id: "firstName", name: "firstName", type: "text" }}
        onChange={enteredFirstNameHandler}
      />
      <Input
        label="Last Name"
        input={{ id: "lastName", name: "lastName", type: "text" }}
        onChange={enteredLastNameHandler}
      />
      <Input
        label="Birthday"
        input={{ id: "birthday", name: "birthday", type: "date" }}
        onChange={enteredBirthdayHandler}
      />
      <Select
        label="Gender"
        select={{ id: "gender", name: "gender" }}
        options={[
          { value: "", text: "Select one" },
          { value: "m", text: "Male" },
          { value: "f", text: "Female" },
        ]}
        onChange={enteredGenderHandler}
      />
      <Input
        label="Id Card"
        input={{ id: "idCard", name: "idCard", type: "text" }}
        onChange={enteredIdCardHandler}
      />
      <Input
        label="Security Social Number"
        input={{
          id: "securitySocialNumber",
          name: "securitySocialNumber",
          type: "text",
        }}
        onChange={enteredSecSocNumberHandler}
      />
      <Input
        label="Consumed Amount"
        input={{ id: "consumedAmount", name: "consumedAmount", type: "number" }}
        onChange={enteredConsumedAmountHandler}
      />
      <Select
        label="Status"
        select={{ id: "status", name: "status" }}
        options={[
          { value: "", text: "Select one" },
          { value: "1", text: "Active" },
          { value: "2", text: "Inactive" },
        ]}
        onChange={enteredStatusIdHandler}
      />
      <Select
        label="Plan"
        select={{ id: "plan", name: "plan" }}
        options={[
          { value: "", text: "Select one" },
          { value: "1", text: "Basic" },
          { value: "2", text: "Standard" },
          { value: "3", text: "Premium" },
        ]}
        onChange={enteredPlanIdHandler}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default NewAffiliateForm;
