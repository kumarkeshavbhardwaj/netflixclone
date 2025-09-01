import React from 'react'
import Main from './Main'
import Row from './Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
    <Main></Main>
    <Row id='1' title='Horror' fetchUrl ={requests.requestHorror}/>
    <Row id='2'  title='Popular' fetchUrl ={requests.requestPopular}/>
    <Row id='3'  title='Top Rated' fetchUrl ={requests.requestTopRated}/>
    <Row id='4'  title='Trending' fetchUrl ={requests.requestTrending}/>
    <Row id='5'  title='Up Coming' fetchUrl ={requests.requestUpcoming}/>

    </>
  )
}

export default Home