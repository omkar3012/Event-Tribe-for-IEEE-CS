import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import ReviewInput from "./ReviewInput";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'

import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import img from '../../assets/person/image-person-jpg.jpg'

const Reviews = () => {
  const axios = useAxiosPublic();

  const {
    data: review = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axios("/review");
      return res.data;
    },
  });
  console.log(review);

  return (
    <div className="flex flex-col  gap-5 my-20 px-10 ">
      <div className="w-full">
        <h2 className="text-primary font-semibold">Testimonial</h2>
        <h3 className="text-3xl font-semibold text-gray-800 uppercase">
          WHAT PEOPLE SAY ABOUT Dream Craft Events.
        </h3>
        <Swiper
       slidesPerView={1}
       centeredSlides={false}
       slidesPerGroupSkip={1}
       spaceBetween={30}
       grabCursor={true}
       keyboard={{
         enabled: true,
       }}
       breakpoints={{
         769: {
           slidesPerView: 3,
           slidesPerGroup: 3,
         },
       }}
      
       navigation={true}
       pagination={{
         clickable: true,
       }}
       modules={[Keyboard, Scrollbar, Navigation, Pagination]}
       className="mySwiper "
         
          
        >
          {review?.map((data) => (
            <SwiperSlide key={data._id} className=" p-2 rounded-lg mb-5 bg-gray-100">
              <div className="flex gap-7 bg-gray-300 p-2 rounded-t-lg">
              <img src={img} className="w-10 h-10 rounded-full" alt="person" />
             <div className="flex flex-col">
             <h2 className="uppercase text-primary font-semibold">{data?.name}</h2>
              <p className="text-sm">{data?.time}</p>
             </div>
              </div>
              <p className="mt-2">{data?.text}</p>

              <div className="flex gap-5">
                <p className="font-semibold">{data?.rating}</p>
              <Rating className="" style={{ maxWidth: 80 }} value={data?.rating} readOnly />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full ">
        <ReviewInput></ReviewInput>
      </div>
    </div>
  );
};

export default Reviews;
