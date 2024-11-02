import CLASSES from "../Styles/classes";

import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <p className={`${CLASSES.MAIN_PAGE.Products_loadingOrError} text-red-300`}>
      Could not find this page!
      <br />
      <span className="text-base">
        Back to{" "}
        <Link to="/Online-Shop" className="text-blue-300 underline">
          Online-Shope
        </Link>{" "}
        Page
      </span>
    </p>
  );
};

export default ErrorPage;
