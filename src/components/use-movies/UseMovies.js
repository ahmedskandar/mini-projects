import React from 'react'
import SectionTitle from '../UI/SectionTitle'
import Header from './Header'
import Movie from './Movie'

const UseMovies = () => {
  return (
    <section className="mx-3 lg:mx-6">
      <SectionTitle>UseMovies</SectionTitle>
      <Header />
      <Movie />
    </section>
  );
}

export default UseMovies