import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Cards from './Cards';
import axios from 'axios'
const FreeBook = () => {

  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3001/book")
       setBook(res.data);
      } catch (error) {
        console.log("Error=>" + error)
      }
    }
    getBook()
  },[])


    const FreeBook = book.filter((data)=>{return data.category=="Free"})
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
      <div className=" w-full h-screen max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p className='text-gray-500 pb-4' >
            Our free courses offer you an excellent opportunity to learn new skills and expand your knowledge. Through these courses, you can advance your career without any cost.
          </p>
        </div>
        <div>
           
          <Slider {...settings}>
            {FreeBook.map((item) => (
              <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
        
      </div>
    </>
  )
}

export default FreeBook