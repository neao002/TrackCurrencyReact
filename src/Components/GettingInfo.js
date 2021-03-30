import React, { useState, useEffect } from "react";

import axios from "axios";
import TrackForm from "./TrackForm";

function Hello() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const showMyData = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="coin-search">
        <h1>Search a Currency</h1>
        <form action="text">
          <input
            onChange={showMyData}
            type="search"
            placeholder="search here"
          />
          {filteredCoins.map((coin) => {
            return (
              <TrackForm
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                image={coin.image}
                volume={coin.market_cap}
                symbol={coin.symbol}
              />
            );
          })}
        </form>
      </div>
    </div>
  );
}

export default Hello;
