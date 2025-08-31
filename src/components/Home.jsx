import React from 'react'
import Main from './Main'
import Row from './Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
    <Main></Main>
    <Row title='Horror' fetchUrl ={requests.requestHorror}/>
        <Row title='Popular' fetchUrl ={requests.requestPopular}/>
    <Row title='Top Rated' fetchUrl ={requests.requestTopRated}/>
    <Row title='Trending' fetchUrl ={requests.requestTrending}/>
    <Row title='Up Coming' fetchUrl ={requests.requestUpcoming}/>

    </>
  )
}

export default Home