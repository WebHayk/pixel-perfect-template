import React, {FC} from "react";
import {VectorIconModel} from "../../core/interfaces/common.interfaces";

const MessagesIcon: FC<VectorIconModel> = (props) => {

    const {
        width,
        height,
        className
    } = props;

    return (
        <svg className={className} width={width || "24"} height={height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_14_198" maskUnits="userSpaceOnUse" x="2" y="2" width="20"
                  height="21">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V20.806C22 22.141 20.387 22.811 19.441 21.868L15.56 18H5C4.20435 18 3.44129 17.6839 2.87868 17.1213C2.31607 16.5587 2 15.7956 2 15V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19Z"
                      fill="#F5F5F5"/>
            </mask>
            <g mask="url(#mask0_14_198)">
                <path
                    d="M19.441 21.868L20.641 20.664L19.441 21.868ZM15.56 18V16.3H16.262L16.76 16.796L15.56 18ZM20.3 5C20.3 4.65522 20.163 4.32456 19.9192 4.08076C19.6754 3.83696 19.3448 3.7 19 3.7V0.299999C20.2465 0.299999 21.442 0.795176 22.3234 1.6766C23.2048 2.55802 23.7 3.75348 23.7 5H20.3ZM20.3 13.956V5H23.7V13.956H20.3ZM20.3 16.5V13.956H23.7V16.5H20.3ZM20.3 20.806V16.5H23.7V20.806H20.3ZM20.641 20.664C20.6113 20.639 20.5757 20.6219 20.5375 20.6144C20.4994 20.6069 20.46 20.6092 20.423 20.621C20.3884 20.6388 20.359 20.6651 20.3374 20.6975C20.3159 20.7299 20.303 20.7672 20.3 20.806H23.7C23.7 23.654 20.259 25.083 18.241 23.073L20.641 20.664ZM16.759 16.796L20.641 20.664L18.241 23.073L14.359 19.204L16.759 16.796ZM5 16.3H15.559V19.7H5V16.3ZM3.7 15C3.7 15.3448 3.83696 15.6754 4.08076 15.9192C4.32456 16.163 4.65522 16.3 5 16.3V19.7C3.75348 19.7 2.55802 19.2048 1.6766 18.3234C0.795177 17.442 0.3 16.2465 0.3 15H3.7ZM3.7 5V15H0.3V5H3.7ZM5 3.7C4.65522 3.7 4.32456 3.83696 4.08076 4.08076C3.83696 4.32456 3.7 4.65522 3.7 5H0.3C0.3 3.75348 0.795177 2.55802 1.6766 1.6766C2.55802 0.795176 3.75348 0.299999 5 0.299999V3.7ZM19 3.7H5V0.299999H19V3.7Z"
                    fill="#F5F5F5"/>
            </g>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M17 7C17.2254 7 17.4416 7.08955 17.601 7.24896C17.7604 7.40836 17.85 7.62457 17.85 7.85C17.85 8.07543 17.7604 8.29164 17.601 8.45104C17.4416 8.61045 17.2254 8.7 17 8.7H7C6.88838 8.7 6.77785 8.67801 6.67472 8.6353C6.57159 8.59258 6.47789 8.52997 6.39896 8.45104C6.32003 8.37211 6.25742 8.27841 6.2147 8.17528C6.17199 8.07215 6.15 7.96162 6.15 7.85C6.15 7.73838 6.17199 7.62785 6.2147 7.52472C6.25742 7.42159 6.32003 7.32789 6.39896 7.24896C6.47789 7.17003 6.57159 7.10742 6.67472 7.0647C6.77785 7.02199 6.88838 7 7 7H17ZM12 11C12.2254 11 12.4416 11.0896 12.601 11.249C12.7604 11.4084 12.85 11.6246 12.85 11.85C12.85 12.0754 12.7604 12.2916 12.601 12.451C12.4416 12.6104 12.2254 12.7 12 12.7H7C6.77457 12.7 6.55837 12.6104 6.39896 12.451C6.23955 12.2916 6.15 12.0754 6.15 11.85C6.15 11.6246 6.23955 11.4084 6.39896 11.249C6.55837 11.0896 6.77457 11 7 11H12Z"
                  fill="#F5F5F5"/>
        </svg>
    )
}

export default MessagesIcon;
