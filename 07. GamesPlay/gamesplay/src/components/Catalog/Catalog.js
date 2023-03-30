import CatalogItem from "./CatalogItem/CatalogItem";

export default function Catalog({ games }) {
  return (
    <section id="catalog-page">
      {games ? (
        <>
          {" "}
          <h1>All Games</h1>
          {games.map((x) => (
            <CatalogItem key={x._id} {...x} />
          ))}
        </>
      ) : (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </section>
  );
}
