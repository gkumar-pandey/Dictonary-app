import React, { useEffect } from "react";
import Header from "../Components/Header";
import { useState } from "react";
import Search from "../Components/Search";
import WordComp from "../Components/WordComp";
import { toast } from "react-hot-toast";
import { getWordMeaning } from "../Services/getWordMeaning";
import { img1 } from "../Assets";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const HomePage = () => {
  const [word, setWord] = useState("");
  const [wordMeaning, setWordMeaning] = useState([]);
  const [toggle, setToggle] = useState(false);

  const [loading, setLoading] = useState(false);

  const fetchData = async (word) => {
    setLoading(true);
    const [data] = await getWordMeaning(word);
    setWordMeaning(data);
    setLoading(false);
  };

  const searchHandler = () => {
    if (word == "") {
      toast.error("Enter a Word");
      setWordMeaning([]);
      return;
    } else {
      fetchData(word);
    }
  };

  // them change
  useEffect(() => {
    if (toggle) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);

  return (
    <div className={`px-4  dark:bg-[#000000]`}>
      <Header toggle={toggle} setToggle={setToggle} />
      <Search word={word} setWord={setWord} searchHandler={searchHandler} />

      <>
        {loading ? (
          <div className="mx-auto h-screen text-center  max-w-3xl">
            <Loader />
          </div>
        ) : (
          <>
            {wordMeaning.length == 0 ? (
              <div className=" h-screen mx-auto p-3  max-w-3xl">
                <div>
                  <div className="mx-auto text-4xl font-bold text-center font-sans text-violet-500 p-4">
                    Your Personal Dictonary
                  </div>
                </div>
                <img className="mx-auto" src={img1} />
              </div>
            ) : (
              <WordComp wordMeaning={wordMeaning} />
            )}
          </>
        )}
      </>

      <Footer />
    </div>
  );
};

export default HomePage;
