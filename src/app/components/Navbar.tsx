'use client';

import React, {Fragment} from "react";
import {  useSession, signOut } from "next-auth/react";
import { Menu, Transition } from '@headlessui/react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const session = useSession();
    return (
    <nav className="w-full">
        <div className="bg-background rounded-lg p-3 w-full h-20sticky top-0 mt-12">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <div  className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
                            <path fill="#ffffff" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                        </svg>
                    </div>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-white sm:text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                </svg>
                            </span>
                        </div>
                        <input type="text" name="searchPlaylist" id="searchPlaylist" 
                            className="block w-full rounded-full bg-accentBackground border-0 py-1.5 pl-8 pr-20 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            placeholder="Search playlist" />
                    </div>
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="group flex items-center cursor-pointer">
                            <p className="mx-2 group-hover:text-green">{session.data?.user?.name}</p>
                            <img className="w-10 h-10 rounded-full border-2 border-black " src={session.data?.user?.image ? session.data?.user?.image : 'Empty'} alt="Rounded avatar" />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y-[1px] divide-gray-600 rounded-md bg-foreground shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://www.spotify.com/us/account/overview/"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                        'flex justify-between px-4 py-2 text-sm'
                                    )}
                                    >
                                    Account <ArrowTopRightOnSquareIcon className="-mr-1 h-5 w-5 text-gray-400" />
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="/about"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    About
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <form method="POST" action="#">
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        onClick={() => signOut()}
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                        'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                    )}
                                </Menu.Item>
                                </form>
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;