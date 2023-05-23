import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination,  } from "swiper";


const OnlineOrder = () => {
    return (
		<div className='px-[300px]'>
			<SectionTitle
				subTitle={"From 11:00am to 10:00pm"}
				title={"ORDER ONLINE"}
			/>
			<div className='my-[40px]'>
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className='mySwiper'
				>
					<SwiperSlide>
						<img
							src={slider1}
							alt=''
						/>
						<p className='relative bottom-12 text-white text-center text-[24px] shadow-md uppercase'>
							Salads
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={slider2}
							alt=''
						/>
						<p className='relative bottom-12 text-white text-center text-[24px] shadow-md uppercase'>
							Pizza
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={slider3}
							alt=''
						/>
						<p className='relative bottom-12 text-white text-center text-[24px] shadow-md uppercase'>
							Soups
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={slider4}
							alt=''
						/>
						<p className='relative bottom-12 text-white text-center text-[24px] shadow-md uppercase'>
							Desserts
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={slider5}
							alt=''
						/>
						<p className='relative bottom-12 text-white text-center text-[24px] shadow-md uppercase'>
							Salad
						</p>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default OnlineOrder;