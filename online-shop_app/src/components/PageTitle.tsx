import CLASSES from "../Styles/classes";

import { ShopTitle } from "../models/types";

const PageTitle: React.FC<ShopTitle> = ({ shopTitle = "Online Shop" }) => {
  return <h6 className={CLASSES.MAIN_PAGE.PageTitle}>{shopTitle}</h6>;
};

export default PageTitle;
