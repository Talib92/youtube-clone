import React from "react";

const Result = ({ data }) => {
  const { title, channelTitle, publishedAt, description } = data.snippet;
  const dataPub = publishedAt.slice(0, 10);
  const { high } = data.snippet.thumbnails;
  return (
    <div className="m-8 flex mt-20">
      <div>
        <img
          src={high.url}
          alt="thumbnail"
          className="w-[500px] h-80 object-cover rounded-xl"
        />
      </div>
      <div className="ml-4">
        <h1 className="font-semibold">{title}</h1>
        <h2 className="text-gray-500">{dataPub}</h2>
        <h2 className="text-gray-500">{channelTitle}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Result;