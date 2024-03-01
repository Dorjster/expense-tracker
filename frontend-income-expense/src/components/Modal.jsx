import React from "react";

import { useState } from "react";
import { IoIosClose } from "react-icons/io";

export const Modal = ({ onClose }) => {
  const [button, setButton] = useState(true);
  const [value, setValue] = useState("Income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const [payee, setPayee] = useState("");
  const [note, setNote] = useState("");

  const handleClick = () => {
    setButton(!button);
  };

  const handleGetValue = (value) => {
    setValue(value);
    console.log(value);
  };

  const handleAddRecord = () => {
    console.log("Amount:", amount);
    console.log("Category:", category);
    console.log("Payee:", payee);
    console.log("Note:", note);
  };

  return (
    <div id="my_modal_3" className="modal-overlay">
      <div
        className="modal-box overflow-hidden "
        style={{ width: "1000px", maxWidth: "100%", height: "530px" }}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-[20px]">Add Record</h3>
          <button
            onClick={onClose}
            className="close-button text-[30px] cursor-pointer"
          >
            <IoIosClose />
          </button>
        </div>

        <hr className="w-[120%] absolute left-0 my-5" />
        <div className="flex w-full mt-10 justify-between">
          <div className="w-[48%]">
            <div className="w-full flex rounded-full bg-[#F3F4F6]">
              <button
                className="rounded-full bg-[#0166FF] w-[50%] h-[40px] flex justify-center items-center text-white font-semibold text-[15px] px-[10px] py-2"
                style={{
                  backgroundColor: button ? "#0166FF" : "#F3F4F6",
                  color: button ? "white" : "black",
                }}
                value="Income"
                onClick={() => {
                  handleClick();
                  handleGetValue("Income");
                }}
              >
                Income
              </button>
              <button
                className="rounded-full bg-slate-200 w-[50%] flex justify-center items-center text-white font-semibold text-[15px] px-[10px] py-2"
                style={{
                  backgroundColor: button ? "#F3F4F6" : "#16A34A",
                  color: button ? "black" : "white",
                }}
                value="Expense"
                onClick={() => {
                  handleClick();
                  handleGetValue("Expense");
                }}
              >
                Expense
              </button>
            </div>
            <div className="relative mt-6 w-full py-5">
              <label className="absolute top-3 ml-5 z-10">Amount</label>
              <input
                type="number"
                placeholder="₮ 000.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-slate-100 p-5 absolute top-0 h-[76px] rounded-xl w-full pt-12"
              />
            </div>
            <div className="mt-6 w-full py-5 flex flex-col gap-2">
              <label className="">Category</label>
              <div className="flex flex-col gap-2">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select w-full bg-slate-100 "
                >
                  <option selected>Choose</option>
                  <option>Write Here</option>
                  <option>Write Here</option>
                  <option>Write Here</option>
                  <option>Write Here</option>
                  <option>Write Here</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className=" flex flex-col w-[50%]">
                <label className="">Date</label>
                <input
                  type="date"
                  className="bg-[#F3F4F6] p-2 border-2 rounded-xl "
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label className="">Time</label>
                <input
                  type="time"
                  className="bg-[#F3F4F6] p-2 border-2 rounded-xl"
                />
              </div>
            </div>
            <button
              className="rounded-full bg-[#0166FF] w-full text-white text-[15px] px-[10px] py-2 mt-[46px]"
              style={{ backgroundColor: button ? "#0166FF" : "#16A34A" }}
            >
              Add Record
            </button>
          </div>
          <div className="w-[48%] flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p>Payee</p>
              <select
                value={payee}
                onChange={(e) => setPayee(e.target.value)}
                className="select w-full bg-slate-100"
              >
                <option selected>Write Here</option>
                <option>Write Here</option>
                <option>Write Here</option>
                <option>Write Here</option>
                <option>Write Here</option>
                <option>Write Here</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <p>Note</p>
              <textarea
                className="textarea w-full bg-slate-100 h-[268px]"
                style={{ resize: "none" }}
                placeholder="Write Here"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
