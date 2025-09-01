import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchUrl, rowID}) => {
        const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchUrl).then((res)=>{
            setMovies(res.data.results)
        })
    }, [fetchUrl])

    console.log(movies)

     const slideLeft = () => {
        var slider=document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft-100;
                console.log('slide left');

    }   ;

     const slideRight = () => {
        var slider=document.getElementById('slider' + rowId);
        slider.scrollRight = slider.scrollRight+100;
        console.log('slide right');
    }   ;

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>
        {title}
        <div className='flex relative items-center group'>
            <MdChevronLeft
            onClick={slideLeft} className='text-black left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'> 
                {movies.map((item, id)=>(
                   <Movie key={id} item={item}/>
                ))}
            </div>
                        <MdChevronRight onClick={slideRight} className='text-black right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>

        </div>
        </h2>
        </>
  )
}

export default Row