import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const FullSurah = () => {
  const surahData = useLoaderData();
  // console.log(surahData.data);
  const {
    englishName,
    englishNameTranslation,
    name,
    numberOfAyahs,
    revelationType,
    ayahs,
  } = surahData.data;
  return (
    <div className="card w-[100%] bg-white text-black">
      <div className="card-body">
        <h2 className="card-title mb-8">
          Name : {name}, <br /><br /> English Name : {englishName}, <br /> English
          Meaning : {englishNameTranslation},
          <br /> Total Ayah : {numberOfAyahs}, <br /><br /> Revelation : {revelationType}
          
        </h2>
        <hr />

        {ayahs.map((ayah) => (
          <p className="text-xl font-semibold mt-7">
            Ayah no - {ayah.number}:{" "}
            <span className="text-green-700">{ayah.text}</span>
          </p>
        ))}

        <div className="card-actions justify-end">
          <Link to="/quran"><button className="btn">go back</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FullSurah;
