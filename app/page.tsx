'use client'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <span className="text-9xl"> Hello, I'm Adrian</span>
      <span className="text-sky-900 text-9xl animate-pulse">.</span>
      <p className="text-7xl">I'm a <span>Full Stack Developer</span></p>
      </div>
    </main>
  );
}
