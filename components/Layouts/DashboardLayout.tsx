"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  LayoutGrid,
  Menu,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useAppContext } from "@/context/AppContext";
import ProfileIcon from "../vectors/ProfileIcon";
import DashboardIcon from "../vectors/DashboardIcon";
import RentalsIcon from "../vectors/RentalsIcon";
import LogoutIcon from "../vectors/LogoutIcon";
import Notifications from "../Notifications";
import VerificationModal from "../Modals/VerificationModal";
import { DashboardLayoutProps } from "@/types";
import PrivateRoute from "../custom-routes/PrivateRoute";

interface DashboardLayout2Props extends DashboardLayoutProps {
  noPaddingX?: boolean;
}

export default function DashboardLayout({
  children,
  handleSearchSubmit,
  handleSearchChange,
  searchValue,
  noPaddingX,
}: DashboardLayout2Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { handleLogout, isVerified, userData } = useAppContext();
  const [openVerifModal, setOpenVerifModal] = useState(false);

  useEffect(() => {
    if (isVerified) {
      setOpenVerifModal(false);
      sessionStorage.removeItem("showVerifModal");
      return;
    }

    const showVerifModal = sessionStorage.getItem("showVerifModal");

    if (!showVerifModal) {
      const timer = setTimeout(() => {
        setOpenVerifModal(true);
        sessionStorage.setItem("showVerifModal", "show");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVerified]);
  return (
    <PrivateRoute>
      <div className="grid min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] h-screen w-screen">
        <div className="hidden border-r bg-white md:block">
          <div className="flex h-full max-h-screen flex-col">
            <div className="flex pt-9 items-center px-4 lg:px-6 mb-16">
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  width={95}
                  height={26}
                  alt="logo"
                  className="object-contain hidden md:block"
                />
              </Link>
            </div>
            <div className="">
              <nav className="grid gap-2 items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  href="/dashboard"
                  className={`flex ${
                    pathname.includes("/dashboard")
                      ? "bg-orange-50 text-orange-500"
                      : "text-slate-400"
                  } items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all hover:text-orange-500`}
                >
                  <LayoutGrid className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/bookings"
                  className={`flex ${
                    pathname.includes("/bookings")
                      ? "bg-orange-50 text-orange-500"
                      : "text-slate-400"
                  } items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all hover:text-orange-500`}
                >
                  <CalendarDays className="h-4 w-4" />
                  Bookings
                </Link>
                <Link
                  href="/manage-listings"
                  className={`flex ${
                    pathname.includes("/manage-listings")
                      ? "bg-orange-50 text-orange-500"
                      : "text-slate-400"
                  } items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all hover:text-orange-500`}
                >
                  <ClipboardList className="h-4 w-4" />
                  Listings
                </Link>
              </nav>
            </div>
            <div className="grid gap-2 px-2 lg:px-4 mt-4">
              <Link
                href={pathname === "/renting" ? "/bookings" : "/renting"}
                className="py-3 px-9 rounded-[38px] bg-green-500 w-fit text-white my-3.5"
              >
                Switch to {pathname === "/renting" ? "Lister" : "Renter"}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-screen max-sm:w-screen">
          <header className="flex h-14 items-center gap-2 border-b bg-white px-4 lg:h-[86px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden border-none"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col rounded-r-[60px] py-[127px]"
              >
                <nav className="grid gap-2.5 text-lg font-medium">
                  <Link href="/">
                    <Image
                      src="/images/logo.svg"
                      width={81}
                      height={22}
                      alt="logo"
                      className="object-contain md:hidden mb-12"
                    />
                  </Link>
                  <Link
                    href="/dashboard"
                    className={`flex ${
                      pathname.includes("/dashboard")
                        ? "bg-orange-50 text-orange-500"
                        : "text-slate-400"
                    } items-center gap-2 rounded-xl mx-[-0.65rem] px-4.5 py-3 text-sm transition-all hover:text-orange-500`}
                  >
                    <LayoutGrid className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/bookings"
                    className={`flex ${
                      pathname.includes("/bookings")
                        ? "bg-orange-50 text-orange-500"
                        : "text-slate-400"
                    } items-center gap-2 rounded-xl mx-[-0.65rem] px-4.5 py-3 text-sm transition-all hover:text-orange-500`}
                  >
                    <CalendarDays className="h-5 w-5" />
                    Bookings
                  </Link>
                  <Link
                    href="/manage-listings"
                    className={`flex ${
                      pathname.includes("/manage-listings")
                        ? "bg-orange-50 text-orange-500"
                        : "text-slate-400"
                    } items-center gap-2 rounded-xl mx-[-0.65rem] px-4.5 py-3 text-sm transition-all hover:text-orange-500`}
                  >
                    <ClipboardList className="h-5 w-5" />
                    Listings
                  </Link>
                </nav>
                <div className="mt-4 py-3.5 px-2.5">
                  <Link
                    href={pathname === "/renting" ? "/bookings" : "/renting"}
                    className="py-3 px-9 rounded-[38px] bg-green-500 w-full sm:w-fit text-white"
                  >
                    Switch to {pathname === "/renting" ? "Lister" : "Renter"}
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
              <form onSubmit={handleSearchSubmit}>
                <Link href="/listings" className="relative block w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400 text-sm" />
                  <Input
                    type="search"
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Search products..."
                    className="w-full appearance-none rounded-[39px] bg-background pl-8 shadow-none md:w-2/3 max-w-[346px] outline-none ring-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </Link>
              </form>
            </div>
            <div className="flex items-center gap-x-11">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="ml-auto hidden sm:block text-[#394455] p-2 bg-transparent"
                  >
                    <Bell className="h-6 w-6" />
                    <span className="sr-only">Toggle notifications</span>
                  </Button>
                </DropdownMenuTrigger>
                <Notifications />
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="flex items-center gap-1"
                >
                  <Button className="bg-transparent hover:bg-transparent text-slate-800">
                    <Avatar className="w-[42px] h-[42px] rounded-full">
                      <AvatarImage
                        src={userData?.image_url || ""}
                        alt="photo"
                      />
                      <AvatarFallback>
                        <ProfileIcon />
                      </AvatarFallback>
                    </Avatar>
                    <p className="font-bold ml-3.5 text-slate-800 hidden sm:block">
                      {userData?.first_name || ""}
                    </p>
                    <ChevronDown className="text-slate-800 hidden sm:block" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="flex flex-col gap-6 px-10 py-[30px] rounded-[20px] mr-3"
                >
                  <DropdownMenuItem className="w-full justify-center cursor-pointer">
                    <Link
                      href="/bookings"
                      className="flex items-center gap-x-2"
                    >
                      <RentalsIcon /> My Rentals
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="w-full justify-center cursor-pointer">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-x-2"
                    >
                      <DashboardIcon /> Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="w-full justify-center cursor-pointer">
                    <Link href="/profile" className="flex items-center gap-x-2">
                      <ProfileIcon />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="w-full justify-center cursor-pointer gap-x-2"
                    onClick={() => {
                      handleLogout();
                      router.push("/");
                    }}
                  >
                    <LogoutIcon /> Logout
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:!bg-transparent">
                    <Link
                      href={pathname === "/renting" ? "/bookings" : "/renting"}
                      className="py-3 px-9 rounded-[38px] bg-green-500 w-fit text-white"
                    >
                      Switch to {pathname === "/renting" ? "Lister" : "Renter"}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main
            className={`flex flex-1 flex-col gap-[25px] p-[25px] lg:gap-[30px] ${
              noPaddingX ? "px-0" : "px-[25px]"
            } lg:px-[30px] bg-white overflow-y-auto overflow-x-hidden`}
          >
            {children}
          </main>
        </div>
        <VerificationModal
          openModal={openVerifModal}
          handleOpenModal={setOpenVerifModal}
        />
      </div>
    </PrivateRoute>
  );
}
