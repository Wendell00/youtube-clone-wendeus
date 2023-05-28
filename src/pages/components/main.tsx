import React, { useState, useEffect } from 'react';


export const MainYT = () => {
  return (
    <>
        <div className='main mt-[56px] text-black bg-[#0F0F0F] pl-8 pt-1 h-screen min-[1330px]:ml-[250px] min-[1730px]:mx-auto min-[1730px]:w-[1284px]'>
           <div className="w-100 h-[150px] flex justify-between">
              <div className='h-[150px] flex'>
                <div className='w-[150px] h-full flex justify-center items-center'>
                    <img src="profile-icon.jpg" className='rounded-full w-[115px] h-[115px]' /></div>
                <div className='h-full flex flex-col items-start ml-4 justify-center'>
                    <h2 className='text-white text-2xl'>WenDEUS</h2>
                    <p className='text-[#aaa] text-sm mt-1'>@<span className='font-bold'>wendeus8946</span> 54 inscritos 5 vídeos</p>
                    <div className='flex mt-2 items-center cursor-pointer'>
                      <p className='text-[#aaa] text-sm mr-2'>Saiba mais sobre este canal</p>
                      <img src="./arrow-right.png" className='w-[18px] h-[18px] mt-1' />
                    </div>
                </div>
              </div>
              <div className='flex w-[500px] items-center'>
                    <div className='pt-2 pl-6 pr-6 h-[35px] w-auto bg-[#272727] hover:bg-[#888] text-white rounded-xl text-sm cursor-pointer font-semibold mr-6'>Personalizar o canal</div>
                    <div className='pt-2 pl-6 pr-6 h-[35px] w-auto bg-[#272727] hover:bg-[#888] text-white rounded-xl text-sm cursor-pointer font-semibold'>Gerenciar vídeos</div>
              </div>
           </div>
           <div className='w-100 h-[40px] border-b border-[#444]'>
              <ul className='flex items-center justify-between w-[60%] ml-10'>
                <li className='text-[#aaa] text-sm font-bold cursor-pointer'>INÍCIO</li>
                <li className='text-[#eee] text-sm font-bold cursor-pointer w-[90px] border-b-[3px] h-[39px] border-[#eee] 
                flex items-center justify-center text-center'>VÍDEOS</li>
                <li className='text-[#aaa] text-sm font-bold cursor-pointer'>PLAYLISTS</li>
                <li className='text-[#aaa] text-sm font-bold cursor-pointer'>COMUNIDADE</li>
                <li className='text-[#aaa] text-sm font-bold cursor-pointer'>CANAIS</li>
                <li className='text-[#aaa] text-sm font-bold cursor-pointer'>SOBRE</li>
                <li className='cursor-pointer'><img src="./lupa.png" className='w-[24px] h-[24px]' /></li>
              </ul>
          </div>
          <div className='w-100 grid grid-cols-4 pt-8'>
              <a href="https://www.youtube.com/watch?v=BpnZXMe7KNk">
                <div className='relative cursor-pointer'>
                  <div className="thumb w-[251px] h-[141px] rounded-lg relative bg-[url('/thumb-1.jpg')] bg-center bg-cover">
                      <p className='absolute w-[40px] h-[18px] bg-black rounded-lg opacity-90 right-[5px] top-[115px] text-[0.8rem] font-medium text-[#eee] text-center'>3:24</p>
                  </div>
                  <div className='text-[#aaa]'>
                    <h2 className='text-[#eee] text-sm w-[220px] mt-2 font-semibold'>WenDEUS - Eu Olho Para Você (Prod. Plague)</h2>
                    <p className='text-xs mt-2'>349 visualizações há 2 anos</p>
                  </div>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=vM1W-S4EFS8">
                <div className='relative cursor-pointer'>
                  <div className="thumb w-[251px] h-[141px] rounded-lg relative bg-[url('/thumb-2.jpg')] bg-center bg-cover">
                    <p className='absolute w-[40px] h-[18px] bg-black rounded-lg opacity-90 right-[5px] top-[115px] text-[0.8rem] font-medium text-[#eee] text-center'>2:44</p>
                  </div>
                  <div className='text-[#aaa]'>
                    <h2 className='text-[#eee] text-sm w-[220px] mt-2 font-semibold'>WenDEUS - Voce é um DEUS (Prod. By Fakeess)</h2>
                    <p className='text-xs mt-2'>303 visualizações há 2 anos</p>
                  </div>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=cbcwoay38yU">
                <div className='relative cursor-pointer'>
                  <div className="thumb w-[251px] h-[141px] rounded-lg relative bg-[url('/thumb-3.jpg')] bg-center bg-cover">
                      <p className='absolute w-[40px] h-[18px] bg-black rounded-lg opacity-90 right-[5px] top-[115px] text-[0.8rem] font-medium text-[#eee] text-center'>2:17</p>
                  </div>
                  <div className='text-[#aaa]'>
                    <h2 className='text-[#eee] text-sm w-[220px] mt-2 font-semibold'>WenDEUS - Frases de Amor</h2>
                    <p className='text-xs mt-2'>83 visualizações há 2 anos</p>
                  </div>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=DVc7yWwR9Nw">
                <div className='relative cursor-pointer'>
                  <div className="thumb w-[251px] h-[141px] rounded-lg relative bg-[url('/thumb-4.jpg')] bg-center bg-cover">
                      <p className='absolute w-[40px] h-[18px] bg-black rounded-lg opacity-90 right-[5px] top-[115px] text-[0.8rem] font-medium text-[#eee] text-center'>3:50</p>
                  </div>
                  <div className='text-[#aaa]'>
                    <h2 className='text-[#eee] text-sm w-[220px] mt-2 font-semibold'>WenDEUS - Menina (Prod.khail)</h2>
                    <p className='text-xs mt-2'>161 visualizações há 2 anos</p>
                  </div>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=ZszkmyG3nFE">
                <div className='mt-8 relative cursor-pointer'>
                  <div className="thumb w-[251px] h-[141px] rounded-lg relative bg-[url('/thumb-5.jpg')] bg-center bg-cover">
                      <p className='absolute w-[40px] h-[18px] bg-black rounded-lg opacity-90 right-[5px] top-[115px] text-[0.8rem] font-medium text-[#eee] text-center'>1:38</p>
                  </div>
                  <div className='text-[#aaa]'>
                    <h2 className='text-[#eee] text-sm w-[220px] mt-2 font-semibold'>WenDEUS - Sad Boy Love Song - (Rap nº 01)</h2>
                    <p className='text-xs mt-2'>117 visualizações há 2 anos</p>
                  </div>
                </div>
              </a>
          </div>

        </div>
    </>
  );
};

export default MainYT
