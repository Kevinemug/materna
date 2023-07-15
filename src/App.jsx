
function App() {

  return (
    
    <>
    <header className="bg-main w-full text-white md:w-[70%] lg:relative top-[80px] left-[350px]">
   <div className="flex space-x-10 py-5 pl-5 md:hidden">
     <div className="flex space-x-2">
      <span className="material-symbols-outlined text-xl">menu</span>
     <div>Menu</div>
     </div>
     <div className="flex space-x-2">
      <div><img  src="https://www.materna.com/SiteGlobals/Frontend/Images/icons/loupe-w.svg?__blob=normal&v=1" alt="" /></div>
     <div>Search</div>
     </div>
   </div>
   <div className="hidden md:flex  justify-between">
     <div className="hidden md:flex gap-8 px-5 py-5 text-xl">
      <div>Portfolio</div>
      <div>Industries</div>
      <div>Customers</div>
      <div>About us</div>
      <div> Careers</div>
     </div>
   <div className=" bg-[#8e1e2b] flex justify-between px-6 items-center"><img  src="https://www.materna.com/SiteGlobals/Frontend/Images/icons/loupe-w.svg?__blob=normal&v=1" alt="" /></div>
   </div>
    </header>


<main className="bg-hero-pattern  ">

<div className="w-[300px] h-[300px] p-2 lg:relative   bottom-20">
  <img src="https://www.materna.com/SiteGlobals/Frontend/Images/logo-small.svg?__blob=normal&v=1" alt="" />
</div>



</main>

    </>
  )
}

export default App
