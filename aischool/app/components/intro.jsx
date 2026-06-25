
import { ArrowDown } from 'lucide-react';

export default function IntroSection(){
    return(
        <div className="h-screen flex items-center justify-center w-full bg-[url('/bgIntroGradient.png')] bg-cover bg-center">
          <div className="text-center ">
            <p className="text-5xl font-bold text-white">„Sapere aude! Habe Mut, dich deines eigenen Verstandes zu bedienen.“</p>
            <p className="text-lg text-white">Imanuel Kant</p>
            <div className="flex justify-center animate-bounce mt-36">
              <ArrowDown className="text-white" />
            </div>
          </div>
        </div>
    )
}