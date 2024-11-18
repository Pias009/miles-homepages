import Image from "next/image";
import Link from "next/link";
import HomepageAnimation from "@/components/HomepageAnimation";
import Navbar from "@/components/Navbar";
import Dot from "@/components/vectors/Dot";
import PlayIcon from "@/components/vectors/PlayIcon";
import ShortRightArrow from "@/components/vectors/ShortRightArrow";
import Footer from "@/components/Footer";
import TickIcon from "@/components/vectors/TickIcon";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col overflow-x-hidden max-w-[100vw] w-full">
      <header className="min-h-screen bg-pearl-400 pt-[15px] px-[25px] md:p-5 flex flex-col md:items-center md:justify-center relative">
        <div className="px-[25px] pt-[100px] md:p-5 flex flex-col md:items-center md:justify-center relative">
          <HomepageAnimation />
        </div>
        
        <Navbar />

        <div className="flex flex-col items-center text-center max-w-[578px] z-10">
          <div className="bg-white rounded-[100px] mb-[30px] md:mb-3.5 border border-gray-2 px-2 py-1 flex items-center gap-x-1 text-xs md:text-sm text-dark">
            <Dot />
            Free, fast, secure and easy to navigate
          </div>
          <h3 className="font-bold text-xl md:text-[52px] text-slate-900 md:leading-[62px] text-center mb-5">
            Get More Mileage Out of the Things You Own
          </h3>
          <p className="text-xs md:text-lg text-center text-slate-900 mb-[33px] md:mb-[61px]">
            Buying stuff is easy. But what if there was a way to make renting
            out the things you already own just as simple and rewarding?.
          </p>
          <Link
            href="/listings"
            className="flex items-center gap-x-3 px-[30px] py-3 rounded-[38px] bg-green-500 hover:bg-green-700 text-sm md:text-base text-white"
          >
            Get started <PlayIcon />
          </Link>
        </div>

        <div className="md:hidden absolute bottom-14 left-0 flex justify-between w-full px-[25px]">
          <Image
            src="/images/laptop.png"
            width={79.08}
            height={96.05}
            alt="laptop"
            className="object-contain rotate-[225deg]"
          />
          <Image
            src="/images/Camera.png"
            width={99.59}
            height={104.05}
            alt="Camera"
            className="object-contain rotate-[130deg]"
          />

          <Image
            src="/images/projector.png"
            width={101.4}
            height={67.11}
            alt="projector"
            className="object-contain -rotate-45"
          />
        </div>
        {/* <HomepageAnimation /> */}
      </header>
      <main className="flex flex-col container mx-auto md:max-w-[823px] xl:max-w-[1128px]">
        <section className="bg-white flex flex-col py-10 md:pt-14 mb:pb-[88px]">
          <div className="flex mb-[34px] md:mb-[60.5px] lg:mb-16 justify-center">
            <div className="desc-chip">WHY LIST ON MILES?</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 rounded-[20px] md:rounded-[44px] xl:rounded-[60px] overflow-hidden">
            <div className="h-[304.63px] md:h-[387px] xl:h-[530px]">
              <Image
                src="/images/earn-extra-cash.png"
                height={246}
                width={564}
                alt="earn-extra-cash"
                className="object-cover h-[304.63px] md:h-[387px] xl:h-[530px]"
              />
            </div>
            <div className="h-[304.63px] md:h-[387px] xl:h-[530px] flex flex-col justify-center px-8 bg-teal-50">
              <h2 className="mb-2 md:mb-2.5 lg:mb-4 body-medium-20 text-teal-600">
                Why List your stuff on Miles?
              </h2>
              <h3 className="heading-bold-20 text-black mb-[5px] md:mb-[7.5px] lg:mb-2.5">
                Earn extra cash effortlessly
              </h3>
              <p className="body-regular-16 text-slate-900 mb-4 md:mb-8 lg:mb-11">
                Turn your idle possessions into a steady stream of revenue by
                renting them out on Miles.
              </p>
              <div className="flex flex-col space-y-5">
                <div className="flex items-center md:space-x-3.5 lg:space-x-5">
                  <TickIcon />
                  <p className="body-regular-16 text-black">Passive Income</p>
                </div>
                <div className="flex items-center md:space-x-3.5 lg:space-x-5">
                  <TickIcon />
                  <p className="body-regular-16 text-black">
                    Maximized unused Assets
                  </p>
                </div>
                <div className="flex items-center md:space-x-3.5 lg:space-x-5 space-x-[11px]">
                  <TickIcon />
                  <p className="body-regular-16 text-black">
                    Flexible earnings
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[304.63px] md:h-[387px] xl:h-[530px] flex flex-col justify-center px-8 bg-orange-50">
              <h2 className="mb-2 md:mb-2.5 lg:mb-4 body-medium-20 text-orange-600">
                Why List your stuff on Miles?
              </h2>
              <h3 className="heading-bold-20 text-black mb-[5px] md:mb-[7.5px] lg:mb-2.5">
                Hassle-Free Listing
              </h3>
              <p className="body-regular-16 text-slate-900 mb-4 md:mb-8 lg:mb-11">
                Get your items up for rent in just a few clicks. We take care of
                the details so you can focus on earning.
              </p>
              <div className="flex flex-col space-y-5">
                <div className="flex items-center md:space-x-3.5 lg:space-x-5 space-x-[11px]">
                  <TickIcon color="#E87F2B" />
                  <p className="body-regular-16 text-black">
                    Quick and easy to setup
                  </p>
                </div>
                <div className="flex items-center md:space-x-3.5 lg:space-x-5 space-x-[11px]">
                  <TickIcon color="#E87F2B" />
                  <p className="body-regular-16 text-black">
                    In-built client communication gateway
                  </p>
                </div>
                <div className="flex items-center md:space-x-3.5 lg:space-x-5 space-x-[11px]">
                  <TickIcon color="#E87F2B" />
                  <p className="body-regular-16 text-black">
                    Quick responsive customer support
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[304.63px] md:h-[387px] xl:h-[530px]">
              <Image
                src="/images/new-rental-request.png"
                height={246}
                width={564}
                alt="earn-extra-cash"
                className="object-cover h-[304.63px] md:h-[387px] xl:h-[530px]"
              />
            </div>
            <div className="h-[304.63px] md:h-[387px] xl:h-[530px]">
              <Image
                src="/images/active-community.png"
                height={246}
                width={564}
                alt="earn-extra-cash"
                className="object-cover h-[304.63px] md:h-[387px] xl:h-[530px]"
              />
            </div>
            <div className="h-[304.63px] md:h-[387px] xl:h-[530px] flex flex-col justify-center px-8 bg-green-50">
              <h2 className="mb-2 md:mb-2.5 lg:mb-4 body-medium-20 text-green-600">
                Why List your stuff on Miles?
              </h2>
              <h3 className="heading-bold-20 text-black mb-[5px] md:mb-[7.5px] lg:mb-2.5">
                Trusted Community
              </h3>
              <p className="body-regular-16 text-slate-900 mb-4 md:mb-8 lg:mb-11">
                Join a vibrant community of listers and renters, built on
                transparency and trust.
              </p>
              <div className="flex flex-col space-y-5">
                <div className="flex items-center md:space-x-3.5 lg:space-x-5 space-x-[11px]">
                  <TickIcon color="#019D45" />
                  <p className="body-regular-16 text-black">Peace of mind</p>
                </div>
                <div className="flex items-center md:space-x-3.5 lg:space-x-5 space-x-[11px]">
                  <TickIcon color="#019D45" />
                  <p className="body-regular-16 text-black">
                    Secure transactions
                  </p>
                </div>
                <div className="flex items-center md:space-x-3.5 lg:space-x-5 space-x-[11px]">
                  <TickIcon color="#019D45" />
                  <p className="body-regular-16 text-black">
                    Quality connections
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="bg-white flex flex-col py-10 md:pt-[71px] md:pb-[123px]"
        >
          <div className="desc-chip sm:hidden mb-[34px] self-center">
            HOW TO LIST ON MILES
          </div>
          <div className="flex flex-col max-sm:gap-y-5 sm:flex-row flex-start md:space-x-[96.95px] xl:space-x-[178.9px]">
            <Image
              src="/images/iphone-15-pro.png"
              alt="iphone15 pro mockup"
              height={609.29}
              width={298.1}
              className="object-contain md:h-[420px] md:w-[204.9px] xl:w-[298.1px] xl:h-[609.29px] max-sm:self-center"
            />
            <div className="flex flex-col gap-y-5 md:space-y-[38px] xl:space-y-[54px]">
              <div className="desc-chip hidden sm:block">
                HOW TO LIST ON MILES
              </div>
              <div className="flex flex-col space-y-[25px] xl:space-y-[46px] xl:max-w-[569.65px]">
                <div className="flex gap-x-[30px] md:gap-x-10">
                  <Image
                    src="/icons/icon-one.svg"
                    alt="one"
                    width={102.65}
                    height={94.02}
                    className="object-contain w-[61.14px] h-[55.99px] md:w-[73.35px] md:h-[67.17px] xl:w-[102.65px] xl:h-[94.02px]"
                  />
                  <div className="flex flex-col gap-y-1.5 md:gap-y-2.5">
                    <h5 className="heading-bold-20">List your Item</h5>
                    <p className="body-regular-16">
                      Tell us about your item and how much you would like to
                      earn from it
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[30px] md:gap-x-10">
                  <Image
                    src="/icons/icon-two.svg"
                    alt="two"
                    width={102.65}
                    height={94.02}
                    className="object-contain w-[61.14px] h-[55.99px] md:w-[73.35px] md:h-[67.17px] xl:w-[102.65px] xl:h-[94.02px]"
                  />
                  <div className="flex flex-col gap-y-1.5 md:gap-y-2.5">
                    <h5 className="heading-bold-20"> Approve who rents it</h5>
                    <p className="body-regular-16">
                      Tell us about your item and how much you would like to
                      earn from it.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[30px] md:gap-x-10">
                  <Image
                    src="/icons/icon-three.svg"
                    alt="three"
                    width={102.65}
                    height={94.02}
                    className="object-contain w-[61.14px] h-[55.99px] md:w-[73.35px] md:h-[67.17px] xl:w-[102.65px] xl:h-[94.02px]"
                  />
                  <div className="flex flex-col gap-y-1.5 md:gap-y-2.5">
                    <h5 className="heading-bold-20">Start earning</h5>
                    <p className="body-regular-16">
                      Tell us about your item and how much you would like to
                      earn from it
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="flex items-center max-sm:self-center gap-x-4 text-white rounded-[38px] bg-green-500 hover:bg-green-700 p-4 pl-6 w-fit"
              >
                Get started
                <PlayIcon className="md:hidden" />
                <ShortRightArrow className="hidden md:block" />
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-white flex flex-col py-10 md:py-14">
          <div className="flex flex-col gap-y-[7px] md:gap-y-5 self-center items-center text-center mb-[50px] md:mb-[70px] max-w-[650px]">
            <h4 className="header-3">We&apos;ve thought of everything</h4>
            <p className="desc">
              We’re focused on first, but we’re expanding our catalog to a more
              diverse range of items soon. Please check back often to see what
              we offer
            </p>
          </div>
          <div className="flex flex-col gap-y-[30px] sm:flex-row sm:justify-between">
            <div className="flex flex-col sm:max-w-[220.26px] xl:max-w-[310px]">
              <Image
                src="/images/verified-community.jpg"
                alt="verified-community"
                width={310}
                height={257}
                className="object-cover rounded-t-[14.20px] lg:rounded-t-[20px] mb-4.5 lg:mb-[25px] w-full h-[257px]"
              />
              <h5 className="heading-bold-20 mb-2 lg:mb-2.5">
                Verified Community
              </h5>
              <p className="body-regular-16">
                All renters on Miles undergo a rigorous verification process,
                fostering a trustworthy and reliable community
              </p>
            </div>
            <div className="flex flex-col sm:max-w-[220.26px] xl:max-w-[310px]">
              <Image
                src="/images/money-display.jpg"
                alt="instant-payment"
                width={310}
                height={257}
                className="object-cover rounded-t-[20px] mb-[25px] w-full h-[257px]"
              />
              <h5 className="heading-bold-20 mb-2 lg:mb-2.5">
                Instant Payments
              </h5>
              <p className="body-regular-16">
                Every item that you accept a renal request for is insured for
                its full value from the moment it leaves your hand.
              </p>
            </div>
            <div className="flex flex-col sm:max-w-[220.26px] xl:max-w-[310px]">
              <Image
                src="/images/peace-of-mind.jpg"
                alt="peace-of-mind"
                width={310}
                height={257}
                className="object-cover rounded-t-[20px] mb-[25px] w-full h-[257px]"
              />
              <h5 className="heading-bold-20 mb-2 lg:mb-2.5">Peace of mind</h5>
              <p className="body-regular-16">
                Every item that you accept a renal request for is insured for
                its full value from the moment it leaves your hand.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white flex flex-col md:pt-[140px] md:pb-[232px] py-10 relative">
          <div className="flex flex-col gap-y-[7px] max-w-[650px] md:gap-y-5 self-center items-center text-center mb-[50px] md:mb-[70px]">
            <h4 className="header-3">Explore our categories</h4>
            <p className="desc md:-mt-[5px] mb-5 md:mb-[33px]">
              We’re focused on first, but we’re expanding our catalog to a more
              diverse range of items soon. Please check back often to see what
              we offer
            </p>
            <Link
              href="#"
              className="flex items-center gap-x-4 text-white rounded-[38px] bg-green-500 hover:bg-green-700 p-4 pl-6 w-fit"
            >
              Explore now
              <PlayIcon className="md:hidden" />
              <ShortRightArrow className="hidden md:block" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-x-2 md:gap-5 mb-[20.83px] md:mb-[55px]">
            <div className="md:pb-[30px] pb-2.5 md:px-6 px-[7.75px] flex items-end justify-center w-[100px] h-[121px] md:w-[312px] md:h-[375px] rounded-[8.28px] md:rounded-[21.31px] bg-[url('/images/film.jpg')] bg-center bg-cover bg-no-repeat">
              <div className="rounded-[5.82px] md:rounded-[18px] bg-white max-w-[264px] w-full max-md:py-[5.3px] md:h-[71px] flex items-center justify-center">
                <p className="font-normal md:font-medium text-black text-[10px] md:text-base">
                  Film
                </p>
              </div>
            </div>
            <div className="md:pb-[30px] pb-[25.36px] md:px-6 px-[7.75px] flex items-end justify-center w-[131px] h-[157px] md:w-[366px] md:h-[441px] rounded-[8.97px] md:rounded-[25px] bg-[url('/images/electronics.png')] bg-center bg-cover bg-no-repeat">
              <div className="rounded-[5.82px] md:rounded-[18px] bg-white max-w-[264px] w-full max-md:py-[5.3px] md:h-[71px] flex items-center justify-center">
                <p className="font-normal md:font-medium text-black text-[10px] md:text-base">
                  Electronics
                </p>
              </div>
            </div>
            <div className="md:pb-[30px] pb-2.5 md:px-6 px-[7.75px] flex items-end justify-center w-[100px] h-[121px] md:w-[312px] md:h-[375px] rounded-[8.28px] md:rounded-[21.31px] bg-[url('/images/photography.jpg')] bg-center bg-cover bg-no-repeat">
              <div className="rounded-[5.82px] md:rounded-[18px] bg-white max-w-[264px] w-full max-md:py-[5.3px] md:h-[71px] flex items-center justify-center">
                <p className="font-normal md:font-medium text-black text-[10px] md:text-base">
                  Photography
                </p>
              </div>
            </div>
          </div>
          <div className="relative md:-mb-[467px] rounded-[14.03px] md:rounded-[37.82px] md:max-w-[641px] xl:max-w-[801px] w-full self-center py-6 md:pt-10 md:pb-7 xl:pt-[54px] xl:pb-9 flex flex-col items-center text-center md:bg-[url('/images/our-mission-bg.png')] bg-[url('/images/our-mission-mobile.png')] bg-center bg-cover bg-no-repeat">
            <h4 className="heading-bold-30 mb-9">Our Mission</h4>

            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-4.5 rounded-md md:rounded-2xl xl:rounded-[20px] py-[5px] px-2.5 md:py-3 md:px-6 xl:py-[15px] xl:px-[30px] bg-white mb-[15px] w-fit">
                <Image
                  src="/icons/mission-1.svg"
                  width={39}
                  height={41}
                  alt="mission"
                  className="xl:h-[41px] xl:w-[38.98px] md:w-[31.2px] md:h-[32.81px] w-3.5 h-[14.79px]"
                />

                <p className="body-regular-16">
                  Build a highly engaged audience
                </p>
              </div>
              <div className="flex items-center space-x-4.5 rounded-md md:rounded-2xl xl:rounded-[20px] py-[5px] px-2.5 md:py-3 md:px-6 xl:py-[15px] xl:px-[30px] bg-white mb-2.5 w-fit">
                <Image
                  src="/icons/mission-2.svg"
                  width={39}
                  height={41}
                  alt="mission"
                  className="xl:h-[41px] xl:w-[38.98px] md:w-[31.2px] md:h-[32.81px] w-3.5 h-[14.79px]"
                />

                <p className="body-regular-16">Close more clients</p>
              </div>
              <div className="flex items-center space-x-4.5 rounded-md md:rounded-2xl xl:rounded-[20px] py-[5px] px-2.5 md:py-3 md:px-6 xl:py-[15px] xl:px-[30px] bg-white w-fit">
                <Image
                  src="/icons/mission-3.svg"
                  width={39}
                  height={41}
                  alt="mission"
                  className="xl:h-[41px] xl:w-[38.98px] md:w-[31.2px] md:h-[32.81px] w-3.5 h-[14.79px]"
                />

                <p className="body-regular-16">Get more leads</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}

function MilesCard({
  bgColor,
  title,
  titleColor,
  desc,
  src,
  alt,
  width,
  height,
}: {
  bgColor: string;
  title: string;
  titleColor: string;
  desc: string;
  src: string;
  alt: string;
  width: string;
  height: string;
}) {
  return (
    <div
      className={`flex flex-col md:py-[29px] md:px-[34px] md:h-[425px] max-w-[327px] md:rounded-[27.25px] ${bgColor}`}
    >
      <p
        className={`${titleColor} text-base md:text-2xl font-bold mb-[7px] md:mb-4 order-2 md:order-none`}
      >
        {title}
      </p>
      <p className="text-slate-900 text-xs md:text-base md:mb-[68.62px] order-3 md:order-none">
        {desc}
      </p>
      <div
        className={`md:self-center ${width} ${height} order-1 md:order-none mb-5 md:mb-0 relative`}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
