
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Logo() {
  return (
    <div
      className={`${montserrat.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
      src="/logo.png"
      width={150}
      height={150}
      className="hidden md:block"
      alt="Screenshots of the dashboard project showing desktop version" 
      />
      
    </div>
  );
}
