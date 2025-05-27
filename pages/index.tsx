import { useState } from "react";
import Image from "next/image";
import CodeWindow from "@/components/Chatwindow";
import GithubIcon from "@/components/Icons/Github";
import { BackgroundGradientAnimation } from "@/components/BgGradient";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [inputCode, setInputCode] = useState<string>("");
  const [outputCode, setOutputCode] = useState<string>("");
  const [inputLanguage, setInputLanguage] = useState<string>("JavaScript");
  const [outputLanguage, setOutputLanguage] = useState<string>("Python");

  interface LanguageOption {
    value: string;
  }

  const handleInputLanguageChange = (option: LanguageOption) => {
    setInputLanguage(option.value);
    setInputCode("");
    setOutputCode("");
  };

  const handleOutputLanguageChange = (option: LanguageOption) => {
    setOutputLanguage(option.value);
    setOutputCode("");
  };

  const handleTranslate = async () => {
    const maxCodeLength = 6000;

    if (inputLanguage === outputLanguage) {
      alert("Please select different languages.");
      return;
    }

    if (!inputCode) {
      alert("Please enter some code.");
      return;
    }

    if (inputCode.length > maxCodeLength) {
      alert(
        `Please enter code less than ${maxCodeLength} characters. You are currently at ${inputCode.length} characters.`
      );
      return;
    }

    setLoading(true);
    setOutputCode("");

    const controller = new AbortController();

    const body = {
      inputLanguage,
      outputLanguage,
      inputCode,
    };

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const data = response.body;

      if (!data) {
        throw new Error("Something went wrong.");
      }

      const reader = data.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);

        setOutputCode((prevCode) => prevCode + chunkValue);
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center">
{/*       <BackgroundGradientAnimation> */}
        <div className="flex flex-col z-[9999] items-center justify-center">
          <div className="text flex flex-col gap-2.5 mt-10 mx-6 items-center justify-center text-center">
            <h1 className="font-sans text-5xl justify-center text-slate-100 font-bold">
              Code Translator
            </h1>
            <h2 className="font-sans mt-5 text-xl justify-center text-slate-50 mb-10">
              Translate your code to another programming language. With just a
              click.
            </h2>
          </div>
          {/* Input code window */}
          <CodeWindow
            code={inputCode}
            setCode={setInputCode}
            loading={loading}
            handleLanguageChange={handleInputLanguageChange}
            language={inputLanguage}
          />

          {/* Translate button */}
          <button
            disabled={loading}
            className="bg-[#C53AAE] border-white p-3 m-2 flex justify-center items-center rounded-lg text-white font-semibold"
            onClick={handleTranslate}
          >
            {loading ? `Translating...` : `Translate 🔁`}
          </button>

          {/* Output code window */}
          <CodeWindow
            code={outputCode}
            setCode={setOutputCode}
            loading={loading}
            handleLanguageChange={handleOutputLanguageChange}
            language={outputLanguage}
          />
        </div>
{/*       </BackgroundGradientAnimation> */}
      <p className="font-sans flex items-center gap-2.5 mt-5 pb-5">
        Powered by{" "}
        <a
          className="ref-link text-[#C53AAE] flex relative items-center"
          href="http://github.com/itiwariarun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arun{" "}
          <span className="scale-[.25] absolute left-4 top-0 bottom-0 flex items-center">
            <GithubIcon />
          </span>
        </a>
      </p>
    </div>
  );
}
