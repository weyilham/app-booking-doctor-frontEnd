import Image from "next/image";
import Link from "next/link";
import React from "react";

function DoctorList({ doctors, header = "Popular Doctor" }) {
  return (
    <div className="my-10 px-10">
      <h1 className="text-xl font-bold">{header}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-8">
        {doctors.length > 0
          ? doctors.map((doctor, index) => (
              <div
                key={index}
                className="border-[1px] p-3 rounded-lg cursor-pointer hover:border-primary hover:shadow-sm"
              >
                <Image
                  src={
                    `http://localhost:1337` +
                    doctor.attributes?.image?.data.attributes.url
                  }
                  width={500}
                  height={200}
                  alt="doctor"
                  className="w-auto h-auto object-cover rounded-sm"
                />
                <div className="mt-3 flex flex-col items-baseline gap-2">
                  <h2 className="text-[10px] bg-blue-100 p-1 rounded-full text-primary px-2">
                    {doctor.attributes?.categories?.data[0].attributes.name}
                  </h2>

                  <h2 className="mt-2 font-bold">{doctor.attributes.name}</h2>
                  <h2 className="text-primary text-sm">
                    {doctor.attributes?.year_of_experience}
                  </h2>
                  <h2 className="text-gray-500 text-sm">
                    {doctor.attributes?.address}
                  </h2>

                  <Link href={`/details/${doctor?.id}`} className="w-full">
                    <h2 className="p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white ">
                      Book Now
                    </h2>
                  </Link>
                </div>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="bg-slate-300 w-full h-[240px] rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default DoctorList;
