import React, {FC} from "react";
import {VectorIconModel} from "../../core/interfaces/common.interfaces";

const ArrowIcon: FC<VectorIconModel> = (props) => {

    const {
        width,
        height,
        className
    } = props;

    return (
        <svg className={className} width={width || "16"} height={height || "17"} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.42773 5.20898C5.46387 5.35254 5.53809 5.48828 5.65039 5.60059L8.54932 8.5L5.64893 11.4004C5.31689 11.7324 5.31689 12.2705 5.64893 12.6025C5.98096 12.9336 6.51904 12.9336 6.85107 12.6025L10.3516 9.10059C10.5591 8.89355 10.6367 8.60449 10.585 8.33691C10.5537 8.17578 10.4761 8.02246 10.3516 7.89844L6.85254 4.39941C6.52051 4.06738 5.98242 4.06738 5.65039 4.39941C5.43066 4.61816 5.35645 4.92871 5.42773 5.20898Z"
                fill="#24FFBC"/>
        </svg>
    )
}

export default ArrowIcon;