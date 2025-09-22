//I have Created modal component so that i can ensure once again from 
// the user whether he really wants to delete the feedback or not

function ModalComponent({  onConfirm, onCancel }) {
  return (
    //Outer div which will make background little black 
    //and inside it we have Inner div which contains two buttons Yes and No
    <div style={{
      position: "fixed", top:0, left:0, width:"100%", height:"100%",
      backgroundColor:"rgba(0,0,0,0.5)", display:"flex", 
      justifyContent:"center", alignItems:"center",zIndex:"1"
    }}>
      <div style={{ backgroundColor:"white", padding:"20px",  
       borderRadius:"8px", minWidth:"300px", textAlign:"center" }}>
        <p>Are you sure you want to delete it</p>
        <button onClick={onConfirm} style={{ marginRight:"10px" }}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>u
    </div>
  );
}

export default ModalComponent;
