import React, { useState } from 'react';
import Logo from './../assets/netflix.svg';
import Bg from './../assets/bg.jpg';
import Card from './Card';
import Row from './Row';
import { trendingList, cardData, faqData } from './Data';

function Home() { 

  const [active, setActive]= useState(null)

  return (
    <div>
      <div className="relative h-screen bg-black py-10 px-20 max-sm:px-7">
        
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.7)), url(${Bg})`,
            opacity: 0.3
          }}
          className="absolute inset-0 bg-cover bg-center z-0"
        />

      
        <div className="relative z-10">
          <div className="flex flex-row justify-between items-center">
            <img className="w-[150px]" src={Logo} alt="Logo" />
            <button className="text-white font-bold px-4 py-2 rounded-md bg-red-600 hover:bg-red-700">
              Sign In
            </button>
          </div>

          <div className="mt-20 grow">
            <h1 className="text-white font-bold text-6xl text-center">
              Unlimited movies, TV<br />shows, and more
            </h1>
            <p className="text-center text-[#e0e0e0] text-xl mt-4 font-medium">
              Starts at USD 2.99. Cancel anytime.
            </p>
            <p className="text-center text-[#e0e0e0] text-xl mt-8 font-medium">
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            <div className="flex justify-center mt-6 gap-2">
              <input
                placeholder="Email address"
                type="text"
                className="w-[400px] h-[50px] text-white px-5 bg-transparent border border-gray-500 rounded-md focus:outline-none"
              />
              <button className="text-white text-xl font-bold h-[50px] w-[200px] ml-0.5 bg-red-600 hover:bg-red-700 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

 
      <div className="bg-black py-10 px-20 max-sm:px-7">
        <p className="text-white text-2xl font-medium ">Trending Now</p>
        <div className='flex flex-row justify-between mt-6 px-10 max-sm:overflow-scroll max-sm:gap-7 max-sm:justify-start max-sm:px-0'>
        {trendingList.map((item)=>(<img key={item} className='rounded-xl' src={item}/>))}
        </div>
        <p className="text-white text-2xl mt-20 font-medium ">More Reasons to Join</p>
        <div className='mt-6 flex flex-row justify-center flex-wrap gap-10'>
        {cardData.map((item, index)=>(<Card key={index} data={item}/>))}
        </div>
      </div>


      <div className="bg-black py-10 px-20 max-sm:px-7">
        <p className="text-white text-2xl font-medium ">Frequently Asked Questions</p>
        <div className='mt-6 flex gap-3 flex-col'>
            {faqData.map((item, index) => (
              <Row
                isActive={index === active} 
                key={index}
                data={item}
                onClick={() => { index === active?setActive(null): setActive(index); }} 
              />
            ))}
        </div>
      </div>
      <div className="bg-black px-20 max-sm:px-7">
          <p className="text-center text-[#e0e0e0] text-xl pt-5 font-medium">
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            <div className="flex justify-center mt-6 gap-2">
              <input
                placeholder="Email address"
                type="text"
                className="w-[600px] h-[50px] text-white px-5 bg-transparent border border-gray-500 rounded-md focus:outline-none"
              />
              <button className="text-white text-xl font-bold h-[50px] w-[200px] ml-0.5 bg-red-600 hover:bg-red-700 rounded-md">
                Get Started
              </button>
            </div>

            <div className='flex flex-col gap-3 px-20 max-sm:px-7 mt-15' style={{color:'rgba(255, 255, 255, 0.7)'}}>
                <div><a href="#">Questions? Contact us.</a></div>
                <div className='flex flex-row justify-between mt-7 underline'>
                  <div className='flex flex-col gap-2'>
                    <a href="#">FAQ</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Privacy</a>
                    <a href="#">Speed Test</a>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <a href="#">Help Center</a>
                    <a href="#">Jobs</a>
                    <a href="#">Cookie Preferences</a>
                    <a href="#">Legal Notices</a>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <a href="#">Account</a>
                    <a href="#">Ways to Watch</a>
                    <a href="#">Corporate Information</a>
                    <a href="#">Only on Netflix</a>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <a href="#">Media Center</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Contact Us</a>
                  </div>
                </div>
                <div className='mt-5'>
                <select className='border text-white border-gray-400 px-5 rounded-[5px] py-1'>
                  <option>English</option>
                </select>

                </div>
                
              </div>
              <div className='px-20 max-sm:px-7 py-10'><p style={{color:'rgba(255, 255, 255, 0.7)'}} className='text-white'>Netflix</p></div>
              

      </div>
    </div>
  );
}

export default Home;
