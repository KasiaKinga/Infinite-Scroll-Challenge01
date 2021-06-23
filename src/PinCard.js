import React, { useRef, useEffect, useState } from "react";

const PinCard = (props) => {
  const [spans, setSpans] = useState(0);

  const ref = useRef(null);
  const { description, images } = props.pin;

  useEffect(() => {
    ref.current.addEventListener("load", setSpansOnPin);
  });

  const setSpansOnPin = () => {
    const height = ref.current.clientHeight;
    const spans = Math.ceil(height / 10) + 1;
    setSpans(spans);
  };
  
  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={ref} alt={description} src={images.orig.url} />
    </div>
  );
};

export default PinCard;
