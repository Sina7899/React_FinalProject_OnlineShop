import CLASSES from "../Styles/classes";

const CategorySelect: React.FC = () => {
  return (
    <select className={CLASSES.MAIN_PAGE.CategorySelect_select}>
      <option value="" disabled>
        Category
      </option>
      <option defaultValue="All">All</option>
    </select>
  );
};

export default CategorySelect;
