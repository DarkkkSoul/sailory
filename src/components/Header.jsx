import { Sailboat } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-teal-600/30 bg-gradient-to-r from-teal-600 via-sky-700 to-teal-500 text-white shadow-sm">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="h-14 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Sailboat/>
                        <span className="text-xl font-bold tracking-tight text-white">
                            Sailory
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/80">
                        {/* Placeholder for future actions */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header