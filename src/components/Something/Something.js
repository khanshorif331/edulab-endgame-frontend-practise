import React from 'react'
import { Autoplay, FreeMode, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
	FaCode,
	FaDesktop,
	FaMobileAlt,
	FaCamera,
	FaFile,
} from 'react-icons/fa'

// import '../styles.css'
// import './something.css'
// import '.Something.css'

const Something = () => {
	return (
		<div className='h-[400px] p-6 md:px-16'>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				freeMode={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
				modules={[Autoplay, FreeMode, Pagination]}
				className='mySwiper'
			>
				<SwiperSlide>
					<div className='p-6 text-white border-2 border-purple-500 '>
						<FaCode className='h-10 w-10 text-purple-500 mx-auto' />
						<p className='text-center font-bold text-2xl'>web dev</p>
						<p className='mt-2'>
							I develop website.I create high performance website with
							blazing fast speed.
						</p>
					</div>
				</SwiperSlide>
				{/* slider-2 */}
				<SwiperSlide>
					<div className='p-6 text-white border-2 border-purple-500 '>
						<FaDesktop className='h-10 w-10 text-purple-500  mx-auto' />
						<p className='text-center font-bold text-2xl'>web design</p>
						<p className='mt-2'>
							I develop website.I create high performance website with
							blazing fast speed.
						</p>
					</div>
				</SwiperSlide>
				{/* slider-3 */}
				<SwiperSlide>
					<div className='p-6 text-white border-2 border-purple-500 '>
						<FaMobileAlt className='h-10 w-10 text-purple-500  mx-auto' />
						<p className='text-center font-bold text-2xl'>app dev</p>
						<p className='mt-2'>
							I develop website.I create high performance website with
							blazing fast speed.
						</p>
					</div>
				</SwiperSlide>
				{/* slide-4 */}
				<SwiperSlide>
					<div className='p-6 text-white border-2 border-purple-500 '>
						<FaCamera className='h-10 w-10 text-purple-500  mx-auto' />
						<p className='text-center font-bold text-2xl'>photography</p>
						<p className='mt-2'>
							I develop website.I create high performance website with
							blazing fast speed.
						</p>
					</div>
				</SwiperSlide>
				{/* slide-5 */}
				<SwiperSlide>
					<div className='p-6 text-white border-2 border-purple-500 '>
						<FaFile className='h-10 w-10 text-purple-500  mx-auto' />
						<p className='text-center font-bold text-2xl'>
							brand identity
						</p>
						<p className='mt-2'>
							I develop website.I create high performance website with
							blazing fast speed.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Something
