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
      .then((users) => setUsers(users) )
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="card users-container">
      <Search />
      <Table users={users} />
      <NewUserBtn />
      <Pagination />
    </section>
  );
}
