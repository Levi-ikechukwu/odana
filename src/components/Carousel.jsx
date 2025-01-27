// Carousel.js
import React, { useState } from 'react';
import { GET_STARTED } from './data';
import '../index.css'; // Ensure this is the correct path to your CSS file
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === GET_STARTED.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? GET_STARTED.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel-container relative w-4/5 m-auto translate-y-[15%]">
            <div className="carousel-slide rid place-items-center overflow-hidden bg-lime-00">
                {GET_STARTED.map((item, index) => (
                    <div
                        key={item.id}
                        className={`w-full flex-shrink-0 transition-transform duration-300 transform ${
                            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                        } grid place-items-center`}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        <img
                            src={item.img}
                            alt={item.title || 'Slide image'}
                            className="carousel-image w-full max-h-72 object-cover"
                        />
                        {item.title && <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>}
                        {item.content && <p className="mt-2 text-gray-600">{item.content}</p>}
                    </div>
                ))}
            </div>
            {currentIndex > 0 && (
                <button
                    onClick={prevSlide}
                    className="absolute -bottom-[70px] left-2 transform -translate-y-1/2 bg-[#299B56] p-2 rounded-full shadow-lg"
                >
                    <IoIosArrowBack className='text-white text-[20px]'/>
                </button>
            )}
            <Link to={currentIndex === GET_STARTED.length - 1 ? '/signup-as' : ''}
                onClick={nextSlide}
                className="absolute -bottom-[70px] right-2 transform -translate-y-1/2 bg-[#299B56] p-2 rounded-full shadow-lg"
            >
                <IoIosArrowForward className='text-white text-[20px]'/>
            </Link>
            <div className="absolute -bottom-[80px] left-0 right-0 flex justify-center space-x-2">
                {GET_STARTED.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                            index === currentIndex ? 'bg-[#299B56]' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
