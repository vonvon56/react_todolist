import { useState } from "react";
import { MdDone, MdDelete } from "react-icons/md";
import "./TodoItem.scss";

function TodoItem() {
  const [isRemoveIconVisible, setIsRemoveIconVisible] = useState(false);

  return (
    <div
      className="item-block"
      onMouseEnter={() => setIsRemoveIconVisible(true)}
      onMouseLeave={() => setIsRemoveIconVisible(false)}
    >
      <div className="check-circle"></div>
      <div className="text">세미나 잘 듣기</div>
      <div
        className="remove-icon"
        style={{ display: isRemoveIconVisible ? "initial" : "none" }}
      >
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;
