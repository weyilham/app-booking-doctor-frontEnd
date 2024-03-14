import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

function DoctorDetail({ doctor }) {
  const socialMedia = [
    {
      name: "Facebook",
      icon: `https://img.icons8.com/?size=512&id=118497&format=png`,
      url: "",
    },
    {
      name: "Twitter",
      icon: `https://img.icons8.com/?size=512&id=13963&format=png`,
      url: "",
    },
    {
      name: "Instagram",
      icon: `https://img.icons8.com/?size=512&id=32323&format=png`,
      url: "",
    },
    {
      name: "Linkedin",
      icon: `https://img.icons8.com/?size=512&id=13930&format=png`,
      url: "",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-2 border-[1px] p-5 rounded-lg shadow-sm">
        {/* doctor image */}

        <div className="">
          {doctor && doctor.attributes?.image?.data?.attributes.url && (
            <Image
              src={
                `http://localhost:1337` +
                doctor.attributes?.image?.data?.attributes.url
              }
              width={200}
              height={200}
              alt="doctor"
              priority={true}
              className="w-full h-[280px] object-cover rounded-lg"
            />
          )}
        </div>
        {/* doctor info */}
        <div className="col-span-2 mt-5 md:mt-0 md:px-10 flex flex-col gap-3 items-baseline">
          <h1 className="text-2xl font-bold">{doctor?.attributes?.name}</h1>
          <h2 className="flex gap-2 text-gray-400 text-md">
            <GraduationCap />
            <span>{doctor?.attributes?.year_of_experience} Of Experience</span>
          </h2>
          <h2 className="flex gap-2 text-gray-400 text-md">
            <MapPin />
            <span>{doctor?.attributes?.address}</span>
          </h2>
          <h2 className="text-[10px] bg-blue-100 p-1 rounded-full text-primary px-2">
            {doctor.attributes?.categories?.data[0].attributes.name}
          </h2>
          <div className="flex gap-3">
            {socialMedia.map((item, index) => (
              <Image
                src={item.icon}
                alt={item.name}
                key={index}
                width={30}
                height={30}
              />
            ))}
          </div>

          <Button className="rounded-full mt-3">Book Appoinment</Button>
        </div>
      </div>
      <div className="mt-5 border-[1px] p-5 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold">About Me</h2>
        <p className="text-gray-500">{doctor?.attributes?.about}</p>
      </div>
    </>
  );
}

export default DoctorDetail;
