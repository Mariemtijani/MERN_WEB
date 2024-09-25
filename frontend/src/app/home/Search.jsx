import React from 'react'

export default function Search() {
  return (
    <div className='pt-4'>
      <div class="flex p-1 bg-white rounded-lg ">
      <button class="px-4 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Search</button>

            <input type="text" placeholder="Search" class="flex-grow px-4 py-2 rounded-l-lg border border-r-0 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
        </div>
    </div>
  )
}
