import { CartType } from "@/typing";

export default function Checkout({
  cart,
  total,
}: {
  cart: CartType[];
  total: number;
}) {
  return (
    <section className="w-full sm:w-[43%] lg:w-[40%] shadow px-4 pb-4 rounded">
      <div className="border-b border-gray-500/40 pt-4 pb-2">
        <h1 className="text-xl sm:text-2xl font-semibold uppercase">Order summary</h1>
      </div>
      <div className="py-4 space-y-2">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <p className="text-sm sm:text-base capitalize line-clamp-1">
              <span>{item.quantity}x </span>
              {item.tag + " " + item.name}
            </p>
            <p className="text-base sm:text-lg font-medium">
              &#8358;{item.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <div className="border-y border-gray-500/40 flex justify-between items-center py-6">
        <h5 className="text-base sm:text-lg font-semibold uppercase">Total</h5>
        <p className="text-base sm:text-lg font-medium">&#8358;{total.toLocaleString()}</p>
      </div>

      <button className="h-12 w-full bg-[#62554a] hover:bg-[#998676] text-sm text-white uppercase rounded-lg mt-5 transition-all duration-200">
        Proceed To Checkout
      </button>
    </section>
  );
}
