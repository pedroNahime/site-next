import React from "react"

const Nav = () => (
    <nav className="bg-white border-grey-200 border-b-2">
        <div className="max-w-7xl mx-auto px-4 my-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="h-8 w-32" src="https://dummyimage.com/106x25" alt="Workflow"/>
                    </div>
                </div>
                <div className="hidden md:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <a href="#" className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white bg-gradient-to-r hover:from-purple-600 hover:to-purple-900">Sobre</a>

                        <a href="#" className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white bg-gradient-to-r hover:from-purple-600 hover:to-purple-900">Acreditamos</a>

                        <a href="#" className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white bg-gradient-to-r hover:from-purple-600 hover:to-purple-900">Espaço empresa</a>

                        <a href="#" className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white bg-gradient-to-r hover:from-purple-600 hover:to-purple-900">Contato</a>

                        <a href="#" className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white bg-gradient-to-r hover:from-purple-600 hover:to-purple-900">Vagas</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default Nav