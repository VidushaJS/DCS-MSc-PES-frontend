export default function OverallResults() {
    return (
        <section className="bg-white rounded-xl">
            <h3 className="text-lg font-bold mb-4">Overall Results</h3>
            {/* Header Row */}
            <div className="grid grid-cols-3 gap-4 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 p-2 rounded-t-lg">
                <span>Code</span>
                <span>Name</span>
                <span className="justify-self-start ml-8">Grade</span>
            </div>
            {/* Subject Rows */}
            <div className="space-y-1">
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>CSC 106 1.5</span>
                    <span>Computer System Organization</span>
                    <span className="justify-self-start ml-12">A-</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>CSC 107 2.0</span>
                    <span>Introduction to Computer Programming</span>
                    <span className="justify-self-start ml-12">B</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>CSC 108 1.5</span>
                    <span>Software Engineering I</span>
                    <span className="justify-self-start ml-12">C+</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>CSC 110 2.0</span>
                    <span>Object Oriented Programming</span>
                    <span className="justify-self-start ml-12">A</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>CSC 111 1.0</span>
                    <span>Computer Programming - Laboratory</span>
                    <span className="justify-self-start ml-12">A-</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>CSC 112 2.0</span>
                    <span>Software Engineering II</span>
                    <span className="justify-self-start ml-12">B-</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>CSC 201 2.0</span>
                    <span>Data Structures and Algorithms I</span>
                    <span className="justify-self-start ml-12">A</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>CSC 203 1.5</span>
                    <span>Computer System Architecture</span>
                    <span className="justify-self-start ml-12">A</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>CSC 207 1.5</span>
                    <span>Knowledge Representation</span>
                    <span className="justify-self-start ml-12">A+</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>CSC 208 2.0</span>
                    <span>Operating Systems</span>
                    <span className="justify-self-start ml-12">B</span>
                </div>
                {/* Physics Subjects */}
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>PHY 201 2.0</span>
                    <span>Optics I</span>
                    <span className="justify-self-start ml-12">C+</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>PHY 202 2.0</span>
                    <span>Analog and Digital Electronics</span>
                    <span className="justify-self-start ml-12">C+</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>PHY 203 1.0</span>
                    <span>Physics Practical (Optics)</span>
                    <span className="justify-self-start ml-12">A+</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>PHY 204 1.0</span>
                    <span>Physics Practical (Electronics)</span>
                    <span className="justify-self-start ml-12">A+</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>PHY 205 1.0</span>
                    <span>Statistical Physics I</span>
                    <span className="justify-self-start ml-12">A-</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>PHY 206 1.0</span>
                    <span>Mathematical Physics I</span>
                    <span className="justify-self-start ml-12">A</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>PHY 207 1.0</span>
                    <span>Special Theory of Relativity</span>
                    <span className="justify-self-start ml-12">A-</span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                    <span>PHY 208 1.0</span>
                    <span>Atomic and Nuclear Physics</span>
                    <span className="justify-self-start ml-12">A</span>
                </div>
            </div>
            {/* GPA Details */}
            <div className="mt-4 pt-4 border-t border-gray-300">
                <div className="flex justify-between text-gray-700 font-semibold">
                    <span>Total Grade Points Earned</span>
                    <span>260.2</span>
                </div>
                <div className="flex justify-between text-gray-700 font-semibold mt-2">
                    <span>Total Number of Credit Value</span>
                    <span>76</span>
                </div>
                <div className="flex justify-between text-gray-700 font-semibold mt-2">
                    <span className="text-yellow-600">GPA = (Total Grade Points Earned / Total Number of Credit Value)</span>
                    <span className="text-yellow-600">3.4237</span>
                </div>
            </div>
        </section>
    );
}