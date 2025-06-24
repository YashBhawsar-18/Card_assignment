import Image from "next/image";
// import my_image from "@/public/my_image"


export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen sm:p-20 bg-gray-200">
      <div className="bg-gray-100 w-100 h-144 rounded-md flex flex-col items-center gap-4 p-6">
        {/* Image */}
        <div className="w-36 h-36 rounded-full overflow-hidden">
          <Image
            src="/cicularimage.jpeg"
            width={2000}
            height={2000}
            className="w-full h-full object-cover"
            alt="myimage"
          />
        </div>

        {/* Name & Designation */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#3B3F5C] font-bold text-3xl">Yash Bhawsar</p>
          <p className="text-gray-400 font-medium text-xl">
            Software Developer
          </p>
        </div>

        {/* Stars */}
        <div className="flex cursor-pointer ">
          <Image src="/Star1.png" width={16} height={16} alt="star" />
          <Image src="/Star1.png" width={16} height={16} alt="star" />
          <Image src="/Star1.png" width={16} height={16} alt="star" />
          <Image src="/Star1.png" width={16} height={16} alt="star" />
          <Image src="/Star1.png" width={16} height={16} alt="star" />
        </div>

        {/* Quote and button */}
        <div className="flex flex-col justify-center items-center gap-8">
          <p className="font-normal text-gray-500 text-md text-center">
            Code is my canvas, the browser is my gallery. Design with intent, build with precision, deliver with empathy.
          </p>
          <button className="border w-36 h-12 rounded-md bg-[#5D5FEF] font-semibold text-white cursor-pointer">
            Let's Connect
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {/* horizonatalline */}
          <div className="w-80 h-0.5 bg-gray-300"></div>

          {/* stats */}
          <div className="flex justify-evenly">
            <div className="flex flex-col items-center gap-1">
              <p className="text-gray-700 font-bold text-xl">5896</p>
              <p className="font-light text-gray-500 text-sm">Post</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-gray-700 font-bold text-xl">8952</p>
              <p className="font-light text-gray-500 text-sm">Followers</p>
            </div>{" "}
            <div className="flex flex-col items-center gap-1">
              <p className="text-gray-700 font-bold text-xl">6545</p>
              <p className="font-light text-gray-500 text-sm">Likes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
