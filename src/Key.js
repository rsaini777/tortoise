import React from "react";


function Key({ keyVal, bigKey,setInput,onClick }) {

   
  
    const onDelete=()=>{
        setInput("");
    }

  const selectLetter = () => {
    if(keyVal=="DELETE"){
        onDelete()
    }else if(keyVal=="ENTER"){
        onClick()
    }else{
    setInput(keyVal)
    }
    
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" :  "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
