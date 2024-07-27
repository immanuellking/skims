import Image from "next/image";

export default function EmptyCart({ text }: { text: string }) {
  return (
    <section className="h-[65vh] flex flex-col items-center justify-center">
      <Image
        src="/emptycart.webp"
        width={350}
        height={350}
        alt="empty-cart-image"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-[#62554a] text-2xl font-medium text-center">
          {text}
        </h1>
        <button className="h-12 w-72 bg-[#62554a] hover:bg-[#998676] text-sm text-white uppercase rounded-sm mt-2 transition-all duration-200 flex items-center justify-center">
          Continue Shopping
        </button>
      </div>
    </section>
  );
}
