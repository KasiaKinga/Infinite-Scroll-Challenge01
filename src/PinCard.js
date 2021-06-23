import React, { useRef, useEffect, useState } from "react";

/**
 * Component showing pins as images
 * 
 * @param {Object} props Object that contains information about pin. E.g. {description: "black cat", images: {orig: {url: "https://cats.jpg"}}}
 */
const PinCard = (props) => {
  const [spans, setSpans] = useState(0);
  // ref is a reference which is passed as prop to the image (to have acess to DOM node image properties)
  const ref = useRef(null);
  const { description, images } = props.pin;

  useEffect(() => {
    ref.current.addEventListener("load", setSpansOnPin);
  });

  const setSpansOnPin = () => {
    // access the height of the image
    const height = ref.current.clientHeight;
    // the number of spans (rows) required to fit the image in the grid system
    // number 10 represents the height of the rows
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
