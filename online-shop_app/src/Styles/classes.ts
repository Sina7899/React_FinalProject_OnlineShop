interface ComponentClassesStructure {
  [key: string]: string;
}

interface ClassesStructure {
  MAIN_PAGE: ComponentClassesStructure;
  MODAL_PAGE: ComponentClassesStructure;
}

const CLASSES: ClassesStructure = {
  MAIN_PAGE: {
    header: "sticky top-0 z-1",
    PageTitle: "text-center bg-TOP_BAR text-white font-bold py-2",
    Logo: "h-fit w-[65px] sm:w-[85px]",
    nav: "flex justify-between items-center sm:px-12 px-6 py-2 bg-NAV_BAR",
    UserInfo_div: "flex justify-start items-center gap-2 w-72 -mr-[220px]",
    UserInfo_p: "font-semibold text-sm flex",
    UserInfo_span: "font-semibold text-sm block",
    UserInfo_loadingOrError: "w-72 -mr-[220px] font-bold text-red-300 italic",
    Cart_div: "flex justify-between items-center gap-1.5 cursor-pointer",
    Cart_span: "font-bold",
    Cart_count_div:
      "rounded-full w-[25px] h-[25px] bg-CART_COUNT text-white font-bold flex justify-center items-center",
    main: "sm:px-12 sm:py-12 px-6 py-8 h-screen",
    main_searchAndCategory_section:
      "flex flex-col justify-center items-center gap-3 sm:justify-around sm:flex-row",
    SearchBar_div:
      "flex rounded-md border border-blue-500 overflow-hidden w-[448px]",
    SearchBar_input:
      "w-full outline-none bg-white text-gray-600 text-sm px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 transition",
    SearchBar_button: "flex items-center justify-center bg-[#007bff] px-5",
    SearchBar_svg: "fill-white",
    CategorySelect_select:
      "rounded-md border border-blue-500 overflow-hidden w-[448px] px-4 py-[9px] custom-select-downArrow",
  },
  MODAL_PAGE: {},
};

export default CLASSES;