import React from 'react'

function TravelCard({ destination }) {
  const { name, country, cost, highlights, imageUrl } = destination

  return (
    <div className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <img
        src={imageUrl}
        className="h-28 w-full object-cover"
      />

      <div className="p-4">
        <div className="mb-2 text-2xl font-semibold text-gray-800">
          {name}
          <span className="text-sm text-gray-600 font-normal">, {country}</span>
        </div>
        <div className="mb-3">
          <p className="text-sm text-gray-500">Top places to visit</p>
          <ul className="mt-1 list-disc list-inside text-sm text-gray-700 space-y-1">
            {highlights?.map((place, i) => (
              <li key={i}>{place}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">Estimated cost</div>
          <div className="text-base font-semibold text-gray-900">{cost}</div>
        </div>
      </div>
    </div>
  )
}

export default TravelCard
