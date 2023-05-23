import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { Pagination, Navigation } from "swiper";
import { FaQuoteLeft } from 'react-icons/fa';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    

    console.log(reviews);
    return (
		<div className='py-[50px] px-[300px]'>
			<SectionTitle
				subTitle={"What Our Clients Say"}
				title={"TESTIMONIALS"}
			/>

			<Swiper
				pagination={{
					type: "fraction",
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='mySwiper my-10 '
			>
				{reviews.map(review => (
					<SwiperSlide key={review._id}>
						<Rating
							style={{ maxWidth: 150 }}
							value={review.rating}
							readOnly
							className='mx-auto'
						/>

						<div className='px-20 text-center py-10 space-y-4'>
							<FaQuoteLeft className='text-3xl mx-auto' />
							<p>{review.details}</p>
							<h3 className='text-[#CD9003] text-[24px]'>
								{review.name}
							</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Reviews;