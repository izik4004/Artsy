import React from 'react'

const MarketPlace = () => {
  return (
    <section className='container mx-auto flex gap-10 items-center'>
        <div className='w-1/4 py-4'>
          <input type="text" placeholder='Search' />
        </div>
        <div className='w-3/4'>
            <div className='shadow-lg py-4 px-4'>
                <h4>See 1-6 of 15 results</h4>

            </div>
        </div>
    </section>
  )
}

export default MarketPlace