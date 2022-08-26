import React , { useRef } from "react";
import "../assets/css/Section.css";
import Item from "./Item";
import cabbage from "../assets/images/cabbage.jfif";
import onion from "../assets/images/onion.jpg";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Section = ({ sectionImage, sectionTitle }) => {
  const ref = useRef(null)
  const scrollRight = () => {    
    let amountScrolled = 0;

    const timer = setInterval(()=> {
    
      const currLeft = ref.current.scrollLeft
      ref.current.scrollLeft += 10
      const newLeft = ref.current.scrollLeft
      amountScrolled += (newLeft - currLeft)
    
      if(currLeft === newLeft || amountScrolled === 800){
        clearInterval(timer)
      }
    } , 8)    
  };

  const scrollLeft = () => {
    let amountScrolled = 0;

    const timer = setInterval(()=> {
      
      const currLeft = ref.current.scrollLeft
      ref.current.scrollLeft -= 10
      const newLeft = ref.current.scrollLeft
      amountScrolled += (currLeft - newLeft)
      if(newLeft === 0 || amountScrolled === 800){
        clearInterval(timer)
      }
    } , 8)
  };

  return (
    <div className="section">
      <div className="section-title">
        <img src={sectionImage} alt={' '}/>
        <p>{sectionTitle}</p>
      </div>
      <div className="wrapper">
        <div className="section-items" ref={ref}>
          <Item image={onion} />
          <Item image={cabbage} />
          <Item image={onion} />
          <Item image={onion} />
          <Item image={onion} />
          <Item image={cabbage} />
          <Item image={onion} />
          <Item image={onion} />
          <Item image={onion} />
          <Item image={cabbage} />
          <Item image={onion} />
          <Item image={onion} />
          <Item image={onion} />
          <Item image={cabbage} />
          <Item image={onion} />
          <Item image={onion} />
        </div>
        <button onClick={scrollLeft} className={"left-arrow"}>
          <ChevronLeftIcon />
        </button>
        <button onClick={scrollRight} className={"right-arrow"}>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Section;
