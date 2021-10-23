import React from "react";
import XmukiTest from "./XmukiTest/XmukiTest";

const Xmuki = () => { 
    const [visibleList, setVisibleList] = React.useState(true)
    const toggleVisibleList = () => {
        setVisibleList(visible => !visible);
    }
    return(
       <div>
           {visibleList && <XmukiTest />}
           <button onClick={toggleVisibleList}>Показать / Скрыть список</button>
       </div>
    )
}

export default Xmuki;