import React from "react";
import { RiFundsLine } from "react-icons/ri";
import { MdInventory2,MdLocalShipping } from "react-icons/md";
import { FcMoneyTransfer , FcShop ,FcCalculator} from "react-icons/fc";
import { GiReturnArrow } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { BsShop } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";


const Menu = () => {
  return (
    <>
      <div className="w-2/12 h-screen mt-2 bg-white">
      <ul className="menu w-full p-0 text-xl text-gray-600">
        <li className="bg-violet-300 hover:text-violet-1000 rounded-xl action:bg-violet-300">
          <a><RiFundsLine size={"2rem"}/>Dashboard</a>
        </li>
        <li>
          <a><MdInventory2 size={"2rem"} />Inventory</a>
        </li>
        <li>
          <a><FcMoneyTransfer size={"2rem"}/> Order</a>
        </li>
        <li>
            <a href=""><GiReturnArrow size={"2rem"} />Return</a>
        </li>
        <li>
            <a href=""><IoIosPeople size={"2rem"} />Customers</a>
        </li>
        <li>
            <a href=""><MdLocalShipping size={"2rem"} />  Shopping</a>
        </li>
        <li>
            <a href=""><FcShop size={"2rem"} />Channel</a>
        </li>
        <li>
            <a href=""><BsShop size={"2rem"} />Integration</a>
        </li>
        <li>
            <a href=""><FcCalculator size={"2rem"} />Calculation</a>
        </li>
        <li>
            <a href=""><TbReportSearch size={"2rem"} />Reports</a>
        </li>
        <li><a href=""><IoSettings size={"2rem"} />Account</a>
        </li>
      </ul>

      </div>
    </>
  );
};

export default Menu;
