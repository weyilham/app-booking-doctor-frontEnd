"use client";
import DoctorList from "@/app/_components/DoctorList";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
// import getDoctorByCategory from "../../_utils/GlobalApi";

function Search({ params }) {
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    getDoctor();
  }, []);
  const getDoctor = () => {
    GlobalApi.getDoctorByCategory(params.cname)
      .then((res) => {
        // console.log(res);
        setDoctor(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(params.cname);
  return (
    <div className="">
      {doctor.length > 0 ? (
        <DoctorList doctors={doctor} header={params.cname} />
      ) : (
        <h1 className="text-3xl mt-5 ml-5 text-red-500">
          Doctor not available
        </h1>
      )}
    </div>
  );
}

export default Search;
