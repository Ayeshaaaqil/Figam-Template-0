import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
export default function shopPage() {
    return(
      <>
      <Header/>
        <div className="bg-cream-50 min-h-screen">
          {/* Background Image Section */}
          <div className="relative h-64 md:h-80">
            <Image
              src="/assets/shop.png"
              alt="Cart Us"
              layout="fill"
              objectFit="cover"
              className="brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white"></h1>
            </div>
          </div>
          <br />
         {/*products */} 
<section className="bg-[#FFFFFF] body-font w-1440 h-777"> 
  <div className="container px-5 py-24 mx-auto"> 
    <div className="flex flex-wrap -m-4"> 
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/1.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Trenton modular sofa_3</h3> 
          <p className="mt-1 text-[#000] ">Rs.25,000,00</p> 
        </div> 
      </div> 
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/2.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Granite dining tables with <br /> dining chair</h3> 
          <p className="mt-1 text-[#000]">Rs.25,000,00</p> 
        </div> 
      </div> 
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/3.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Outdoor table and <br />stool</h3> 
          <p className="mt-1 text-[#000]">Rs.25,000,00</p> 
        </div> 
      </div> 
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/4.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Plain console with teak mirror</h3> 
          <p className="mt-1 text-[#000]">Rs.25,000,00</p> 
        </div> 
      </div> 
      <section className="bg-[#FFFFFF] body-font w-1440 h-777"> 
  <div className="container px-5 py-24 mx-auto"> 
    <div className="flex flex-wrap -m-4"> 
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
{/*products */} 
          <Image src="/assets/5.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Grain coffee table</h3> 
          <p className="mt-1 text-[#000]">Rs.15,000,00</p> 
        </div> 
      </div> 
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/p.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Kent coffee tables with <br /> dining chair</h3> 
          <p className="mt-1 text-[#000]">Rs.225,000,00</p> 
        </div> 
      </div> 
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/7.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Round coffee table_color <br />stool</h3> 
          <p className="mt-1 text-[#000]">Rs.251,000,00</p> 
        </div> 
      </div> 
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/8.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Reclaimed teak coffee table</h3> 
          <p className="mt-1 text-[#000]">Rs.25,200,00</p> 
        </div> 
      </div> 
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/pp45.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Granite square side table</h3> 
          <p className="mt-1 text-[#000]">Rs.258,800,00</p> 
        </div> 
      </div> 
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/p2.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Asgarad sofa</h3> 
          <p className="mt-1 text-[#000]">Rs.250,000,00</p> 
        </div> 
      </div> 
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/p3.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Maya sofa three seater</h3> 
          <p className="mt-1 text-[#000]">Rs.115,000,00</p> 
        </div> 
      </div> 
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/p4.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Outdoor sofa set</h3> 
          <p className="mt-1 text-[#000]">Rs.224,000,00</p> 
        </div> 
      </div> 
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/pp4.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Plain console_</h3> 
          <p className="mt-1 text-[#000]">Rs.258,200,00</p> 
        </div> 
      </div> 
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/p5.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Reclaimed teak Sideboard</h3> 
          <p className="mt-1 text-[#000]">Rs.20,000,00</p> 
        </div> 
      </div> 
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/p6.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SJP_0825</h3> 
          <p className="mt-1 text-[#000]">Rs.200,000,00</p> 
        </div> 
      </div> 
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full"> 
        <a className="block relative h-48 rounded overflow-hidden"> 
          <Image src="/assets/p7.png" alt="Elegant living room setup" width={287} height={397} className="rounded-lg shadow-lg" /> 
        </a> 
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Bella chair and tablke </h3> 
          <p className="mt-1 text-[#000]">Rs.100,000,00</p> 
        </div> 
      </div> 
    </div> 
  </div> 
</section>
    </div> 
    <div className="flex justify-center  mt-8 gap-5">
  {/* <button className="px-4 py-2 bg-[#FFF9E5] hover:bg-gray-300">Previous</button> */}
  <button className="px-4 py-2 bg-[#FBEBB5] hover:bg-gray-300 text-[#000]">1</button>
  <button className="px-4 py-2 bg-[#FFF9E5] hover:bg-gray-300 text-[#000]">2</button>
  <button className="px-4 py-2 bg-[#FFF9E5] hover:bg-gray-300 text-[#000]">3</button>
  <button className="px-4 py-2 bg-[#FFF9E5] hover:bg-gray-300 text-[#000]">4</button>
  <button className="px-4 py-2 bg-[#FFF9E5] hover:bg-gray-300 text-[#000]">Next</button>
</div>
<br />
<br />
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-8 bg-[#FAFAF4] body-font w-1440 h-300">
<div>
<h3 className="text-xl md:text-2xl font-bold text-black">Free Delivery</h3>
<p className="text-sm md:text-base text-gray-600 text-gray-400">For all orders over $50 ,,consectetur <br />adipim scing elit</p>
</div>
<div>
<h3 className="text-xl md:text-2xl font-bold text-black">90 Days Return</h3>
<p className="text-sm md:text-base text-gray-400">If goods have problems,consectetur <br />adipim scing elit </p>
</div>
<div>
<h3 className="text-xl md:text-2xl font-bold text-black">Secure Payment</h3>
<p className="text-sm md:text-base text-gray-600 text-gray-400">100% secure payment,consectetur <br />adipim scing elit</p>
</div>
</div>


  </div> 
</section>
          </div>
        <Footer/>  
      </>
    )
}
      