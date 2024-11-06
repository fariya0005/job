import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="mb-10">
            <Carousel className="w-full max-w-3xl mx-auto">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className="flex justify-center items-center p-4 md:basis-1/2 lg:basis-1/3">
                                <Button 
                                    onClick={() => searchJobHandler(cat)} 
                                    variant="outline" 
                                    className="rounded-full text-base font-medium bg-gray-100 shadow-sm hover:bg-gradient-to-r from-blue-600 to-green-500 hover:text-white transition-all duration-300 py-3 px-6 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                >
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <div className="flex justify-between mt-4">
                    <CarouselPrevious className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 shadow-sm" />
                    <CarouselNext className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 shadow-sm" />
                </div>
            </Carousel>
        </div>
    )
}

export default CategoryCarousel;