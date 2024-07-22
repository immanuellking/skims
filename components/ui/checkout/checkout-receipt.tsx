import { urlForImage } from "@/sanity/lib/image";
import { CartType } from "@/typing";
import Image from "next/image";

export function Receipt({ cart, total }: { cart: CartType[]; total: number }) {
    return (
      <section className="w-[50%]">
        <div className="space-y-4 py-2">
          {cart.map((item) => (
            <div key={item.id} className="flex">
              <div className="relative w-[5rem]">
                <Image src={urlForImage(item.image)} alt="cart-item-image" fill />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="capitalize font-medium">
                  {item.tag} {item.name}
                </h2>
                <p className="text-sm text-gray-700">
                  {" "}
                  &#8358;{item.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-70">Qnty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="py-4 flex justify-between border-t border-gray-300">
          <h4 className="text-lg font-medium">Total</h4>
          <p>&#8358;{total.toLocaleString()}</p>
        </div>
      </section>
    );
  }