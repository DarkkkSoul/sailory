import React from 'react'
import Navbar from '../components/Navbar'
import TravelCard from '../components/TravelCard'
import Header from '../components/Header'

const destinations = [
  {
    name: 'Kyoto',
    country: 'Japan',
    cost: '$1,500 - $2,200',
    highlights: ['Fushimi Inari Shrine', 'Arashiyama Bamboo Grove', 'Kiyomizu-dera'],
    imageUrl: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
  },
  {
    name: 'Paris',
    country: 'France',
    cost: '$1,800 - $2,800',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Montmartre'],
    imageUrl: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    cost: '$1,200 - $2,000',
    highlights: ['Uluwatu Temple', 'Tegallalang Rice Terrace', 'Ubud Monkey Forest'],
    imageUrl: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
  },
  {
    name: 'Rome',
    country: 'Italy',
    cost: '$1,600 - $2,400',
    highlights: ['Colosseum', 'Trevi Fountain', 'Vatican City'],
    imageUrl: 'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
  },
  {
    name: 'Reykjavík',
    country: 'Iceland',
    cost: '$2,200 - $3,200',
    highlights: ['Blue Lagoon', 'Golden Circle', 'Northern Lights'],
    imageUrl: 'https://images.pexels.com/photos/3727251/pexels-photo-3727251.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
  },
  {
    name: 'Cape Town',
    country: 'South Africa',
    cost: '$1,400 - $2,100',
    highlights: ['Table Mountain', 'Cape Point', 'Boulders Beach'],
    imageUrl: 'https://images.pexels.com/photos/459467/pexels-photo-459467.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
  },
]

function ForYou() {
  return (
    <>
      <Header />
      <div className="min-h-[100vh] bg-gradient-to-br from-slate-50 via-teal-50 to-sky-50 p-6">
        <div className="px-6 pt-6">
          <h1 className="text-2xl font-semibold text-gray-900">Destinations For You</h1>
          <p className="mt-1 text-sm text-gray-600">Explore places to visit which are personalised for you.</p>
        </div>

        <div className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((d) => (
            <TravelCard key={`${d.name}`} destination={d} />
          ))}
        </div>

        <Navbar />
      </div>
    </>
  )
}

export default ForYou