import { useCallback, useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import FoundAffiliatesList from "./FoundAffiliatesList";
import Input from "../UI/Input/Input";
import useHttp from "../../hooks/use-http";
import { getAllAffiliates } from "../../api/api";
import styles from "./SearchModal.module.css";

function SearchModal(props) {
  const [filteredAffiliates, setFilteredAffiliates] = useState([]);

  const {
    sendRequest: getAll,
    data: loadedAffiliates,
    status: requestStatus,
  } = useHttp(getAllAffiliates);

  useEffect(() => {
    getAll();
  }, [getAll]);

  useEffect(() => {
    if (requestStatus === "completed") {
      setFilteredAffiliates(loadedAffiliates);
    }
  }, [requestStatus]);

  const closeModalHandler = () => {
    props.onCloseModal();
  };

  const searchHandler = (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    if (searchTerm.trim() === "") {
      setFilteredAffiliates(loadedAffiliates);
    } else {
      setFilteredAffiliates(() =>
        loadedAffiliates.filter(
          (affiliate) =>
            affiliate.firstName.toLowerCase().trim().includes(searchTerm) ||
            affiliate.lastName.toLowerCase().trim().includes(searchTerm) ||
            affiliate.idCard.toLowerCase().trim().includes(searchTerm)
        )
      );
    }
  };

  let content;
  if (requestStatus === "pending") {
    content = <p className="text-center">Loading...</p>;
  } else if (requestStatus === "completed" && loadedAffiliates.length === 0) {
    content = <p>Affiliates not found</p>;
  } else if (requestStatus === "completed" && loadedAffiliates.length > 0) {
    content = <FoundAffiliatesList foundAffiliates={filteredAffiliates} />;
  }

  const modalBodyClasses = `modal-body ${styles.modalBody}`;
  return (
    <Modal onClose={closeModalHandler}>
      <div className="modal-header">
        <h5 className="modal-title">Search Affiliates</h5>
        <button
          type="button"
          className="btn-close"
          onClick={closeModalHandler}
        ></button>
      </div>
      <div className={modalBodyClasses}>
        <Input
          label="You can search actives or inactives affiliates by first name, last
          name or ID."
          input={{ name: "search-term", id: "search-term", type: "search" }}
          onChange={searchHandler}
        />
        {content}
      </div>
    </Modal>
  );
}

export default SearchModal;
