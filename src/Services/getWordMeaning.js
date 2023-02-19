const getWordMeaning = async (text) => {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getWordMeaning };
