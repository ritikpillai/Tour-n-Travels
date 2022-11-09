import React, { useEffect, useState } from "react";
import Navbar from "./NavBar/navbar";
import "./home.scss";
import data from "./data";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import AnimatedLetters from "../AnimateLetters/animateLetter";


function Home()
{
    const [index,setIndex] = useState(0);
    
    const checkIndex = (idx) => {
      if(idx<0)
       return data.length-1;
      else if(idx>data.length-1)
      return 0;
      else
      return idx;
    }

    
    function change(num)
    {
      
      if(num===1)
      {
        setIndex(checkIndex(index+1));
      }
      else
      {
        setIndex(checkIndex(index-1));
      }
  }
  
  const [letterClass, setLetterClass] = useState("text-animate");
  const placeName = (data[checkIndex(index)].place).split("");

  useEffect( () => {
    setTimeout(() => {
     setLetterClass('text-animate-hover');
 }, 4000)
}, [])


  console.log(placeName);
  return (
        <div className="home-page" style={{background:`url(${data[checkIndex(index)].bg})`}}>
            <Navbar />

             <div className="index">
              {
              data.map((item,i) => {
                let className = "";

                  if(i===index)
                  className = "para active";
                  else 
                  className = "para";

                  return (
                    <div>
                      <p className={className}>{item.id}</p>
                    </div>
                  )
              })
             }
             </div>

          {
            <div className="detail-carousel">
                <h1 className="detail-place">
                  <AnimatedLetters letterClass={letterClass} strArray={placeName} idx={1}/>
                </h1>
                <p className="detail-discription">
                  {data[checkIndex(index)].discription}
                </p>
            </div>
          }

             <button className="explore-btn">
                Explore<FiArrowRight className="arrow"/>
             </button>


          <div className='img-carousel'>
          {    
            data.map((item,i) => {
            const indexLeft = checkIndex(index-1);
            const indexRight = checkIndex(index+1);
            const indexRight2 = checkIndex(index+2);

            let className = "";

            if(i===index)
            className = "card card-active";
            else if(i === indexRight)
            className = "card card-right";
            else if(i === indexRight2)
            className = "card card-right2";
            else if(i === indexLeft)
            className = "card card-left";
            else
            className = "card";

            return (
                <div>
                  <p className={`${className} place-name`}>{item.place}</p>
                  <img key={item.id} src={item.bg2} alt="img" className={className}/>
                </div>
            )
         })
       }
       </div>

        {
          
          <div className='btns'>
            <button onClick={() => {change(2)}}>
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={() => {change(1)}}>
              <BsFillArrowRightCircleFill />
            </button>
          </div>
          }
        </div>
    )
}

export default Home;