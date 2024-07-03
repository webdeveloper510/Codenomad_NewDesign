import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r to-[#8BC542] from-[#0E1818]">
     <div className="flex justify-between  w-full px-3 py-2">
     <Image
              src="/logo.png"
              alt="Vercel Logo"
              className="dark:invert self-center"
              width={100}
              height={24}
              priority
            />

<Image
              src="/MenuIcon.png"
              alt="Vercel Logo"
              className="dark:invert cursor-pointer"
              width={100}
              height={24}
              priority
            />
     </div>
     <div>
      <h1 className="text-white text-[32px] font-Lufga">Making your Business Healthy with Innovation and Digitization</h1>
     </div>
    </main>
  );
}
