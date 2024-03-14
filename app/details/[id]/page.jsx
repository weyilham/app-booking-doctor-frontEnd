"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import DoctorDetail from "../_components/DoctorDetail";
import DoctorSugest from "../_components/DoctorSugest";

function DetailsDoctor({ params }) {
  const id = params.id;
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    getDoctor();
  }, []);
  const getDoctor = () => {
    GlobalApi.getDoctorById(id).then((res) => {
      //   console.log(res.data.data);
      setDoctor(res.data.data);
    });
  };
  //   console.log(id);
  return (
    <div>
      <div className=" p-5">
        <h2 className="font-bold text-[22px]">Detail Doctor</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          {/* doctor detail */}
          <div className="col-span-3">
            {doctor && <DoctorDetail doctor={doctor} />}
          </div>
          {/* doctor sugestion */}
          <div>
            <DoctorSugest />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsDoctor;
