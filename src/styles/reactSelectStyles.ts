export const timeCatSelectStyles = (isDarkMode: boolean) => {
  return {
    control: (provided: any, state: { isFocused: boolean }) => ({
      ...provided,
      border: `2px solid ${isDarkMode ? "#393A42" : "#ccc"}`,
      width: "120px",
      borderRadius: "4px",
      display: "flex",
      outline: state.isFocused && "2px solid #8BAA36",
      alignItems: "center",
      backgroundColor: "transparent",
      transition: "all 0.3s",
      "&:hover": {
        border: "2px solid black",
      },
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      cursor: "pointer",
      color: "#8BAA36",
      transition: "all 0.3s",
      "&:hover": {
        color: "#8BAA36",
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: isDarkMode ? "#FAFAFA" : "black",
    }),
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      borderRadius: "6px",
      backgroundColor: "treansparent",
      textDecoration: state.isSelected ? "underline" : "none",
      color: isDarkMode
        ? state.isSelected
          ? "#1E1F28"
          : "#FAFAFA"
        : state.isSelected
        ? "#8BAA36"
        : "rgba(0, 0, 0, 0.5)",
      cursor: "pointer",
      height: "100%",

      transition: "all 0.3s",
      "&:hover": {
        textDecoration: "underline",
        color: isDarkMode ? "#1E1F28" : "#8BAA36",
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#a9a9a9",
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 9999,
      borderRadius: "8px",
    }),
    menuList: (provided: any) => ({
      ...provided,
      backgroundColor: isDarkMode ? "#8BAA36" : "white",
      borderRadius: "6px",
      maxHeight: "200px",
      transition: "all 0.3s",
      border: "2px solid transparent",
      overflowY: "auto",
      "&:hover": {
        border: "2px solid #ccc",
      },
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: isDarkMode ? "#1E1F28" : "#8BAA36",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-track": {
        background: "rgba(217, 217, 217, 0.1)",
      },
      scrollbarColor: isDarkMode
        ? "rgba(0, 0, 0, 0.5)"
        : "#8BAA36 rgba(217, 217, 217, 0.1)",
    }),
  };
};
