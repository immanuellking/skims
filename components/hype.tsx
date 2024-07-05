export default function Hype() {
  return (
    <section className="w-full flex flex-col items-center gap-10 xs:gap-y-12 lg:gap-y-16">
      <div>
        <p className="uppercase w-[90%] xs:w-[85%] lg:w-[80%] mx-auto lg:text-3xl xs:text-2xl text-xl font-semibold text-[#62554A] text-center">
          believe the hype
          <br />
          our collections have over 100,000 five star reviews, and counting!{" "}
        </p>
      </div>
      <iframe
        className="w-[90%] lg:w-[50rem] h-[25rem]"
        src="https://www.youtube.com/embed/qSMCWiRUB64?si=ln4VkbiwBFccoFV4?controls=0"
      ></iframe>
      <div>
        <p className="uppercase w-[90%] xs:w-[85%] lg:w-[80%] mx-auto lg:text-3xl xs:text-2xl text-xl font-semibold text-[#62554A] text-center">
          SKIMS IS A SOLUTIONS ORIENTED BRAND CREATING THE NEXT GENERATION OF
          UNDERWEAR, LOUNGEWEAR AND SHAPEWEAR.
        </p>
      </div>
    </section>
  );
}
