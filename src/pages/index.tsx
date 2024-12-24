import React, {FC} from "react";
import Header from "../components/Header";
import SearchWidget from "../components/SearchWidget";
import BottomNavigation from "../components/BottomNavigation";

const MainPage: FC = () => {
    return (
        <div className={"w-[400px] drop-shadow-main border border-dark-border mx-auto relative h-screen overflow-y-auto bg-dark-border rounded-2xl"}>
            <Header/>
            <div className={"px-4"}>
                <SearchWidget
                    className={"mt-[-33px]"}
                />
                <BottomNavigation
                    className={"absolute left-4 right-4 bottom-6"}
                />
            </div>
        </div>
    )
}

export default MainPage;
