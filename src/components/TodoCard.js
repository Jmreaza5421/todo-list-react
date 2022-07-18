import { useState } from "react";
import Backdrop from "./Backdrop";
import DetailsModal from "./DetailsModal";
let statusClassName = "black-status"
function TodoCard(props) {
 
const [isDetailsModal, setIsDetailsModal] = useState(false);

    const [isDone , setIsDone] = useState ("Doing")
    function onDoneHandler (){
        setIsDone("Done");
        statusClassName = "green-status"
        setIsDetailsModal(false); 
    }
    function unDoneHandler (){
       statusClassName = "red-status"
        setIsDone("unDone");
        setIsDetailsModal(false); 
    }
    function detailsModalHandler (){
        setIsDetailsModal(true);
    }
    function closeHandler (){
      setIsDetailsModal(false); 
    }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={detailsModalHandler} >
        details
        </button>
        
        <h3 className={statusClassName} > {isDone}</h3>
        {isDetailsModal && <DetailsModal onDone={onDoneHandler}  unDone= {unDoneHandler} isTitle= {props.title} />}
        {isDetailsModal && <Backdrop onClose={closeHandler}  />}
    </div>
    </div>
    
  );
}
export default TodoCard;
