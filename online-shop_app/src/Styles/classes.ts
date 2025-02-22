import { ClassesStructure } from "../models/types";

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
      "flex flex-col justify-center items-center gap-3 sm:justify-around sm:flex-row w-full",
    SearchBar_div:
      "flex rounded-md border border-blue-500 overflow-hidden w-[325px] sm:w-[448px]",
    SearchBar_input:
      "w-full outline-none bg-white text-gray-600 text-sm px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 transition",
    SearchBar_button:
      "flex items-center justify-center bg-[#007bff] px-5 cursor-not-allowed",
    SearchBar_svg: "fill-white",
    CategorySelect_select:
      "rounded-md border border-blue-500 overflow-hidden w-[325px] sm:w-[448px] px-4 py-[9px] custom-select-downArrow",
    Products:
      "grid gap-2 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 sm:py-12 mx-auto w-fit",
    ProductItem_first_div:
      "mb-4 sm:mb-0 h-[484px] w-[320px] rounded-md shadow-xl",
    ProductItem_second_div: "p-5",
    ProductItem_third_div: "flex justify-between align-center",
    ProductItem_img:
      "w-[320px] h-[320px] object-contain rounded-md rounded-b-none",
    ProductItem_h4: "text-2xl font-semibold mb-2 truncate",
    ProductItem_p: "italic mb-6 truncate ",
    ProductItem_first_span: "font-bold",
    ProductItem_second_span: "text-green-700 underline align-middle",
    ProductItem_button:
      "w-auto px-2 py-1 border-solid border border-blue-600 rounded-md text-sm text-blue-600 hover:bg-blue-600 hover:text-white transition",
    Products_loadingOrError:
      "block h-screen text-center text-2xl p-52 font-semibold italic",
  },
  MODAL_PAGE: {
    Modal:
      "bg-NAV_BAR m-auto rounded-lg shadow-lg p-6 animate-fade-slide-up custom-scrollbar ",
    closeIcon_div: " mb-4 w-100 flex justify-end",
    closeIcon_span:
      "material-symbols-outlined hover:text-red-600 cursor-pointer",
    table:
      "w-full p-5 border-dashed border-2 border-black rounded-md border-spacing-0 border-separate",
    table_thead_th:
      "px-1 sm:px-4 py-2 border-solid border-b-2 border-black w-[100px]",
    table_tbody_td:
      "px-2 py-[5px] sm:px-4 sm:py-[10px] border-solid border-b-[1px] border-[#ddd] text-sm font-thin italic text-center max-w-[40px] sm:max-w-xs truncate",
    table_tfoot_first_td:
      "text-end font-bold py-2 italic border-solid border-t-2 border-black",
    table_tfoot_second_td:
      "font-bold underline text-green-700 text-center py-2 border-solid border-t-2 border-black",
    table_tbody_count_div_desktop: "flex justify-between items-center",
    table_tbody_count_div_mobile: "flex justify-around items-center",
    table_tbody_decrease_icon:
      "material-symbols-outlined text-base cursor-pointer hover:text-red-600",
    table_tbody_increase_icon:
      "material-symbols-outlined text-base cursor-pointer hover:text-blue-600",
    table_tbody_total_div: "flex justify-end items-center gap-2",
    empty_card_p: "text-center mt-28 text-red-500 italic font-semibold",
  },
};

export default CLASSES;
