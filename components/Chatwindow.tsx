import CodeEditor from "./CodeEditor";
import LanguageSelect from "./LanguageSelect";

interface CodeWindowProps {
  code: string;
  setCode: (code: string) => void;
  loading: boolean;
  handleLanguageChange: (option: { value: string }) => void;
  language: string;
}

const CodeWindow: React.FC<CodeWindowProps> = ({
  code,
  setCode,
  loading,
  handleLanguageChange,
  language,
}) => {
  return (
    <div className="px-6 md:px-20 my-5 w-full md:w-2/5">
      <div className="rounded-xl border-2 border-indigo-100">
        <LanguageSelect
          handleLanguageChange={handleLanguageChange}
          language={language}
          disabled={loading}
        />
        <CodeEditor code={code} setCode={setCode} editable={!loading} />
      </div>
    </div>
  );
};

export default CodeWindow;
