import { Fragment, useState } from "react";
import Header from "./Header/Header";
import SearchModal from "../Search/SearchModal";

function Layout(props) {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal((state) => !state);
  };

  return (
    <Fragment>
      {showModal && <SearchModal onCloseModal={modalHandler} />}
      <Header modal={showModal} onShowModal={modalHandler} />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
