import React, { useEffect, useState } from "react";
import '../Style/styles.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import foodData, {foodDataLength} from "../data/category.js";
function Category() {
    const [slide ,setSlide]=useState(0);

    const nextSlide=()=>{
        if(foodData.length-8 ==slide) return false
        
setSlide(slide-3);
    }
    const prevSlide=()=>{
      if(foodData.length-8 ==slide) return false
        setSlide(slide+3);c
    }
  return (
    <>
    {
       
    }
      <div className="max-w-[1200px] mx-auto  items-center">
        
        <div className="flex items-center justify-between">
          <div className="text-[25px] font-bold">What you want to eat?</div>
          <div className=" flex items-center">
            <div className=" flex justify-center items-center w-[30px] h-[30px] bg-white rounded-full mx-2">
              <FaArrowLeft onClick={prevSlide} />
            </div>
            <div className="flex justify-center items-center  w-[30px] h-[30px] bg-white rounded-full mx-2">
              <FaArrowRight onClick={nextSlide}/>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto border scrollbar-hidden  p-">
          {foodData.map((food, index) => (
            <div className="flex-none w-[150px] shrink-0 duration-500" key={index} style={{transform:`translateX(${slide*100}%)`}}>
              <img
                src={require(`../images/${food.image}`)}
                className="w-full h-auto rounded-lg"
                alt={food.path}
              />
            
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
