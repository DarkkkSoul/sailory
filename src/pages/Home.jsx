import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { auth } from '../config/firebase'
import {  Heart, Pencil, Trash2 } from 'lucide-react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function Home() {

  const [destination, setDestination] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [activities, setActivities] = useState('')
  const [tripType, setTripType] = useState('leisure')
  const [isFavourite, setIsFavourite] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'itineraries'), {
        userId: auth?.currentUser?.uid,
        destination,
        startDate,
        endDate,
        activities,
        tripType,
        isFavourite,
        createdAt: new Date(),
      });

      getItineraries();

      setTimeout(() => {
        setDestination('')
        setStartDate('')
        setEndDate('')
        setActivities('')
        setTripType('leisure');
      }, 1000);

      console.log('Document successfully written!', docRef.id);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  if (errorMessage) {
    setTimeout(() => {
      setErrorMessage('');
    }, 5000);
  }

  const [itineraries, setItineraries] = useState([]);
  const getItineraries = async () => {
    const data = await getDocs(collection(db, 'itineraries'))
    const filteredData = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setItineraries(filteredData)
  }

  useEffect(() => {
    getItineraries();
  }, []);

  const deleteItinerary = async (id) =>{
    try {
      await deleteDoc(doc(db,'itineraries', id));
      getItineraries();
    } catch (error) {
      console.log(error);
    }
  }

  const filteredItineraries = itineraries.filter((item) => {
    const tabOk = filter === 'all' ? true : !!item.isFavourite;
    const q = query.trim().toLowerCase();
    const queryOk = q === ''
      ? true
      : (item.destination?.toLowerCase().includes(q) || item.tripType?.toLowerCase().includes(q));
    return tabOk && queryOk;
  });

  return (
    <>
    <Header />
    <div className="min-h-[100vh] bg-gradient-to-br from-slate-50 via-teal-50 to-sky-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg border border-slate-100 p-6">
          <h2 className="text-2xl font-semibold text-slate-800 mb-1">Create itinerary</h2>
          <p className="text-slate-500 text-sm mb-6">Plan your trip details below.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="destination" className="text-sm text-slate-600">Destination</label>
              <input
                id="destination"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g., Paris, France"
                required
                className="px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 placeholder:text-slate-400 outline-none focus:bg-white focus:border-teal-400 focus:ring-4 focus:ring-teal-200 transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="startDate" className="text-sm text-slate-600">Start date</label>
                <input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  className="px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-teal-400 focus:ring-4 focus:ring-teal-200 transition"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="endDate" className="text-sm text-slate-600">End date</label>
                <input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  className="px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-teal-400 focus:ring-4 focus:ring-teal-200 transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="activities" className="text-sm text-slate-600">Activities</label>
              <textarea
                id="activities"
                value={activities}
                onChange={(e) => setActivities(e.target.value)}
                placeholder="e.g., Louvre, Seine cruise, Eiffel Tower, cafes..."
                rows={3}
                className="px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 placeholder:text-slate-400 outline-none focus:bg-white focus:border-teal-400 focus:ring-4 focus:ring-teal-200 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="tripType" className="text-sm text-slate-600">Type of trip</label>
              <select
                id="tripType"
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-teal-400 focus:ring-4 focus:ring-teal-200 transition"
              >
                <option value="work">Work</option>
                <option value="family">Family</option>
                <option value="adventure">Adventure</option>
                <option value="leisure">Leisure</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" checked={isFavourite} onChange={(e) => setIsFavourite(e.target.checked)}/>
              <label htmlFor="isFavourite" className="text-sm text-slate-600">Add to favorites</label>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg font-semibold text-teal-900 border border-teal-300 bg-gradient-to-r from-teal-200 to-sky-200 hover:from-teal-300 hover:to-sky-300 active:from-teal-200 active:to-sky-200 transition shadow-sm"
            >
              Add itinerary
            </button>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </form>
        </div>

        <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg border border-slate-100 p-6">
          <h2 className="text-2xl font-semibold text-slate-800 mb-1">Your itineraries</h2>
          <p className="text-slate-500 text-sm mb-4">All itineraries you create will appear here.</p>

          <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="inline-flex rounded-lg border border-slate-200 overflow-hidden w-fit">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-sm font-medium transition ${filter === 'all' ? 'bg-teal-100 text-teal-900' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setFilter('favourite')}
                className={`px-3 py-1.5 text-sm font-medium transition border-l border-slate-200 ${filter === 'favourite' ? 'bg-teal-100 text-teal-900' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
              >
                Favourite
              </button>
            </div>
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by destination or trip type"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 placeholder:text-slate-400 outline-none focus:bg-white focus:border-teal-400 focus:ring-4 focus:ring-teal-200 transition"
              />
            </div>
          </div>

          {filteredItineraries.length === 0 ? (
            <div className="text-slate-500 text-sm">No itineraries yet. Add one using the form.</div>
          ) : (
            <ul className="space-y-3">
              {filteredItineraries.map((item) => (
                <li
                  key={item.id}
                  className="border border-slate-200 rounded-lg p-3 hover:border-teal-300 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-y-1.5">
                      <div className="text-slate-800 flex items-center gap-x-2.5">
                        <h3 className='text-xl font-semibold tracking-normal'>{item.destination}</h3>
                        <p className="text-xs px-2 py-0.5 rounded-full bg-slate-200 border border-slate-200 text-slate-950 tracking-wide align-middle">
                          {item.tripType}
                        </p>
                        {item.isFavourite && (
                          <Heart className='w-4 text-red-600 stroke-3 fill-red-600'/>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 tracking-wider">
                        {item.startDate} → {item.endDate}
                      </p>
                      {item.activities && (
                        <p className="text-sm text-slate-700">
                          {item.activities}
                        </p>  
                      )}
                    </div>
                    <div>
                      <Trash2 className='w-4 text-gray-600 cursor-pointer hover:text-red-400' onClick={()=>deleteItinerary(item.id)}/>
                      
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      
      </div>

      <div>
        <Navbar />
      </div>
    </div>
    </>
  )
}

export default Home