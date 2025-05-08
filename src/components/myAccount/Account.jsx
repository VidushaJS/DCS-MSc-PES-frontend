import React from 'react'

function Account() {
    return (
        <>
            <section className="bg-gray-200 rounded-xl p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <img
                        src="/src/assets/images/Profile.png"
                        alt="Profile"
                        className="rounded-full w-24 h-24 object-cover mx-auto md:mx-0"
                    />
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-base font-semibold">
                        <span className="text-right">Name</span>
                        <span>: Neo Samarawickrama</span>
                        <span className="text-right">Index No</span>
                        <span>: AS2034529</span>
                        <span className="text-right">Registration No</span>
                        <span>: AS105345</span>
                        <span className="text-right">E-mail</span>
                        <span>: neos@gmail.com</span>
                    </div>
                </div>

                {/* GPA Section */}
                <h2 className="text-center font-bold text-xl md:text-2xl mb-4">
                    Current GPA - <span className="text-2xl md:text-3xl">3.789</span>
                </h2>

                {/* GPA Graph */}
                <div className="bg-white rounded-lg p-4">
                    <div className="h-40 bg-gray-100 flex items-end justify-center space-x-2 mb-2">
                        {/* This would be replaced with an actual chart component */}
                        <div className="w-8 bg-blue-500 h-3/4"></div>
                        <div className="w-8 bg-blue-500 h-1/2"></div>
                        <div className="w-8 bg-blue-500 h-full"></div>
                        <div className="w-8 bg-blue-500 h-2/3"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 px-2">
                        <span>2022</span>
                        <span>Time</span>
                    </div>
                    <p className="text-center mt-2 font-mono">GPA progression Over Time</p>
                </div>
            </section>

            {/* Notification Bar */}
            <div className="bg-gray-200 rounded-md p-3 flex justify-between items-center">
                <p className="text-sm md:text-base">
                    Exam Registrations Are Open Please Register before 2025/7/14
                </p>
                <button className="relative text-gray-700">
                    <span className="material-icons">chat</span>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        1
                    </span>
                </button>
            </div>
        </>
    )
}

export default Account