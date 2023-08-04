import React, { useState } from "react";
import { FieldInputProps } from "formik";

interface IngredientFieldProps {
  options: string[];
  field: FieldInputProps<string>;
}

export const IngredientField: React.FC<IngredientFieldProps> = ({
  options,
  field,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggling = () => setIsOpen(!isOpen);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: string) => {
    setSearchTerm(option);
    field.onChange({ target: { name: field.name, value: option } });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-48 py-2 px-4 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={toggling}
      />
      {isOpen && (
        <ul className="absolute top-full left-0 w-48 border border-gray-300 bg-white p-0 m-0 list-none">
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="cursor-pointer py-2 px-4 hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
