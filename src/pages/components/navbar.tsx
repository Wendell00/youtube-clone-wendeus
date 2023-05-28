// export const Navbar = () =>{
//     return(
//         <>
//         <nav className="flex justify-between w-full bg-[#0F0F0F] h-[56px]">
//             <div className="ml-6 icons flex w-[155px] items-center relative">
//                 <img src="./menu-burguer.png" alt="icon-burguer" className="w-[24px] h-[24px] cursor-pointer mr-4"/>
//                 <img src="./yt-logo-dark.png" alt="youtube-logo" className="w-[100px] h-[36px] cursor-pointer"/>
//                 <p className="absolute top-3 right-[4px] text-[#aaa] text-[10px]">BR</p>
//             </div>
//             <div className="flex justify-between items-center relative">
//                 <div className="flex justify-between items-center w-[200px] 
//                 min-[910px]:w-[400px] min-[1080px]:w-[606px]  
//                 h-[40px] border-[1.5px] 
//                 border-[#303030] rounded-2xl ">
//                     <input type="text" placeholder="Pesquisar" className="  w-[120px] min-[910px]:w-[320px] w-min-[1080px]:w-[540px] h-[38px] 
//                    bg-transparent rounded-l-2xl pl-4 pb-1 text-[#888884] placeholder:text-[#888884] focus:outline-0 active:border-[0px]"/>
//                     <button className="w-[64px] h-[38px] bg-[#212121] rounded-r-2xl flex justify-center items-center">
//                         <img src="./lupa.png" className="w-[26px] h-[26px] ml-2" />
//                     </button>
//                 </div>
//                 <button className="rounded-full w-[40px] h-[38px] bg-[#181818] ml-4 flex justify-center items-center">
//                     <img src="microfone.png" className="w-[26px] h-[26px]"/>
//                 </button>
//                 <img src="./keyboard.png" className="absolute w-[23px] h-[23px] right-[135px]"/>
//             </div>
//             <div className="w-[225px] flex justify-center items-center">
//                 <img src="./video.png" className="w-[28px] h-[28px] mr-6 cursor-pointer"/>
//                 <img src="./notify.png" className="w-[28px] h-[28px] mr-6 cursor-pointer"/>
//                 <img src="./profile-icon.jpg" className="w-[30px] h-[30px] rounded-full cursor-pointer"/>
                
//             </div>  
//         </nav>
//         </>
//     )
// }

import React, { useState, useEffect } from 'react';

export const Navbar = () => {
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
      <nav className="flex justify-between navbar bg-[#0F0F0F] h-[56px] fixed z-10">
        <div className="ml-6 icons flex w-[155px] items-center relative">
                <img src="./menu-burguer.png" alt="icon-burguer" className="w-[24px] h-[24px] cursor-pointer mr-4"/>
                <img src="./yt-logo-dark.png" alt="youtube-logo" className="w-[101px] h-[34px] cursor-pointer"/>
                <p className="absolute top-3 right-[4px] text-[#aaa] text-[10px]">BR</p>
        </div>
          <div className="flex justify-between items-center relative">
            <div className="flex justify-between items-center w-[auto] min-[690px]:w-[200px] 
            min-[910px]:w-[400px] min-[1080px]:w-[606px]  
            h-[40px] border-[1.5px] 
            border-[#303030] rounded-2xl ">
              {larguraPagina >= 690 && (
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="w-[120px] min-[910px]:w-[320px] min-[1080px]:w-[540px] h-[38px] 
                    bg-transparent rounded-l-2xl pl-4 pb-1 text-[#888884] placeholder:text-[#888884] focus:outline-0 active:border-[0px]"
                />
              )}
                <button className="w-[64px] h-[38px] bg-[#212121] rounded-full min-[560px]:rounded-l-2xl flex justify-center items-center">
                    <img src="./lupa.png" className="w-[26px] h-[26px] min-[560px]:ml-2" />
                </button>
            </div>
                 <button className="rounded-full w-[40px] h-[38px] bg-[#181818] ml-4 flex justify-center items-center">
                    <img src="microfone.png" className="w-[26px] h-[26px]"/>
                </button>
                {larguraPagina >= 560 && (
                 <img src="./keyboard.png" className="absolute w-[23px] h-[23px] right-[135px] cursor-pointer"/>
                 )}
          </div>
          <div className="w-[auto] min-[690px]:w-[225px] flex justify-center items-center mr-2 min-[690px]:mr-0">
                <img src="./video.png" className="w-[28px] h-[28px] mr-6 cursor-pointer"/>
                <img src="./notify.png" className="w-[28px] h-[28px] mr-6 cursor-pointer"/>
                <img src="./profile-icon.jpg" className="w-[30px] h-[30px] rounded-full cursor-pointer"/>
            </div>  
      </nav>
    </>
  );
};

export default Navbar
