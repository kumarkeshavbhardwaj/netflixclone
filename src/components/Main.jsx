import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {
    const  [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=>{
        axios.get(requests.requestPopular).then((res)=>{
            setMovies(res.data.results)


        })

    }, [])

    const truncateString = (str, num) => {
        if(str?.length > num) {
            return str.slice(0, num) + '...'
        } 
        else {
            return str
        }
    }

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={''}></img>
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie.title}</h1>
                <div className='my-4'></div>
            <div>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
                    Play
                </button>
                <button className='border text-white ml-4 border-gray-300 py-2 px-5'>
                    Watch Later
                </button>
            </div>
            <p className='mt-5 text-gray-400 text-sm'>
                Released: {movie.release_date}
            </p>
             <p className='text-gray-200 w-full md:max-w-[70%] xl:max-w-[35%] lg:max-w-[50%]'>
                {truncateString(movie.overview, 100)}
            </p>

</div>
        </div>
    </div>
  )
}

export default Main