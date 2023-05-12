import Link from "next/link"

function MainNavigation() {

      

    return <nav className="fixed h-[70px] w-full bg-black z-50 text-white flex items-center justify-between">
        <Link className="text-2xl text-green-500 pl-4" href="/">Songify</Link>
        <input className="w-[50%] p-2 bg-neutral-900 rounded-xl" />
            {/* <ul className="flex flex-row justify-end items-center mr-20">
                    <>
                        <li className="pr-2">
                            <img className="rounded-full w-[50px] h-[50px]" src= alt="User profile"/>
                        </li>
                        <li>
                            <p>{user.display_name}</p>
                        </li>
                    </>
                )}
            </ul> */}
    </nav>
}

export default MainNavigation;