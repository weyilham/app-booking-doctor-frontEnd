"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function DoctorSugest() {
  const [doctor, setDoctor] = useState([]);
  //   console.log(doctor);
  useEffect(() => {
    getDoctor();
  }, []);
  const getDoctor = () => {
    GlobalApi.getDoctors().then((res) => {
      //   console.log(res.data.data);
      setDoctor(res.data.data);
    });
  };
  return (
    <div className="border-[1px] p-5 mt-2 rounded-lg">
      <h2 className="text-sm font-bold ">Sugestion</h2>
      <div className="flex flex-col gap-3 mt-3">
        {doctor &&
          doctor.map((item, index) => {
            return (
              <Link href={`/details/${item.id}`} key={index}>
                <div className="flex gap-3 items-center hover:bg-blue-100 rounded-lg cursor-pointer p-3 group">
                  <Image
                    src={
                      `http://localhost:1337` +
                      item.attributes?.image?.data?.attributes.url
                    }
                    width={100}
                    height={100}
                    alt="doctor-image"
                    priority={true}
                    className=" w-20 h-20 object-cover rounded-full mt-3"
                  />
                  <div className="flex items-baseline flex-col gap-1">
                    <p className="text-[12px] bg-blue-100 group-hover:bg-blue-500 group-hover:text-white py-1 px-2 rounded-full text-primary">
                      {item.attributes?.categories?.data[0].attributes.name}
                    </p>
                    <h2 className="text-sm font-bold">
                      {item.attributes.name}
                    </h2>
                    <p className="text-sm text-primary">
                      {item.attributes?.year_of_experience}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default DoctorSugest;
