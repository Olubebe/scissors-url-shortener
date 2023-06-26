import React from 'react'

const HeroAnalytics = () => {
  return (
    <div className='px-10 py-5'>
        <div className='flex flex-col md:flex-row justify-between space-y-3 '>
         <div className='flex flex-col'>
<h2 className='text-3xl'>One Stop. </h2>
<h2 className='text-3xl'>One <span className='text-blue-700'>Possibilities</span>.</h2>
         </div>
         <div className='flex gap-10 '>
            <div>
                <h2 className='text-2xl'>3M</h2>
                <p className='w-24 text-sm'>Active Users</p>
            </div>
            <div>
                <h2 className='text-2xl'>60M</h2>
                <p className='w-24 text-sm'>Links & codes created</p>
            </div>
            <div>
                <h2 className='text-2xl'>1B</h2>
                <p className='w-24 text-sm'>Clicked & Scanned connections</p>
            </div>
            <div>
                <h2 className='text-2xl'>300k</h2>
                <p className='w-24 text-sm'>App Integrations</p>
            </div>
         </div>
        </div>
    </div>
  )
}

export default HeroAnalytics