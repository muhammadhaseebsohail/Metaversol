/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Example() {
    return (
        <div className="relativ overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <Popover>
                    <div className="relative xl:h-36 lg:h-28 h-24 flex justify-between w-full">
                        <nav className="relative w-full flex items-center justify-between" aria-label="Global">
                            <div className="flex justify-between items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href="#">
                                        <img
                                            className="xl:h-20 lg:h-16 md:h-12 h-12  w-auto"
                                            src="/assets/images/MetaversolLogo_White.png"
                                        />
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="text-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href} className="font-medium text-white hover:text-gray-300">
                                            {item.name}
                                        </a>
                                    ))}

                                </div>
                                <div className='btn-alpha-wrap relative hidden md:block '>
                                    <div className='btn-alpha-blur'>

                                    </div>
                                    <button className="font-medium btn-alpha">
                                        MINT
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div className='bg-blue-9 rounded-xl'>
                                        <img
                                            className=" h-12  w-auto"
                                            src="/assets/images/MetaversolLogo_White.png"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close main menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                    <a className="font-medium block px-3 py-2 text-purple">
                                        MINT
                                    </a>
                                </div>

                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        </div>
    )
}
