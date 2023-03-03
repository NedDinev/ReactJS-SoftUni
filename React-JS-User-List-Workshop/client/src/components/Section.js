import Search from "./Search";
import Table from "./Table";
import NewUserBtn from "./NewUserBtn";
import Pagination from "./Pagination";

export default function Section() {
  return (
    <section className="card users-container">
      <Search />
      <Table />
      <NewUserBtn />
      <Pagination />
    </section>
  );
}
