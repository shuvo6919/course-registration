import Cart from "../Cart/Cart";

const Carts = ({ carts }) => {
  let toTalPrice = 0;
  let totalCreditHour = 0;
  carts.forEach((cart) => {
    toTalPrice += cart.price;
    totalCreditHour += cart.credit;
  });

  return (
    <div className=" md:w-1/4 md:ms-4">
      <div className="bg-white rounded-xl p-4 shadow-xl sticky top-0 ">
        <h1 className="text-lg font-bold text-blue-600 border-b-2 border-slate-500 pb-4 mb-4">
          Credit hour remaining {20 - totalCreditHour} hr
        </h1>
        <h1 className="text-xl font-bold mb-4">Course Name</h1>
        <div className="border-b-2 border-slate-500 pb-4 mb-4">
          {carts.map((cart, idx) => (
            <Cart key={idx} idx={idx} cart={cart}></Cart>
          ))}
        </div>
        <h3 className="text-md text-slate-700 font-semibold border-b-2 border-slate-500 pb-4 mb-4">
          Total Credit Hour :{totalCreditHour}
        </h3>
        <h3 className="text-md text-slate-700 font-semibold ">
          Total Price : {toTalPrice} USD
        </h3>
      </div>
    </div>
  );
};

export default Carts;
