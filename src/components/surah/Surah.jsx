import React from "react";

const Surah = ({ surah }) => {
    const {englishName,englishNameTranslation,name,revelationType} = surah;
  console.log(surah);
  return (
    <div className="card w-[100%] bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title ml-16 mb-4">{name}</h2>
        <h2 className="text-bold underline">English Name : <span className="text-green-700">{englishName}</span></h2>
        <p>English Meaning : <span className="text-green-700">{englishNameTranslation}</span></p>
        <div className="card-actions justify-center">
          <button className="btn hover:bg-green-700">Full Surah</button>
        </div>
      </div>
    </div>
  );
};

export default Surah;
