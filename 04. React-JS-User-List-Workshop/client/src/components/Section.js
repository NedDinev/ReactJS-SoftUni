import Search from "./Search";
import Table from "./Table";
import NewUserBtn from "./NewUserBtn";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import * as userService from "../services/userService";

export default function Section() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    phoneNumber: "",
    country: "",
    city: "",
    street: "",
    streetNumber: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    phoneNumber: "",
    country: "",
    city: "",
    street: "",
    streetNumber: "",
  });

  useEffect(() => {
    userService
      .getAll()
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  }, []);

  const onUserCreatedSubmit = async (e) => {
    //stop automatic form submit
    e.preventDefault();

    //take form data from DOM tree
    let formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    //send ajax request to server
    try {
      const createdUser = await userService.create(data);

      //if successful add new user to the state and close dialog
      setUsers((state) => [...state, createdUser]);
    } catch (error) {}
  };

  const onUserEditSubmit = async (e, userId) => {
    //stop automatic form submit
    e.preventDefault();

    //take form data from DOM tree
    let formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    //send ajax request to server
    try {
      await userService.edit(data, userId);

      //if successful refresh table and close dialog
      await refreshTable();
    } catch (error) {
      console.log(error);
    }
  };

  const refreshTable = async () =>
    await userService.getAll().then((users) => setUsers(users));

  const formChangeHandler = (e) => {
    const value = e.target.value;
    const errors = {};

    if (e.target.name === "firstName" && value.length < 3) {
      errors.firstName = "First name should be between 3 and 20 characters";
    }
    if (e.target.name === "lastName" && value.length < 3) {
      errors.lastName = "Last name should be between 3 and 20 characters";
    }
    if (
      e.target.name === "email" &&
      (value.length < 3 || !value.includes("@"))
    ) {
      errors.email = "Email should be at lest 3 characters long";
    }
    if (
      e.target.name === "imageUrl" &&
      (value.length < 3 || !value.startsWith("https://"))
    ) {
      errors.imageUrl = "Invalid image URL";
    }
    if (
      e.target.name === "phoneNumber" &&
      value.length < 10 &&
      value.charAt(0) !== 0
    ) {
      errors.phoneNumber =
        "Phone number should start with 0 and should be 10 characters long";
    }
    if (e.target.name === "country" && value.length < 2) {
      errors.country = "The Country should be at least two characters";
    }
    if (e.target.name === "city" && value.length < 3) {
      errors.city = "The City should be at least three characters";
    }
    if (e.target.name === "street" && value.length < 3) {
      errors.street = "The Street should be at least three characters";
    }
    if (e.target.name === "streetNumber" && value < 0) {
      errors.streetNumber = "The Street number must be a number larger than 0";
    }
    setFormErrors(errors);

    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <section className="card users-container">
      <Search />
      <Table
        users={users}
        refreshTable={refreshTable}
        onUserEditSubmit={onUserEditSubmit}
      />
      <NewUserBtn
        onUserCreatedSubmit={onUserCreatedSubmit}
        formChangeHandler={formChangeHandler}
        formValues={formValues}
        formErrors={formErrors}
      />
      <Pagination />
    </section>
  );
}
