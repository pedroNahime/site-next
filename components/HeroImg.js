import React from "react"

const HeroImg = () => (
    <section className="text-gray-700 body-font">
        <div className="container max-w-7xl  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Desenhamos e lançamos produtos digitais que transformam empresas.
                </h1>
                <div className="flex justify-center">
                    <button
                        className="px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-500 hover:to-purple-800">Quero trabalhar na Empresa
                    </button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="/undraw_Outer_space_drqu.svg"/>
            </div>
        </div>
    </section>
)

export default HeroImg