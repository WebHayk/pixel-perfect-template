import React, {FC} from "react";
import {VectorIconModel} from "../../core/interfaces/common.interfaces";

const SearchIcon: FC<VectorIconModel> = (props) => {

    const {
        width,
        height,
        className
    } = props;

    return (
        <svg className={className} width={width || "16"} height={height || "17"} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.5 12.625C10.0543 12.625 12.125 10.5543 12.125 8C12.125 5.44568 10.0543 3.375 7.5 3.375C4.94568 3.375 2.875 5.44568 2.875 8C2.875 10.5543 4.94568 12.625 7.5 12.625Z"
                stroke="#24FFBC" strokeWidth="1.75"/>
            <path
                d="M13.3813 15.1187C13.723 15.4604 14.277 15.4604 14.6187 15.1187C14.9604 14.777 14.9604 14.223 14.6187 13.8813L13.3813 15.1187ZM10.3813 12.1187L13.3813 15.1187L14.6187 13.8813L11.6187 10.8813L10.3813 12.1187Z"
                fill="#24FFBC"/>
        </svg>
    )
}

export default SearchIcon;