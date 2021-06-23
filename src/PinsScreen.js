import React, { useState } from "react";
import PinCard from "./PinCard";
import "./styles.css";
import InfiniteScroll from "react-infinite-scroll-component";

const NUMBER_OF_INITIAL_LOADED_PINS = 20;
const NUMBER_OF_LOADED_PINS = 10;

/**
 * Component displays pins along with information about status of fetched data and allows infinite scrolling
 * 
 * @param {object} props Object which contains array of data, see examples in './data/nyc_ttp_pins.json'
 */
const PinsScreen = (props) => {
  const [pins, setPins] = useState(
    props.data.slice(0, NUMBER_OF_INITIAL_LOADED_PINS)
  );
  const [hasMore, setHasMore] = useState(true);
  
  const fetchData = () => {
    setTimeout(() => {
      if (pins.length >= props.data.length) {
        setHasMore(false);
      }
      const currentLength = pins.length;
      setPins(props.data.slice(0, currentLength + NUMBER_OF_LOADED_PINS));
    }, 1000);
  };

  return (
    <div className="container">
      <InfiniteScroll
        className="content"
        dataLength={pins.length} 
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {pins.map((pin) => {
          return <PinCard key={pin.id} pin={pin} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default PinsScreen;
