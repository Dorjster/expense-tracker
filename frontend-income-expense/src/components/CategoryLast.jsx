import { IoIosAddCircle } from "react-icons/io";
import { useContext } from "react";
import { AddCategoryContext } from "./Providers/AddCategoryProvider";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

export const Cate = () => {
  const { showCategory, setShowCategory } = useContext(AddCategoryContext);
  return (
    <div className="modal-overlay">
      <div
        className="modal-box overflow-hidden fixed index-20 "
        style={{ width: "600px", maxWidth: "100%", height: "330px" }}
      >
        <div className="flex justify-between">
          <h4 className="font-bold text-xl">Add Category</h4>
          <div onClick={() => setShowCategory(true)}><IoCloseSharp/></div>
        </div>

        <div className="flex p-10 gap-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              <MdHomeFilled />
              <IoMdArrowDropdown />
            </div>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
            >
              <div className="card-body">
                <h3 className="card-title">Card title!</h3>
                <p>you can use any element as a dropdown.</p>
              </div>
            </div>
          </div>

          <select className="select w-[300px] bg-slate-100">
            <option selected>Write Here</option>
            <option>Here</option>
            <option>Write</option>
            <option>Write Here</option>
            <option>Write Here</option>
            <option>Write Here</option>
          </select>
        </div>
        <button
          className="btn btn-primary w-[400px] rounded-[20px]"
          // onClick={nextHandle}
        >
          Add
        </button>
      </div>
    </div>
  );
};
