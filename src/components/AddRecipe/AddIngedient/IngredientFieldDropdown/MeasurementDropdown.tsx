import React, { useState } from "react";
import styles from "./MeasurementDropdown.module.css";
import { FieldInputProps } from "formik";
import Select from "react-select";
import { measurementSelectStyles } from "../../../../styles/reactSelectStyles";

interface IngredientFieldProps {
  options: string[];
  field: FieldInputProps<string>;
  isDarkMode: boolean;
}

export const MeasurementDropdown: React.FC<IngredientFieldProps> = ({
  options,
  field,
  isDarkMode,
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

  const customStyles = measurementSelectStyles(isDarkMode);

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
