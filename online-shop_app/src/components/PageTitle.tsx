import CLASSES from "../Styles/classes";

const PageTitle: React.FC<{ shopTitle?: string }> = ({
  shopTitle = "Online Shop",
}) => {
  return <h6 className={CLASSES.MAIN_PAGE.PageTitle}>{shopTitle}</h6>;
};

export default PageTitle;
