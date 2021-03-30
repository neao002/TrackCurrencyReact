import React from "react";

const TrackForm = ({ name, image, symbol, price, volume }) => {
  return (
    <div>
      <div>
        <div>
          <img src={image} alt="imagesCrypto" />
          <h1>{name}</h1>
          <p>{symbol}</p>
          <p>{price}</p>
          <p>{volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackForm;
