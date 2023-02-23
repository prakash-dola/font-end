
import './App.css';
// import Face from './Face';

function App() {
  return (
    <>
      <div className="flex h-screen overflow-y-auto bg-blue-900    ">
        <div className='flex  flex-col justify-between items-center w-16 p-4 bg-blue-700 mr-10 '> 
          <div className='flex flex-col h-screen space-y-4 bg-bule-400 items-center    '>
            
            <a>
              <div ><i className="fa-solid fa-image text-4xl  "></i></div></a>
          </div>
          <div className='space-y-4'>
            <a><div ><i className="fa-brands fa-apple mb-5  text-2xl"></i></div></a>
            <a><div ><i className="fa-solid fa-circle-user mb-5 text-2xl"></i></div></a>
            <a><div ><i className="fa-regular fa-calendar-days mb-5 text-2xl"></i></div></a>
            <a><div ><i className="fa-solid fa-trash mb-5 text-2xl"></i></div></a>
            <a><div ><i className="fa-solid fa-trash mb-20 text-2xl"></i></div></a>

          </div>
          <div>
            <a><div ><i className="fa-solid fa-bug mb-5 text-2xl"></i></div></a>
            <a><div ><i className="fa-solid fa-bug text-2xl"></i></div></a>
          </div>
      </div>
        <div className=" border-2  flex-auto overflow-y-auto border-blue-900  flex-col bg-blue-900 flex w-full mr-10 ">
          <div className="flex justify-between w-full items-center  ">

            <div className='flex flex-row  ml-10  items-center  '> <i class="fa-solid fa-magnifying-glass ml-5 border-2 border-blue-400 px-1 py-1 -mr-2 "></i>
              <div className='ml-2  '>
               <button className='relative z-[2] border-1 border-primary'></button>
                <input 
                type="text"
                placeholder='Search in file'
                className='bg-blue-300 px-10 mr-5 border-blue-400 border-2 rounded-sm'/>
              </div>
                </div>
            <div className='flex flex-row mr-10 items-center py-2'>
             <div className=''> <i class="fa-regular fa-bell   text-3xl text-blue-600 mr-3"></i></div><div className='-mt-5'><i class="fa-solid fa-circle -ml-6 -mt-4 text-sm text-red-600  "></i></div>
              <img src="https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80 " className='object-contain h-10  rounded-full mr-1 ' alt=""></img>
              <h2 className='text-white text-lg '>Tanya pena<p className='text-black text-sm -mt-2'> manger</p></h2>
              <i class="fa-solid fa-ellipsis-vertical ml-5  text-3xl text-gray-400"></i>

            </div>







          </div>
          <div className=' flex flex-cols justify-around  items-center mt-10' >
            <div className='box-border rounded-md h-30 w-60 p-4  bg-blue-800 flex flex-cols justify-between items-center '><i class="fa-solid fa-gauge text-2xl text-green-600"></i> <h3 className='text-4xl font-semibold text-white mr-4 ml-2'>234<p className='text-sm font-normal text-black mr-4'>Total Booking</p></h3><h4><i class="fa-solid fa-chevron-up text-green-600"></i><p className='text-sm '>32.5%</p></h4></div>
            <div className='box-border rounded-md h-30 w-60 p-4   bg-blue-800 flex flex-cols justify-between items-center'><i class="fa-solid fa-dharmachakra text-2xl text-red-400"></i><h3 className='text-4xl font-semibold text-white mr-4 ml-2'>123<p className='text-sm font-normal text-black  ml-2'>Tyre Maintenance</p></h3><h4><i class="fa-solid fa-chevron-up text-green-600"></i><p className='text-sm '>17.0%</p></h4></div>
            <div className='box-border rounded-md h-30 w-60 p-4   bg-blue-800 flex flex-cols justify-between items-center'><i class="fa-solid fa-car-battery text-2xl text-red-400"></i><h3 className='text-4xl font-semibold text-white mr-2 ml-2'>70<p className='text-sm font-normal text-black mr-2'> Battery <span>Replacement</span></p></h3><h4><i class="fa-solid fa-chevron-down text-green-600"></i><p className='text-sm'>8.5%</p></h4></div>
            <div className='box-border rounded-md h-30 w-60 p-4   bg-blue-800 flex flex-cols justify-between items-center'><i class="fa-solid fa-baby-carriage text-2xl text-green-600"></i><h3 className='text-4xl font-semibold text-white mr-4 ml-2'>44<p className='text-sm font-normal text-black mr-2'> Wheel Alignment</p></h3><h4><i class="fa-solid fa-chevron-up text-green-600"></i><p className='text-sm'>25.0%</p></h4></div>
          </div>

          <div className='mt-20  flex flex-cols justify-around  items-center '>
            <div className='rounded-full   '> <button className=" italic  space-x-2 px-4 py-2 flex flex-cols justify-between rounded-full bg-gray-400 "><i className="fa-regular rounded-full fa-calendar-days px-2 py-1 text-blue-800 "></i><h1 className='text-white'>January </h1><h2 className='text-black-400'>2020</h2> </button></div>
            <div className='italic text-white text-xl'><i class="fa-solid fa-less-than px-2 text-black py-1 "></i>January O8,2020<i class="fa-solid fa-greater-than text-black px-2 py-1"></i></div>
            <div><button className='inline-block rounded-full text-white bg-sky-400/100 px-4 space-x-2  py-2 items-center'><i class="fa-solid fa-plus mr-2 "></i>ADD NEW</button></div>
          </div>
          <div className='mt-10  flex justify-center scroll-auto '>
            <table class="border-4 rounded-md border-blue-400 ">
              <thead className=" box-border rounded-md ">
                <tr className='bg-blue-900  rounded-md'>
                  <th class=" border border-slate-300"> </th>
                  <th class="border border-slate-300 "> BAY 1</th>
                  <th class="border border-slate-300  ">BAY 2</th>
                  <th class="border border-slate-300 ">BAY 3</th>
                  <th class="border border-slate-300 "> BAY 4</th>
                  <th class="border border-slate-300 ">BAY 5</th>
                  <th class="border border-slate-300 ">BAY 6</th>


                </tr>
              </thead>
              <tbody  >
                <tr className='border border-slate-300 bg-blue-900  '>
                  <td class=" border border-slate-300  " >8 AM</td>
                  <td class="border border-slate-300 px-2 py-2">
                    <div className='box-border rounded-md h-30 w-30 p-4 inline-block bg-blue-400  '><button className='inline-block rounded-full text-white bg-green-400 text-sm px-6 PY-0.5 items-center'>PAID</button><h1 className='mt-6 text-white'>544MA1<p className='text-sm text-black'>Mr.Shane Blacks</p></h1>
                      <div class="flex items-center">

                        <div class=" w-full h-2 mt-2 rounded bg-gray-100">
                          <div class=" h-2  rounded bg-pink-400 w-1/2">

                          </div>
                        </div>
                      </div>
                    </div>
                  </td> <td className='border border-slate-300 '><hr className=''></hr></td>
                  <td className='border border-slate-300 px-2 py-2'><div className='box-border rounded-md h-30 w-30 p-4 inline-block bg-blue-400 '><button className='inline-block rounded-full text-white bg-green-400 text-sm px-6  PY-0.5 items-center'>PAID</button><h1 className='mt-6 text-white'>1964CA<p className='text-sm text-black'>Mrs.Esther Flores</p></h1>

                    <div class="flex items-center">

                      <div class=" w-full h-2 mt-2 rounded bg-gray-100">
                        <div class="h-2  rounded bg-yellow-500 w-3/4">

                        </div>
                      </div>

                    </div> </div></td>
                  <td className='border border-slate-300 '><hr>
                  </hr></td>
                  <td className='border border-slate-300 px-2 py-2'> <div className='box-border rounded-md h-30 w-30 p-4 inline-block bg-blue-400  '><button className='inline-block rounded-full text-white bg-green-400 text-sm px-6  PY-0.5 items-center'>PAID</button><h1 className='mt-6 text-white'>1GY1IF<p className='text-sm text-black'>Ms. hills roobert</p></h1>
                    <div class="flex items-center">

                      <div class=" w-full h-2 mt-2 rounded bg-gray-100">
                        <div class=" h-2   rounded bg-yellow-200 w-full">

                        </div>

                      </div>
                    </div></div></td>
                  <td className='border border-slate-300 '><hr></hr><div><hr></hr></div></td>
                </tr>






                <tr className='bg-blue-900'>
                  <td class=" border border-slate-300 ">9 AM</td>
                  <td className='border border-slate-300 '><hr></hr>

                  </td>
                  <td class="border border-slate-300 px-2 py-2"><div className='box-border rounded-md h-30 w-30 p-4 inline-block bg-blue-400  '><button className='inline-block rounded-full text-white bg-red-400 text-sm px-6  PY-0.5 items-center'>UNPAID</button><h1 className='mt-6 text-white'>1391TX<p className='text-sm text-black'>Mr.Mitchell </p></h1>
                    <div class="flex items-center">

                      <div class=" w-full h-2 mt-2 rounded bg-gray-100">
                        <div class=" h-2  rounded bg-rose-500 w-full">

                        </div>
                      </div>
                    </div> </div></td>
                  <td className=''><hr></hr></td>
                  <td className='border border-slate-300 px-2 py-2 bg-blue-900 '><div className='box-border rounded-md h-30 w-30 px-6 py-4 inline-block bg-blue-400 '><button className='inline-block rounded-full text-white bg-green-400 text-sm px-6  PY-0.5 items-center'>PAID</button><h1 className='mt-6 text-white'>1FB918<p className='text-sm text-black'>Mr.Michael Hill</p></h1>

                    <div class="flex items-center">

                      <div class=" w-full h-2 mt-2 rounded bg-gray-100">
                        <div class="h-2 rounded bg-red-600 w-1/2">

                        </div>

                      </div>
                    </div></div></td>
                  <td className='border border-slate-300 '><hr></hr></td>
                  <td className='border border-slate-300 '><hr></hr></td>

                </tr>
                
                <tr className='bg-blue-900'>
                  
                  <td class="border border-slate-300  ">10 AM</td>
                  <td class="border border-slate-300  px-2 py-2 ">
                    <div className='box-border rounded-md h-30 w-30 p-4 inline-block bg-blue-400  '> <button className='inline-block rounded-full text-white bg-red-400 text-sm px-6  PY-0.5 items-center'>UNPAID</button><h1 className='mt-6 text-white'>5IL115<p className='text-sm text-black'>Mr.Roberts </p></h1>
                      <div class="flex items-center">

                        <div class=" w-full h-2 mt-2 rounded bg-gray-100">
                          <div class="h-2  rounded bg-blue-600 w-full">

                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="border border-slate-300 "><hr></hr></td>
                  <td class="border border-slate-300 "><hr></hr></td>
                  <td class="border border-slate-300 "><hr></hr></td>
                  <td class="border border-slate-300 px-2 py-2 ">
                    <div className='box-border rounded-md h-30 w-30 p-4 inline-block bg-blue-400  '> <button className='inline-block rounded-full text-white bg-red-400 text-sm px-6  PY-0.5 items-center'>UNPAID</button><h1 className='mt-6 text-white'>1641AZ<p className='text-sm text-black'>Mr.Williamson</p></h1>
                      <div class="flex items-center">

                        <div class=" w-full  h-2 mt-2 rounded  bg-gray-100">
                          <div class="  h-2 rounded bg-red-500 w-3/4   ">


                          </div>
                        </div>
                      </div></div></td>
                  <td class="border border-slate-300 "><hr></hr></td>

                </tr>
                <tr className='bg-blue-900'>
                  <td class="border border-slate-300  ">11 AM</td>
                  <td class="border border-slate-300 "><hr></hr>

                  </td>
                  
                  <td class="border border-slate-300 "><hr></hr></td>
                  
                  <td class="border border-slate-300 "><hr></hr></td>
                  <td class="border border-slate-300 px-2 py-2 ">
                    <div className='box-border rounded-md h-30 w-30 px-6 py-4 inline-block bg-blue-400  '><button className='inline-block rounded-full text-white bg-green-400 text-sm px-6  PY-0.5 items-center'>PAID</button><h1 className='mt-6 text-white'>1GY1IF<p className='text-sm text-black'>Ms.Diannes Hil</p></h1>
                      <div class="flex items-center">

                        <div class=" w-full h-2 mt-2 rounded bg-gray-100">
                          <div class=" h-2   rounded bg-yellow-200 w-full">

                          </div>

                        </div>
                      </div></div>
                  </td>
                  <td class="border border-slate-300 "><hr></hr></td>
                  <td class="border border-slate-300 "><hr></hr></td>


                </tr>
                <tr className='bg-blue-900'>
                  <td class=" border border-slate-300 ">12 AM</td>

                  <td class="border border-slate-300 "></td>
                  <td class="border border-slate-300 "></td>
                  <td class="border border-slate-300 "></td>
                  <td class="border border-slate-300 "></td>
                  <td class="border border-slate-300 "></td>
                  <td class="border border-slate-300 "></td>


                </tr>






              </tbody>
            </table>
          </div>
          
    

        </div>


      </div>



    </>
  );
}

export default App;
