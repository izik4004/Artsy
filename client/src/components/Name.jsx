import React from 'react'

const Name = ({setOpen}) => {

    const addName = (e) => {
        e.preventDefault();
        const name = JSON.stringify(e.target.name.value);
        localStorage.setItem("name", name);
        setOpen(false)
      };

  return (

<main id="content" role="main" className="w-full max-w-md mx-auto">
    <div className=" bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 sm:p-7">
       

        <div className="">
          <form onSubmit={addName}>
            <div className="gap-y-4">
            <small className=' italic'>To place a bid you need to enter your name</small>
                <label for="email" className="block text-sm font-bold ml-1 my-2 dark:text-white">Enter your Name</label>
                <div className="relative flex gap-4">
                   
                  <input type="text" id="name" name="name" className="py-2 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" placeholder='Enter your name'/>
                <button className='px-4 py-2 bg-blue text-white text-sm'>Save</button>
                </div>
                
              
            </div>
          </form>
        </div>
      </div>
    </div>

  
  </main>
  )
}

export default Name