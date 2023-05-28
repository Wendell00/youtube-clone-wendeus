import React, { useState, useEffect } from 'react';

export const AsideBar = () => {
  const [larguraPagina, setLarguraPagina] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLarguraPagina(window.innerWidth);

      const handleResize = () => {
        setLarguraPagina(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return (
    <>
    {larguraPagina >= 1330 && (
      <aside className='aside h-full w-[250px] flex flex-col overflow-x-hidden fixed bg-[#0F0F0F]'>
        <div className='ml-6 w-full flex items-center h-[56px] relative mb-2 mt-2'>
           <img src="./menu-burguer.png" alt="icon-burguer" className="w-[24px] h-[24px] cursor-pointer mr-4"/>
           <img src="./yt-logo-dark.png" alt="youtube-logo" className="w-[101px] h-[34px] cursor-pointer"/>
           <p className="absolute top-0 right-[66px] text-[#aaa] text-[10px]">BR</p>
        </div>
        <div className='flex flex-col h-auto w-full p-2 border-b border-[#3F3F3F]'>
            <div className='flex items-center w-full ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./home.png" className='w-[28px] h-[28px] mr-6' />
               <p className='text-white text-[0.95rem]'>Início</p> </div>
            <div className='flex items-center w-full ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./shorts.png" className='w-[28px] h-[28px] mr-6' /> 
              <p className='text-white text-[0.95rem]'>Shorts</p> </div>
            <div className='flex items-center w-full ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./subs.png" className='w-[28px] h-[28px] mr-6' /> 
              <p className='text-white text-[0.95rem]'>Inscrições</p> </div>
        </div>
        <div className='flex flex-col h-auto w-full p-2 border-b border-[#3F3F3F]'>
            <div className='flex items-center w-full ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./library.png" className='w-[28px] h-[28px] mr-6' />
               <p className='text-white text-[0.95rem]'>Biblioteca</p> </div>
            <div className='flex items-center w-full ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./history.png" className='w-[28px] h-[28px] mr-6' /> 
              <p className='text-white text-[0.95rem]'>Histórico</p> </div>
            <div className='flex items-center w-full ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./your-videos.png" className='w-[28px] h-[28px] mr-6' /> 
              <p className='text-white text-[0.95rem]'>Seus vídeos</p> </div>
            <div className='flex items-center w-full ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./watch-later.png" className='w-[28px] h-[28px] mr-6' /> 
              <p className='text-white text-[0.95rem]'>Assistir mais tarde</p> </div>
            <div className='flex items-center w-full ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./playlist.png" className='w-[28px] h-[28px] mr-6' /> 
              <p className='text-white text-[0.95rem]'>Funk</p> </div>
            <div className='flex items-center w-full ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./playlist.png" className='w-[28px] h-[28px] mr-6' /> 
              <p className='text-white text-[0.95rem]'>Trap</p> </div>
            <div className='flex items-center w-full ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./playlist.png" className='w-[28px] h-[28px] mr-6' /> 
              <p className='text-white text-[0.95rem]'>Lilgiela</p> </div>
            <div className='flex items-center w-full ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./down-arrow.png" className='ml-[4px] w-[15px] h-[15px] mr-6' /> 
              <p className='text-white text-[0.95rem]'>Mostrar mais</p> </div>
        </div>
        <div className='flex flex-col h-auto w-full p-2 border-b border-[#3F3F3F]'>
            <div className='flex items-center w-[90%] ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
               <p className='text-white'>Inscrições</p> </div>
            <div className='flex items-center w-[90%] ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./lofi-girl.jpg" className='w-[25px] h-[25px] mr-6 rounded-full' />
               <p className='text-white text-sm mr-[2.8rem]'>Lofi Girl</p> 
               <img src="./live.png" className='w-[30px] h-[25px]' /></div>
            <div className='flex items-center w-[90%] ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./sidoka.jpg" className='w-[25px] h-[25px] mr-6 rounded-full' />
               <p className='text-white text-sm mr-[3.2rem]'>Sidoka</p> 
               <img src="./blue-circle.png" className='w-[30px] h-[25px]'/>
               </div>
            <div className='flex items-center w-[90%] ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./gabsx.jpg" className='w-[25px] h-[25px] mr-6 rounded-full' /> 
              <p className='text-white text-sm mr-[3.05rem]'>GabSX</p> 
               <img src="./blue-circle.png" className='w-[30px] h-[25px]'/></div>
            <div className='flex items-center w-[90%] ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./gmkrikor.jpg" className='w-[25px] h-[25px] mr-6 rounded-full' /> 
              <p className='text-white text-sm'>GM Krikor</p> </div>
            <div className='flex items-center w-[90%] ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./sonny.jpg" className='w-[25px] h-[25px] mr-6 rounded-full' /> 
              <p className='text-white text-sm'>Sonny Sangha</p> </div>
            <div className='flex items-center w-[90%] ml-[0.5rem] mb-2 rounded-lg h-[38px] pl-2 hover:bg-[#272727] cursor-pointer'>
              <img src="./gaules.jpg" className='w-[25px] h-[25px] mr-6 rounded-full' /> 
              <p className='text-white text-sm'>Gaules</p> </div>
        </div>
      </aside>
       )}
    </>
  );
};

export default AsideBar
