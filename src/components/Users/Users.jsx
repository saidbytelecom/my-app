import React from "react";
import s from "./Users.module.css";


let Users = (props) => {
    return <div className={s.users}>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyDSfTyTv1OK4X17b3gjyfTBzA-Cgg0UcLp1nlrmR_X_eB-eGjGmumX9_HwsafglidzM&usqp=CAU" />
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </span>

            </div>)
        }
    </div>
}

export default Users;