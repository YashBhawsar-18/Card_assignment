import Image from "next/image";
// import my_image from "@/public/my_image"


export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen sm:p-20 bg-gray-200">
      <div className="bg-gray-100 w-100 h-144 rounded-md flex flex-col items-center">
        {/* Image */}
        <div className="w-36 h-36 rounded-full mt-8 overflow-hidden">
          <Image 
            src="/cicularimage.jpeg"
            width={2000}
            height={2000}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Designation */}
        <div className="flex flex-col justify-center items-center mt-2" >
          <p className="text-gray-800 font-bold text-3xl">Yash Bhawsar</p>
          <p className="text-gray-500 font-medium text-xl">Software Developer</p>
        </div>

        {/* Stars */}
        <div className="flex cursor-pointer mt-3">
          <Image 
          src="/Star1.png"
          width={16}
          height={16}

          />
          <Image 
          src="/Star1.png"
          width={16}
          height={16}
          
          />
          <Image 
          src="/Star1.png"
          width={16}
          height={16}
          
          />
          <Image 
          src="/Star1.png"
          width={16}
          height={16}
          
          />
          <Image 
          src="/Star1.png"
          width={16}
          height={16}
          
          />
        </div>
        
        {/* Quote and button */}
        <div className="mt-3 mx-12 flex flex-col justify-center items-center gap-8">
          <p className="font-light text-gray-500 text-sm text-center ">dsfghjkl fvghjkl fvghjkl fvghjkl</p>
          <button className="border w-36 h-12 rounded-md bg-[#5D5FEF] text-white">Let's Connect</button>
          
        </div>




      </div>
    </div>
  );
}
