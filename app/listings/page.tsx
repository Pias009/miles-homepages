"use client";
import React, { FormEvent, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { APIProvider, Map, InfoWindow } from "@vis.gl/react-google-maps";
import { useQuery } from "@tanstack/react-query";
import { DateRange } from "react-day-picker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { X } from "lucide-react";

import DashboardLayout2 from "@/components/Layouts/DashboardLayout2";
import { ListedItemCard2 } from "@/components/ListedItemCard";
import { GOOGLE_PLACES_API_KEY } from "@/constants";
import CustomMarker from "@/components/CustomMarker";
import { ItemProps, CategoryProps, StateProps } from "@/types";
import {
  getListings,
  searchListings,
  getCategories,
} from "@/services/general.api";
import { getStates } from "@/services/locations.api";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/AppContext";

export default function Listings() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentListings, setCurrentListings] = useState([]);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState<CategoryProps>();
  const [date, setDate] = useState<DateRange | undefined>();
  const [confirmedDate, setConfirmedDate] = useState<DateRange | undefined>();
  const [openCalendar, setOpenCalendar] = useState(false);

  const { userData } = useAppContext();

  const { data: states, isPending: isStatesPending } = useQuery({
    queryKey: ["location"],
    queryFn: getStates,
  });

  const updateSearchParams = (keyword: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (keyword) {
      searchParams.set("search", keyword);
    } else {
      searchParams.delete("search");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchKeyword === "") return;
    updateSearchParams(searchKeyword);
  };

  const { data: listings, isPending } = useQuery({
    queryKey: [
      "listings",
      category?.category_id,
      confirmedDate,
      location,
      clearFilter,
    ],
    queryFn: () =>
      getListings({
        category: category?.category_id || "",
        location: location || "",
        startDate: confirmedDate
          ? format(confirmedDate.from as Date, "yyyy-MM-dd HH:mm:ss")
          : "",
        endDate: confirmedDate
          ? format(confirmedDate.to as Date, "yyyy-MM-dd HH:mm:ss")
          : "",
      }),
  });

  const { data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });

  const { data: searchResult, isPending: isSearching } = useQuery({
    queryKey: ["listings", searchKeyword],
    queryFn: () => searchListings(searchKeyword),
  });

  useEffect(() => {
    if (searchKeyword) {
      const allListings = searchResult?.data?.filter(
        (listing: ItemProps) => listing?.lister_id !== userData?.id
      );
      setCurrentListings(allListings);
    } else {
      const allListings = listings?.data?.filter(
        (listing: ItemProps) => listing?.lister_id !== userData?.id
      );
      setCurrentListings(allListings);
    }
  }, [listings, searchKeyword, searchResult, userData?.id]);

  const defaultCenter = {
    lat: 6.5244,
    lng: 3.3792,
  };

  function clearFilter() {
    setLocation("");
    setCategory(undefined);
    setDate(undefined);
  }

  return (
    <DashboardLayout2
      noPaddingY
      searchValue={searchKeyword}
      handleSearchChange={(e) => setSearchKeyword(e.target.value)}
      handleSearchSubmit={handleSearchSubmit}
    >
      <div className="flex flex-col sm:flex-row h-full max-h-screen overflow-hidden sm:-mx-[30px]">
        <div className="flex flex-col flex-1 pb-[25px]">
          <div className="xl:px-[30px] sm:p-6 max-sm:mb-[30px] flex space-[5px] sm:items-center justify-between">
            <div className="flex items-center space-x-[5px] xl:gap-x-2.5">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className={`xl:py-2 py-1.5 px-2.5 xl:px-[15px] text-xs sm:text-sm xl:text-base hover:bg-green-500 hover:border-green-500 hover:text-white ${
                      category && "!bg-green-500 !border-green-500 !text-white"
                    } bg-white text-slate-900 border border-gray-4 rounded-[22px]`}
                  >
                    {category?.category_name || "Category"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories?.data?.map((category: CategoryProps) => (
                    <DropdownMenuItem
                      onClick={() => setCategory(category)}
                      key={category?.category_id}
                    >
                      {category?.category_name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className={`xl:py-2 py-1.5 px-2.5 xl:px-[15px] text-xs sm:text-sm xl:text-base ${
                      location && "!bg-green-500 !border-green-500 !text-white"
                    } hover:bg-green-500 hover:border-green-500 hover:text-white bg-white text-slate-900 border border-gray-4 rounded-[22px]`}
                  >
                    {location || "Location"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="overflow-y-auto max-h-[400px]">
                  {states?.map((state: StateProps) => (
                    <DropdownMenuItem
                      key={state.id}
                      onClick={() => setLocation(state.name)}
                    >
                      {state.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Popover onOpenChange={setOpenCalendar} open={openCalendar}>
                <PopoverTrigger asChild>
                  <Button
                    className={`xl:py-2 py-1.5 px-2.5 xl:px-[15px] text-xs sm:text-sm xl:text-base ${
                      date && "!bg-green-500 !border-green-500 !text-white"
                    } hover:bg-green-500 hover:border-green-500 hover:text-white bg-white text-slate-900 border border-gray-4 rounded-[22px]`}
                  >
                    Dates
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={1}
                  />
                  <div className="flex items-center justify-end gap-x-2 mt-4 border border-t p-3">
                    <PopoverClose asChild>
                      <Button
                        className="text-sm text-black py-1 px-3 rounded-lg"
                        variant="ghost"
                      >
                        Cancel
                      </Button>
                    </PopoverClose>
                    <Button
                      onClick={() => {
                        setConfirmedDate(date);
                        setOpenCalendar(false);
                      }}
                      className="text-sm text-white bg-green-500 py-1 px-3 rounded-lg"
                    >
                      Save
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex items-center space-x-1.5 xl:space-x-3">
              <p className="text-[10px] sm:text-xs xl:text-sm text-slate-900">
                {currentListings?.length} result(s)
              </p>
              {(location || category || date) && (
                <Button
                  onClick={clearFilter}
                  className="p-1 bg-white text-xs sm:text-sm xl:text-base text-slate-900 hover:text-green-500 rounded-[22px]"
                >
                  Clear filter
                </Button>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[15px] xl:px-[30px] sm:px-6 gap-y-6 sm:gap-y-10 overflow-y-auto sm:pl-[30px]">
            {currentListings?.map((item: ItemProps) => (
              <ListedItemCard2
                item={item}
                link={`/listings/${item.listing_id}`}
                key={item.listing_id}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 hidden sm:block">
          <APIProvider apiKey={GOOGLE_PLACES_API_KEY!}>
            <Map
              style={{ width: "100%", height: "100%" }}
              defaultCenter={defaultCenter}
              defaultZoom={12}
              gestureHandling="greedy"
              disableDefaultUI
            >
              {listings?.data.map((item: ItemProps) => (
                <CustomMarker
                  key={item.listing_id}
                  lat={Number(item.latitude)}
                  lng={Number(item.longitude)}
                  price={item.price_per_day}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
              {selectedItem && (
                <InfoWindow
                  position={{
                    lat: Number(selectedItem.latitude),
                    lng: Number(selectedItem.longitude),
                  }}
                  onCloseClick={() => setSelectedItem(null)}
                  headerDisabled
                >
                  <div className="flex items-center gap-x-4 relative">
                    <button
                      className="absolute top-0 right-0"
                      onClick={() => setSelectedItem(null)}
                    >
                      <X className="size-4" />
                    </button>
                    <div>
                      <Image
                        src={selectedItem?.item_images?.[0]?.image_url}
                        alt="item"
                        width={100}
                        height={100}
                        className="object-cover rounded-full h-[100px] w-[100px]"
                      />
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <h4 className="!body-medium-14">
                        {selectedItem.product_name}
                      </h4>
                      <p className="!body-medium-14 !text-orange-500">
                        Listed by {selectedItem.full_name}
                      </p>
                      <p className="!body-regular-16 !text-slate-400">
                        <span className="!text-slate-900 !font-bold">
                          NGN {selectedItem.price_per_day}
                        </span>{" "}
                        per/day
                      </p>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        </div>
      </div>
    </DashboardLayout2>
  );
}
