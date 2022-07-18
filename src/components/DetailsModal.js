function DetailsModal(props) {
  // const title = sessionStorage.getItem("title");
const title = props.isTitle;
let details = "No Details";

switch (title){
    case "Fix Car":
        details = "Car repair shop tomorrow morning";
        break;

    case "Send an invoice":
        details="Invoice sent on Monday"
        break;
  
    default:
            details="No Details";
           
            
}



console.log(title);
  function onDoneHandler() {
    props.onDone();
  }
  function unDoneHandler() {
    props.unDone();
  }
  // console.log(title);
  return (
    <div className="modal">
      <h2>{title}</h2>
      <p>{details}
      
      </p>
      <button className="btn" onClick={onDoneHandler}>
        Done
      </button>
      <button className="btn" onClick={unDoneHandler}>
        UnDone
      </button>
    </div>
  );
}
export default DetailsModal;
