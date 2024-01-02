import Customerdetail from "../components/Customerdetail";
import Orderdetail from "../components/Orderdetail";

const Checkout = () => {
  return (
    <div className=" p-5 shadow-2xl border bg-blue-200">

      <div className="lg:flex">
      <Orderdetail />
        <Customerdetail />

      </div>
    </div>
  );
};

export default Checkout;
