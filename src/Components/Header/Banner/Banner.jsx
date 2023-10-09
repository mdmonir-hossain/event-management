
const Banner = () => {
 return (
   <div className="carousel w-full  ">
     <div id="slide1" className="carousel-item bg-slate-50 relative w-full ">
       <div
         className="hero min-h-screen"
         style={{
           backgroundImage:
             "url(https://i.ibb.co/4FKrpkW/Birthday-planner.jpg)",
         }}
       >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-5xl font-bold">
               Consistently Delivering Exceptional Events 
               
             </h1>

             <p className="mb-5">
               We create it, you celebrate it* We make your dreams come true
               -Book your special day
             </p>
           </div>
         </div>
       </div>
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         <a href="#slide4" className="btn btn-circle ">
           ❮
         </a>
         <a href="#slide2" className="btn btn-circle">
           ❯
         </a>
       </div>
     </div>
     <div id="slide2" className="carousel-item relative w-full">
       <img
         src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
         className="w-full"
       />
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         <a href="#slide1" className="btn btn-circle">
           ❮
         </a>
         <a href="#slide3" className="btn btn-circle">
           ❯
         </a>
       </div>
     </div>
     <div id="slide3" className="carousel-item relative w-full">
       <img
         src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
         className="w-full"
       />
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         <a href="#slide2" className="btn btn-circle">
           ❮
         </a>
         <a href="#slide4" className="btn btn-circle">
           ❯
         </a>
       </div>
     </div>
     <div id="slide4" className="carousel-item relative w-full">
       <img
         src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
         className="w-full"
       />
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         <a href="#slide3" className="btn btn-circle">
           ❮
         </a>
         <a href="#slide1" className="btn btn-circle">
           ❯
         </a>
       </div>
     </div>
   </div>
 );
};

export default Banner;
