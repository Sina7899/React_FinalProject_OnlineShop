import CLASSES from "../Styles/classes";

import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import CategorySelect from "../components/CategorySelect";

const MainPage: React.FC = () => {
  return (
    <>
      <header className={CLASSES.MAIN_PAGE.header}>
        <PageTitle />
        <NavBar />
      </header>
      <main className={CLASSES.MAIN_PAGE.main}>
        <section className={CLASSES.MAIN_PAGE.main_searchAndCategory_section}>
          <SearchBar />
          <CategorySelect />
        </section>
      </main>
    </>
  );
};

export default MainPage;
