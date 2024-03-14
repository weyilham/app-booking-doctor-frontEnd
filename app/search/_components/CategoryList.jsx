"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

function CategoryList() {
  const pathname = useParams();
  const path = pathname?.cname;
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategoryList();
    // console.log(path);
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategory(res.data.data);
      //   console.log(res.data.data);
    });
  };
  return (
    <div className="mt-5 h-screen flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {category &&
              category.map((item, index) => (
                <CommandItem key={index} className="cursor-pointer">
                  <Link
                    href={`/search/${item?.attributes?.name}`}
                    className={`flex items-center gap-2 p-2 text-[14px] text-primary rounded-sm w-full cursor-pointer ${
                      path === item?.attributes?.name && "bg-blue-100"
                    }`}
                    key={index}
                  >
                    <Image
                      src={`http://localhost:1337${item.attributes?.icon?.data.attributes.url}`}
                      alt={item.attributes.name}
                      width={25}
                      height={25}
                    />
                    <label>{item.attributes.name}</label>
                  </Link>
                </CommandItem>
              ))}
            {/* <CommandItem>Calculator</CommandItem> */}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
