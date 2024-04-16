const Cart = ({ cart, idx }) => {
  return (
    <div>
      <p className="text-slate-500 text-sm mb-2">
        {idx + 1}. {cart.title}
      </p>
    </div>
  );
};

export default Cart;
