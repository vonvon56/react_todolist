import { MdAdd } from "react-icons/md";
import "./TodoCreate.scss";
import { useState } from "react";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className="insert-form-positioner">
          <form className="insert-form">
            <input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요" />
          </form>
        </div>
      )}

      <button className="circle-button" onClick={() => setOpen(!open)}>
        <MdAdd />
      </button>
    </>
  );
}

export default TodoCreate;
