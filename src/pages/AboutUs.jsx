import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function AboutUs() {
  const reviews = [
    {
      name: 'Ava Thompson',
      text: 'Travel Tailor made planning so effortless. I loved how I could tweak dates, budgets and activities to fit my vibe.',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
    },
    {
      name: 'Rahul Verma',
      text: 'Personalized recommendations were spot on. The suggested itineraries saved me hours!',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
    },
    {
      name: 'Mina Park',
      text: 'Clean UI, easy to use, and the budgets were realistic. Adding favourites was super handy.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-[100vh] bg-gradient-to-br from-slate-50 via-teal-50 to-sky-50 p-6">
        <div className="max-w-5xl mx-auto">
          <section className="bg-white/90 backdrop-blur rounded-xl shadow-lg border border-slate-100 p-6">
            <h1 className="text-3xl font-semibold text-slate-900">About Travel Tailor</h1>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Travel Tailor is a modern travel planning web app that helps you design trips your way. Create
              itineraries, set dates, pick activities, and estimate budgets — all in one place. Our goal is to
              make planning delightful, fast, and flexible.
            </p>

            <h2 className="mt-6 text-xl font-semibold text-slate-900">What makes us unique?</h2>
            <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
              <li>Customizable itineraries with your preferred destinations, dates, and activities</li>
              <li>Personalized recommendations curated "For You" based on interests</li>
              <li>Clear budget ranges to plan smarter and avoid surprises</li>
              <li>Save favourites and iterate anytime as your plans evolve</li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold text-slate-900">Services</h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Itinerary Builder</h3>
                <p className="text-sm text-slate-600 mt-1">Craft day-by-day plans with activities you love.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Budget Estimator</h3>
                <p className="text-sm text-slate-600 mt-1">Get realistic cost ranges for destinations.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Personalized Picks</h3>
                <p className="text-sm text-slate-600 mt-1">Discover recommendations tailored to you.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Favourites & Reviews</h3>
                <p className="text-sm text-slate-600 mt-1">Save trips and read what others are saying.</p>
              </div>
            </div>
          </section>

          <section className="mt-6 bg-white/90 backdrop-blur rounded-xl shadow-lg border border-slate-100 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">User Reviews</h2>
              <span className="text-xs text-slate-500">Verified by our community</span>
            </div>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((r, idx) => (
                <li key={idx} className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-3">
                    <img src={r.avatar} alt={r.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                    <div>
                      <div className="font-semibold text-slate-900">{r.name}</div>
                      <div className="text-xs text-slate-500">Traveler</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">{r.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <Navbar />
      </div>
    </>
  )
}

export default AboutUs
