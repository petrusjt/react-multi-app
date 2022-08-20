import React from "react";
import { Link } from "react-router-dom";

type Props = {
    link: string,
    title: string,
    children: any
}

export function ComponentRouteLink({link, title, children}: Props) {
    return (
        <div className="w-full lg:w-3/4">
            <Link to={link}>
                <div className="modul-card">
                    <div className="text-lg font-bold font-sans">{title}</div>
                    <div className="bg-black w-full h-[1px]"></div>
                    <div className="pt-2">{children}</div>
                </div>
            </Link>
        </div>
    )
}