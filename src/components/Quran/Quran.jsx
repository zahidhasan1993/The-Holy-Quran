import React from "react";
import { useLoaderData } from "react-router-dom";
import Surah from "../surah/Surah";
import Footer from "../Footer/Footer";

const Quran = () => {
  const quranData = useLoaderData();
  // console.log(quranData);
  const allSurah = quranData.data.surahs;
  // console.log(allSurah);
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-6 mb-4">
        {allSurah.map((surah) => (
          <Surah key={surah.number} surah={surah}></Surah>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Quran;
