"use client";

import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import { useEffect, useState } from "react";
import GlobalApi from "./_utils/GlobalApi";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getDoctors().then((res) => {
      // setCategory(res.data.data);
      setDoctorList(res.data.data);
      // console.log(res.data.data);
    });
  };
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Category + Search Bar */}
      <CategorySearch />

      {/* Doctor List */}
      <DoctorList doctors={doctorList} />
    </div>
  );
}
