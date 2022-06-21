import React from "react";
export default class Avatar extends React.Component {

    render() {
        return (
            <div className="flex items-center flex-col">
                <img src="../images/me.jpg" className="border-4 border-white object-cover w-[180px] h-[180px] rounded-full mb-5" alt="Fauzan Galib" />
                <p className="text-4xl font-bold">Fauzan Galib</p>
                <p className="text-lg">Web Developer</p>
            </div>
        )
    }

}