import { useState } from "react";
import CreateUser from "./CreateUser";

export default function NewUserBtn(props) {
  const { onUserCreatedSubmit, formValues, formChangeHandler, formErrors } =
    props;
  const [newUserForm, setNewUserForm] = useState(false);

  const openNewUserForm = () => {
    setNewUserForm(true);
  };
  const closeNewUserForm = () => {
    setNewUserForm(false);
  };

  const onUserAddClick = (e) => {
    onUserCreatedSubmit(e);
    closeNewUserForm();
  };

  return (
    <>
      {newUserForm && (
        <CreateUser
          closeNewUserForm={closeNewUserForm}
          onUserAddClick={onUserAddClick}
          formValues={formValues}
          formChangeHandler={formChangeHandler}
          formErrors={formErrors}
        />
      )}
      <button className="btn-add btn" onClick={openNewUserForm}>
        Add new user
      </button>
    </>
  );
}
