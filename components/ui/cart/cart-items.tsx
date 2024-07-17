import { urlForImage } from "@/sanity/lib/image";
import { CartType } from "@/typing";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";

export default function CartItems({
  cart,
  increaseItem,
  decreaseItem,
  deleteItem,
}: {
  cart: CartType[];
  increaseItem: (id: string) => void;
  decreaseItem: (id: string) => void;
  deleteItem: (id: string) => void;
}) {
  return (
    <section className="w-full sm:w-[55%] space-y-6 xs:space-y-8">
      {cart.map((item) => (
        <div
          key={item.id}
          className="relative flex w-auto p-4 justify-between shadow"
        >
          <div className="flex">
            <div className="relative w-[8rem] h-[8rem]  xs:w-[9rem] xs:h-[9rem]">
              <Image src={urlForImage(item.image)} alt="cart-item-image" fill />
            </div>
            <div className="flex flex-col gap-y-4 sm:gap-y-8">
              <div className="uppercase">
                <h4 className="text-[13px] lg:text-sm text-gray-400 font-medium">
                  {item.tag}
                </h4>
                <h1 className="line-clamp-1 text-base lg:text-[18px] font-semibold">
                  {item.name}
                </h1>
              </div>
              <div className="flex w-[150px] xs:w-[180px] rounded border border-gray-300/50">
                <button
                  className="text-lg basis-1/3 hover:bg-[#F3EEE5] md:text-xl border-r border-gray-300/50 h-[35px] md:h-[50px] flex items-center justify-center"
                  onClick={() => decreaseItem(item.id)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                  </svg>
                </button>
                <button className="text-lg basis-1/3 md:text-xl h-[35px] md:h-[50px] flex items-center justify-center">
                  {item.quantity}
                </button>
                <button
                  className="text-lg basis-1/3 hover:bg-[#F3EEE5] md:text-xl border-l border-gray-300/50 h-[35px] md:h-[50px] flex items-center justify-center"
                  onClick={() => increaseItem(item.id)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M256 112v288m144-144H112"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex flex-col justify-between items-end">
            <div>
              <span className="text-xs text-gray-400">
                &#8358;{item.price.toLocaleString()} x {item.quantity}
              </span>
              <p className="text-[18px] lg:text-xl font-semibold">
                &#8358;{item.total.toLocaleString()}
              </p>
            </div>
            <div
              className="bg-red-600 h-[40px] w-[40px] flex justify-center items-center rounded cursor-pointer"
              onClick={() => deleteItem(item.id)}
            >
              <RiDeleteBinLine className="text-xl text-white" />
            </div>
          </div>
          <div
            className="absolute bottom-1 right-1 bg-red-600 h-[35px] w-[35px] xs:h-[40px] xs:w-[40px] flex justify-center items-center sm:hidden rounded cursor-pointer"
            onClick={() => deleteItem(item.id)}
          >
            <RiDeleteBinLine className="text-xl text-white" />
          </div>
        </div>
      ))}
    </section>
  );
}
