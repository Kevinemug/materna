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
            <div>
              <img
                src="https://www.materna.com/SiteGlobals/Frontend/Images/icons/loupe-w.svg?__blob=normal&v=1"
                alt=""
              />
            </div>
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
          <div className=" bg-[#8e1e2b] flex justify-between px-6 items-center">
            <img
              src="https://www.materna.com/SiteGlobals/Frontend/Images/icons/loupe-w.svg?__blob=normal&v=1"
              alt=""
            />
          </div>
        </div>
      </header>

      <main className=" ">
        <div className="bg-hero-pattern bg-no-repeat  ">
          <div className="w-[120px] lg:w-[300px] lg:h-[300px] p-2 lg:p-4 lg:relative   bottom-20">
            <img
              src="https://www.materna.com/SiteGlobals/Frontend/Images/logo-small.svg?__blob=normal&v=1"
              alt=""
            />
          </div>

          <div className=" lg:flex">
            <div className="p-2 lg:p-4">
              <div className="border-[5px] p-2 lg:p-4 text-white lg:w-[70%] lg:py-10 border-main flex flex-col gap-8 ">
                <div className="text-5xl">WE ARE DIGITIZING YOUR WORLD.</div>
                <div className="text-2xl text-[#d1dbe0]">
                  {" "}
                  As a key globally active IT service provider, we advise and
                  assist you in all aspects of digitization and provide
                  tailor-made technologies for agile, flexible and secure IT.
                </div>
              </div>
            </div>

            {/* /* cards */}
            <div className="p-2  space-y-4 text-white lg:flex  gap-10 ">
              <div className="lg:w-[200px] lg:border-[5px] lg:h-[225px] border-white">
                <div className="hidden  lg:block">
                  <img
                    className="w-[200px] h-[150px]"
                    src="https://www.materna.com/DE/Home/_documents/Bilder/M-Startseite-Quadrat-Unternehmen.jpg?__blob=normal&v=1"
                    alt=""
                  />
                </div>
                <div className="bg-main flex gap-5  p-4">
                  <div className="text-2xl">Portifolio</div>
                  <div className="w-4 lg:hidden">
                    <img
                      src="https://www.materna.com/SiteGlobals/Frontend/Images/icons/next-upright.svg?__blob=normal&v=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[200px] lg:border-[5px] lg:h-[225px] border-white">
                <div className="hidden  lg:block">
                  <img
                    className="lg:w-[200px] lg:h-[150px]"
                    src="https://www.materna.com/DE/Home/_documents/Bilder/M-Startseite-Quadrat-Karriere.jpg?__blob=normal&v=1"
                    alt=""
                  />
                </div>
                <div className="bg-main flex gap-5  p-4">
                  <div className="text-2xl">About Us</div>
                  <div className="w-4 lg:hidden">
                    <img
                      src="https://www.materna.com/SiteGlobals/Frontend/Images/icons/next-upright.svg?__blob=normal&v=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[200px] lg:border-[5px] lg:h-[225px] border-white">
                <div className="hidden  lg:block">
                  <img
                    className="w-[200px] h-[150px]"
                    src="https://www.materna.com/DE/Home/_documents/Bilder/M-Startseite-Quadrat-Portfolio.jpg?__blob=normal&v=1"
                    alt=""
                  />
                </div>
                <div className="bg-main flex gap-5  p-4">
                  <div className="text-2xl">Careers</div>
                  <div className="w-4 lg:hidden">
                    <img
                      src="https://www.materna.com/SiteGlobals/Frontend/Images/icons/next-upright.svg?__blob=normal&v=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<div className="flex justify-center w-[80%]  m-auto items-center mt-[20px]">
  <div  className="text-2xl lg:text-3xl text-center">Learn more about our portfolio</div>
</div>


<div className="p-2 lg:p-4 space-y-5 lg:flex space-x-4">


  <div className="bg-[#e9eef1] lg:w-[380px]">
  
  <div className="bg-img bg-cover bg-center bg-no-repeat h-[300px]">
    <div className="bg-[#e7e7e7] w-20 py-1  text-center relative top-2 left-2">Cloud</div>
    </div>
  <div className="flex flex-col gap-5 p-4">
    <div className="text-[#ce565d] text-2xl">We accompany your Journey2Cloud</div>
    <div className="text-xl text-[#5c5a5d]">We analyze your application landscapes and transfer them step by step into a sustainable model.</div>
    <div className="flex justify-center gap-4  text-xl text-white py-4 bg-main items-center">
      <button>More</button>
      <div className="w-5">
        <img  src="https://www.materna.com/SiteGlobals/Frontend/Images/icons/next-upright.svg?__blob=normal&v=1"  alt="" />   </div>
</div>
  </div>
  </div>
  <div className="bg-[#e9eef1] lg:w-[380px]">
  
  <div className="bg-img bg-cover bg-center bg-no-repeat h-[300px]">
    <div className="bg-[#e7e7e7] w-20 py-1  text-center relative top-2 left-2">Cloud</div>
    </div>
  <div className="flex flex-col gap-5 p-4">
    <div className="text-[#ce565d] text-2xl">We accompany your Journey2Cloud</div>
    <div className="text-xl text-[#5c5a5d]">We analyze your application landscapes and transfer them step by step into a sustainable model.</div>
    <div className="flex justify-center gap-4  text-xl text-white py-4 bg-main items-center">
      <button>More</button>
      <div className="w-5">
        <img  src="https://www.materna.com/SiteGlobals/Frontend/Images/icons/next-upright.svg?__blob=normal&v=1"  alt="" />   </div>
</div>
  </div>
  </div>
  <div className="bg-[#e9eef1] lg:w-[380px]">
  
  <div className="bg-img bg-cover bg-center bg-no-repeat h-[300px]">
    <div className="bg-[#e7e7e7] w-20 py-1  text-center relative top-2 left-2">Cloud</div>
    </div>
  <div className="flex flex-col gap-5 p-4">
    <div className="text-[#ce565d] text-2xl">We accompany your Journey2Cloud</div>
    <div className="text-xl text-[#5c5a5d]">We analyze your application landscapes and transfer them step by step into a sustainable model.</div>
    <div className="flex justify-center gap-4  text-xl text-white py-4 bg-main items-center">
      <button>More</button>
      <div className="w-5">
        <img  src="https://www.materna.com/SiteGlobals/Frontend/Images/icons/next-upright.svg?__blob=normal&v=1"  alt="" />   </div>
</div>
  </div>
  </div>
  <div className="bg-[#e9eef1] lg:w-[380px]">
  
  <div className="bg-img bg-cover bg-center bg-no-repeat h-[300px]">
    <div className="bg-[#e7e7e7] w-20 py-1  text-center relative top-2 left-2">Cloud</div>
    </div>
  <div className="flex flex-col gap-5 p-4">
    <div className="text-[#ce565d] text-2xl">We accompany your Journey2Cloud</div>
    <div className="text-xl text-[#5c5a5d]">We analyze your application landscapes and transfer them step by step into a sustainable model.</div>
    <div className="flex justify-center gap-4  text-xl text-white py-4 bg-main items-center lg:relative ">
      <button>More</button>
      <div className="w-5">
        <img  src="https://www.materna.com/SiteGlobals/Frontend/Images/icons/next-upright.svg?__blob=normal&v=1"  alt="" />   </div>
</div>
  </div>
  </div>
  


</div>







      </main>
    </>
  );
}

export default App;
