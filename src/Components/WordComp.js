import React, { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

//! divider component
const Divider = ({ text }) => {
  return (
    <>
      <div className="my-4 flex items-center">
        <span className="text-xl font-semibold dark:text-[#fff] ">{text}</span>
        <span className="border mx-4 border-grey-500 h-0 w-[100%]"></span>
      </div>
    </>
  );
};

//! Meaning Components
const MeaningComp = ({ definitions }) => {
  return (
    <>
      <div className="text-2xl text-gray-600 dark:text-gray-400 font-serif">
        Meaning
      </div>
      <div
        className="w-[90%] mx-auto
        "
      >
        <ul className=" list-disc text-xl my-2 marker:text-violet-500">
          {definitions.map((ele, idx) => {
            const { definition } = ele;
            return (
              <li key={idx} className="my-2 dark:text-[#fff] font-sans">
                {definition}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const Antonyms = ({ antonyms }) => {
  return (
    <>
      <div className="my-6 ">
        <div className="flex ">
          <div className="text-2xl text-gray-600 dark:text-gray-400 font-serif">
            Antonyms
          </div>
          <div className="ml-4 flex flex-wrap ">
            {antonyms.map((word, idx) => {
              return (
                <span
                  key={idx}
                  className="mx-2   text-xl font-semibold text-violet-500"
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const SynoAntoNyms = ({ synonyms }) => {
  return (
    <>
      <div className="my-6 ">
        <div className="flex ">
          <div className="text-2xl text-gray-600 dark:text-gray-400 font-serif">
            Synonyms
          </div>
          <div className="ml-4 flex flex-wrap">
            {synonyms.map((word, idx) => {
              return (
                <span
                  key={idx}
                  className="mx-2 text-xl font-semibold text-violet-500"
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const WordComp = ({ wordMeaning }) => {
  const { word, meanings, sourceUrls, phonetic, phonetics } = wordMeaning;
  const [playing, setPlaying] = useState(false);
  let audio;
  const playingHandler = () => {
    setPlaying(!playing);
    if (phonetics.length > 0) {
      audio = new Audio(phonetics[0].audio);
    }
    audio.play();
  };

  return (
    <div className=" max-w-3xl mx-auto p-3 my-5">
      <div className="flex justify-between content-center ">
        <div>
          <div className=" text-4xl font-bold dark:text-[#fff]">{word}</div>
          <div className="text-2xl text-violet-600">{phonetic}</div>
        </div>
        <div
          onClick={() => playingHandler()}
          className=" rounded-full cursor-pointer bg-violet-200 flex justify-center items-center w-[70px] "
        >
          <div>
            {!playing ? (
              <BsFillPlayFill className="text-3xl text-violet-700" />
            ) : (
              <BsPauseFill className="text-3xl text-violet-700" />
            )}
          </div>
        </div>
      </div>
      <>
        {meanings.map((ele, idx) => {
          const { definitions, partOfSpeech, antonyms, synonyms } = ele;
          return (
            <div key={idx}>
              <Divider text={partOfSpeech} />
              <MeaningComp definitions={definitions} />
              {synonyms.length == 0 ? (
                ""
              ) : (
                <>
                  <SynoAntoNyms synonyms={synonyms} />
                </>
              )}
              {antonyms.length == 0 ? (
                ""
              ) : (
                <>
                  <Antonyms antonyms={antonyms} />
                </>
              )}
            </div>
          );
        })}
      </>
      <div className="flex ">
        <span className="border border-grey-500 h-0 w-[100%]"></span>
      </div>
      <div className="flex flex-wrap my-4 items-center">
        <div className="text-xl text-gray-600 dark:text-gray-400">Source</div>
        <a target={"_blank"} href={sourceUrls}>
          <span className="ml-4 dark:text-[#fff] break-words ">
            {sourceUrls}
          </span>
        </a>
        <span className="ml-1">
          <BiLinkExternal className="dark:text-[#fff]" />
        </span>
      </div>
    </div>
  );
};

export default WordComp;
