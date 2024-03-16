
import { poppins, roboto } from "@/font/fonts";
import ThreeDCardComponent from '@/components/ThreeDCardComponent';
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmoothDemo } from "@/components/typeWriterCard";


export default function Home() {
  return (
    <main>
      <div className='flex gap-20 max-w-[1080px] h-[780px] mx-auto'>
        <div className="my-auto items-center flex flex-col">
          <h1 className={`${poppins.className} py-3 cappitalize font-extrabold text-8xl text-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent`}>Mark Zuckerberg</h1>
          <TypewriterEffectSmoothDemo />
          <button className="my-5 px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Hire Me
          </button>
        </div>
        <div>
          <ThreeDCardComponent />
        </div>
      </div>
    </main>
  );
}

// <div className='m-5'>
//   <p className={roboto.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at voluptatum est sint corporis ea dolorem tenetur? Voluptatibus quisquam atque perspiciatis, veritatis enim harum omnis! Iste atque, sunt eveniet, id porro voluptatum eum ipsum quia magni modi beatae placeat! Veritatis eligendi distinctio animi inventore fuga quo odit corrupti perferendis consectetur repudiandae quibusdam, ut, consequuntur quasi totam est incidunt optio quaerat culpa a id necessitatibus vero labore deserunt esse. Quos ullam officia, provident dolores unde saepe delectus quidem sit nihil, necessitatibus amet voluptates quisquam. Ducimus, labore fugiat. Minima sunt ipsum illum dolore quos iure, dolor incidunt dignissimos libero eius eum dolores.</p>
//   </div>
//   <div className='m-5'>
//   <p className={poppins.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad error quidem maxime! Commodi veniam accusantium earum facere aut reprehenderit.</p>
// </div>