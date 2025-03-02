import Select from "react-select";
import { languages } from "./language";

const LanguageSelect = ({
  language,
  handleLanguageChange,
  disabled,
}: {
  language: string;
  handleLanguageChange: (option: { value: string }) => void;
  disabled: boolean;
}) => {
  // Format option label for dropdown items
  const formatOptionLabel = ({
    value,
    label,
  }: {
    value: string;
    label: string;
  }) => (
    <div className="flex flex-row justify-between items-center">
      <p>{label}</p>
      {language === value && <p className="text-xs text-slate-400">Selected</p>}
    </div>
  );

  return (
    <div>
      <Select
        className="w-full"
        value={languages.find((lang) => lang.value === language) || null}
        onChange={(selectedOption: { value: string }) =>
          handleLanguageChange(selectedOption)
        }
        isDisabled={disabled}
        options={languages.sort((a, b) => a.label.localeCompare(b.label))}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};

export default LanguageSelect;
