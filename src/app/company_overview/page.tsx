'use client'
import Image from "next/image";

export default async function CompanyOverview() {
  const data = [
  {
    id: 1,
    title: "Our History",
    image : "https://images.pexels.com/photos/6248993/pexels-photo-6248993.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Our Culture",
    image: "https://images.pexels.com/photos/17864141/pexels-photo-17864141/free-photo-of-cup-of-cappuccino-and-plant.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Our Teams",
    image: "https://images.pexels.com/photos/13741471/pexels-photo-13741471.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
  // const companies = await getData(
  //   "http://localhost:3000/api/company_overview"
  // );
  // console.log(companies);
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.length > 0 &&
          data.map((company: any) => (
            <div key={company.id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-2xl hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72 vsm:mt-10">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={company.image}
                  alt="company"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {company.title}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {company.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
