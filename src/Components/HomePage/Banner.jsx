import React from 'react';
import { IoAddOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className='min-h-[70vh] text-center space-y-6 pt-[50px] bg-[#F8FAFC] mt-0.5'>
            <h1 className='font-bold text-5xl'>Friends to keep close in your life</h1>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br />
                relationships that matter most.</p>
            <div className='flex justify-center items-center'>
                <button className='bg-[#244D3F] text-white font-semibold px-4 py-2 flex items-center gap-2 rounded'>
                    <IoAddOutline className="text-xl" />
                    Add a Friend
                </button>
            </div>


    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto w-10/12'>

  {/* Card 1 */}
  <div className='bg-white shadow-sm rounded-lg p-6 text-center'>
    <h2 className='text-4xl font-bold text-[#244D3F]'>10</h2>
    <p className='text-gray-500 mt-2'>Total Friends</p>
  </div>

  {/* Card 2 */}
  <div className='bg-white shadow-sm rounded-lg p-6 text-center'>
    <h2 className='text-4xl font-bold text-[#244D3F]'>3</h2>
    <p className='text-gray-500 mt-2'>On Track</p>
  </div>

  {/* Card 3 */}
  <div className='bg-white shadow-sm rounded-lg p-6 text-center'>
    <h2 className='text-4xl font-bold text-[#244D3F]'>6</h2>
    <p className='text-gray-500 mt-2'>Need Attention</p>
  </div>

  {/* Card 4 */}
  <div className='bg-white shadow-sm rounded-lg p-6 text-center'>
    <h2 className='text-4xl font-bold text-[#244D3F]'>12</h2>
    <p className='text-gray-500 mt-2'>Interactions This Month</p>
  </div>
</div>
<div className='border-t border-[#E9E9E9] mt-10 w-10/12 mx-auto'>

</div>

</div>
   

  

       
    );
};

export default Banner;