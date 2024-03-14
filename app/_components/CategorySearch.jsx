"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";

function CategorySearch() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategory(res.data.data);
      //   console.log(res.data.data);
    });
  };

  return (
    <div className="mb-10 flex flex-col items-center gap-2 p-5">
      <h1 className="text-4xl font-bold tracking-wide">
        Category <span className="text-primary">Doctor</span>
      </h1>
      <p className="text-gray-400 text-xl text-center">
        Search your Doctor and Book Appoinment in one click
      </p>

      <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
        <Input
          type="text"
          placeholder="Search..."
          className="focus:border-primary focus:ring-primary"
        />
        <Button type="submit">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>

      {/* display doctor */}

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
        {category.length > 0
          ? category.map(
              (item, index) =>
                index < 6 && (
                  <Link
                    href={`/search/${item.attributes?.name}`}
                    key={index}
                    className="flex items-center flex-col gap-2 p-4 bg-blue-50 rounded-lg text-center hover:scale-110 transition-all ease-in-out cursor-pointer"
                  >
                    {/* {console.log(item.attributes?.icon?.data.attributes.url)} */}
                    <Image
                      src={
                        `http://localhost:1337` +
                        item.attributes?.icon?.data.attributes.url
                      }
                      alt=""
                      width={40}
                      height={40}
                    />
                    <label className="text-sm text-blue-600">
                      {item.attributes?.name}
                    </label>
                  </Link>
                )
            )
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="bg-slate-200 w-[130px] h-[130px] rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CategorySearch;
