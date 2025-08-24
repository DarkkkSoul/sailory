import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Sparkles, Info } from 'lucide-react'

function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur border border-slate-200 shadow-lg shadow-slate-200/60 rounded-full px-6 py-2.5">
        <ul className="flex items-center gap-6">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${isActive ? 'text-teal-700' : 'text-slate-600 hover:text-slate-800'}`
              }
            >
              <Home className="w-5 h-5" />
              <span className="mt-0.5">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/for-you"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${isActive ? 'text-teal-700' : 'text-slate-600 hover:text-slate-800'}`
              }
            >
              <Sparkles className="w-5 h-5" />
              <span className="mt-0.5">For You</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${isActive ? 'text-teal-700' : 'text-slate-600 hover:text-slate-800'}`
              }
            >
              <Info className="w-5 h-5" />
              <span className="mt-0.5">About Us</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar