import React from "react";
import {useState} from "react";
import bg from '../../../assets/img/bg.webp';
const Hero = () => {
	return (
		<div>
			<div
				className='px-3 py-5 mb-0 text-center text-white d-none d-sm-flex '
				style={{
					backgroundSize: 'cover',
					backgroundImage: `url(${bg})`,
					filter: 'brightness(80%)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					height: '100vh',
					backgroundPosition: 'center',
				}}
			>
			</div>
			<div
				className='px-3 py-5 mb-0 text-center text-white d-none d-md-flex'
				style={{
					backgroundSize: 'cover',
					backgroundImage: `url(${bg})`,
					display: 'flex',
					// filter: 'brightness(80%)',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					height: '100vh',
					backgroundPosition: 'center',
				}}
			>
			</div>
		</div>
	);
};

export default Hero;
