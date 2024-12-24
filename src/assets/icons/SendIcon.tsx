import React, {FC} from "react";
import {VectorIconModel} from "../../core/interfaces/common.interfaces";

const SendIcon: FC<VectorIconModel> = (props) => {

    const {
        width,
        height,
        className
    } = props;

    return (
        <svg className={className} width={width || "17"} height={height || "16"} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M4.563 14.605L13.919 9.20301C14.919 8.62601 14.919 7.18301 13.919 6.60501L4.563 1.20301C4.3349 1.07131 4.07615 1.002 3.81276 1.00204C3.54938 1.00209 3.29064 1.07148 3.06259 1.20325C2.83453 1.33501 2.64519 1.52451 2.5136 1.75267C2.38202 1.98083 2.31283 2.23962 2.313 2.50301V13.306C2.31283 13.5694 2.38202 13.8282 2.5136 14.0563C2.64519 14.2845 2.83453 14.474 3.06259 14.6058C3.29064 14.7375 3.54938 14.8069 3.81276 14.807C4.07615 14.807 4.3349 14.7377 4.563 14.606V14.605ZM6.51 8.38701L2.313 9.51201V6.29701L6.51 7.42001C7.004 7.55301 7.004 8.25401 6.51 8.38601V8.38701Z"
                  fill="#24FFBC"/>
        </svg>

    )
}

export default SendIcon;
