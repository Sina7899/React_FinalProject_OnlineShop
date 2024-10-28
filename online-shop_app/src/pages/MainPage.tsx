import CLASSES from "../Styles/classes";

import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";

const MainPage: React.FC = () => {
  return (
    <header className={CLASSES.MAIN_PAGE.header}>
      <PageTitle />
      <NavBar />
    </header>
  );
};

export default MainPage;
