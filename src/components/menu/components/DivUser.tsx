import { useSession } from 'next-auth/react';
import IconUser from 'public/icons/IconUser'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

interface Iprops {
    setCerrar: Dispatch<SetStateAction<boolean>>
    cerrar: boolean
    setModalLogin: (value: boolean) => void;
    handleSignOut: () => void
}
export const DivUser = ({ cerrar, setCerrar, setModalLogin, handleSignOut }: Iprops) => {
    const [user, setUser] = useState();
    const { status, data } = useSession();
    const WrapperShowLogout = useRef<HTMLDivElement>(null);

    // const handleHideDropdown = (event: KeyboardEvent) => {
    //     if (event.key === "Escape") {
    //         setCerrar(false);
    //     }
    // };

    const handleClickOutside = (event: Event) => {
        if (
            WrapperShowLogout.current &&
            !WrapperShowLogout.current.contains(event.target as Node)
        ) {
            setCerrar(false);
            // handleSignOut()
        }
    };

    useEffect(() => {
        // document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            // document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", () => setCerrar(false), true)
        return () => {
            document.addEventListener("scroll", () => setCerrar(false), true)
        };
    }, [])
    return (
        <div
            className='relative p-1 cursor-pointer'
            // ref={WrapperShowLogout}
            onClick={() => {
                if (status === "unauthenticated") {
                    setModalLogin(true)
                } else {
                    setCerrar(!cerrar)
                }
            }}
        >
            <IconUser height={25} width={25} />
            {status === "authenticated" && (
                <>
                    {cerrar && (
                        // <div className="relative mx-auto my-0 w-[90%] xl:w-[1280px] container ">
                        <div className="absolute bg-slate-100 rounded-lg z-50 w-60 p-5 top-16 -right-24 lg:-right-2"
                        >
                            <div className=" justify-center lg:justify-end  lg:-left-4 w-full absolute -top-2.5 left-0 z-50 flex">
                                <div className="h-5 w-5 bg-slate-100 rotate-45"></div>
                            </div>

                            <button
                                className="bg-red-500 mt-5 rounded-lg w-full py-3 text-white font-bold"
                                onClick={() => handleSignOut()}
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                        // </div>
                    )}
                </>
            )}
        </div>
    )
}
