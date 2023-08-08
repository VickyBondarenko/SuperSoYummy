import React, { useState } from "react";
import styles from "./MeasurementDropdown.module.css";
import { FieldInputProps } from "formik";
import Select from "react-select";

interface IngredientFieldProps {
  options: string[];
  field: FieldInputProps<string>;
}

export const MeasurementDropdown: React.FC<IngredientFieldProps> = ({
  options,
  field,
}) => {
  const [amount, setAmount] = useState("");
  const [measurement, setMeasurement] = useState<string | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    updateCombinedValue(e.target.value, measurement);
  };

  const handleMeasurementChange = (selectedOption: any) => {
    setMeasurement(selectedOption.value);
    updateCombinedValue(amount, selectedOption.value);
  };

  const updateCombinedValue = (amount: string, measurement: string | null) => {
    const combinedValue = measurement ? `${amount} ${measurement}` : amount;
    field.onChange({
      target: { name: field.name, value: combinedValue },
    });
  };

  const customStyles = {
    control: (provided: any, state: { isFocused: boolean }) => ({
      ...provided,
      height: "100%",
      outline: state.isFocused && "2px solid #8BAA36",
      width: "90px",
      border: "2px solid #ccc",
      // dark border #393A42
      borderRadius: "4px",
      backgroundColor: "transparent",
      transition: "all 0.3s",
      "&:hover": {
        border: "2px solid black",
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      height: "100%",
      backgroundColor: "transparent",
      cursor: "text",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#808080",
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
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      backgroundColor: "white",
      textDecoration: state.isSelected ? "underline" : "none",
      color: state.isSelected ? "#8BAA36" : "rgba(0, 0, 0, 0.5)",
      cursor: "pointer",
      height: "100%",

      transition: "all 0.3s",
      "&:hover": {
        textDecoration: "underline",
        color: "#8BAA36",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 9999,
    }),
    menuList: (provided: any) => ({
      ...provided,
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
        background: "#8BAA36",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-track": {
        background: "rgba(217, 217, 217, 0.1)",
      },
      scrollbarColor: "#8BAA36 rgba(217, 217, 217, 0.1)",
    }),
  };

  const measurementOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <div className={styles.measureField_wrapper}>
      <input
        type="text"
        placeholder="Amount"
        className={`${styles.amount_input} dark:border-[#393A42] dark:text-whiteText`}
        value={amount}
        onChange={handleAmountChange}
      />
      <Select
        options={measurementOptions}
        value={measurement ? { value: measurement, label: measurement } : null}
        onChange={handleMeasurementChange}
        styles={customStyles}
        placeholder="Msr"
      />
    </div>
  );
};

// import React, { useState } from "react";
// import styles from "./MeasurementDropdown.module.css";
// import { FieldInputProps } from "formik";
// import { FiChevronDown } from "react-icons/fi";

// interface IngredientFieldProps {
//   options: string[];
//   field: FieldInputProps<string>;
// }

// export const MeasurementDropdown: React.FC<IngredientFieldProps> = ({
//   options,
//   field,
// }) => {
//   const [amount, setAmount] = useState("");
//   const [measurement, setMeasurement] = useState("");
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const toggling = () => setIsOpen(!isOpen);

//   const onOptionClicked = (value: string) => () => {
//     console.log(value);
//     setMeasurement(value);
//     field.onChange({
//       target: { name: field.name, value: value + " " + amount },
//     });
//     setIsOpen(false);
//   };

//   return (
//     <div className={styles.measureField_wrapper}>
//       <input
//         type="text"
//         placeholder="Amount"
//         className={styles.amount_input}
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <div onClick={toggling} className={styles.measure_wrapper}>
//         <span> {measurement}</span>
//         <FiChevronDown
//           className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
//           stroke={"#8BAA36"}
//           size={14}
//           onClick={toggling}
//         />

//         {isOpen && (
//           <ul className="absolute top-full left-0 w-48 border border-gray-300 bg-white p-0 m-0 list-none z-10">
//             {options.map((option) => (
//               <li
//                 key={option}
//                 className="cursor-pointer py-2 px-4 hover:bg-gray-100"
//                 onClick={onOptionClicked(option)}
//               >
//                 {option}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };
