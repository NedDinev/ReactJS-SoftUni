import Search from "./Search";
import Table from "./Table";
import NewUserBtn from "./NewUserBtn";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import * as userService from "../services/userService";

export default function Section() {
  const [users, setUsers] = useState([]);

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

  return (
    <section className="card users-container">
      <Search />
      <Table
        users={users}
        refreshTable={refreshTable}
        onUserEditSubmit={onUserEditSubmit}
      />
      <NewUserBtn onUserCreatedSubmit={onUserCreatedSubmit} />
      <Pagination />
    </section>
  );
}
