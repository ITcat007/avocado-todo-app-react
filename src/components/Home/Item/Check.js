import React from "react"; 
import {BsCheckLg} from "react-icons/bs";
import CheckCSS from './Check.module.css';

function Check({isCompleted}){
    return(
        <div className={isCompleted? CheckCSS.success: CheckCSS.empty}>
            {
                isCompleted &&
                <BsCheckLg size={16} color={'#191e2c'}/>
            }
        </div>
    )
}
export default Check;