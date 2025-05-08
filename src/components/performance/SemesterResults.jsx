export default function SemesterResults() {
    return (
        <section className="bg-white rounded-xl">
            <h3 className="text-lg font-bold mb-4">Semester Results</h3>

            {/* Semester 1 */}
            <div>
                <h4 className="text-md font-semibold text-gray-800 mb-2">2021 - Semester I</h4>
                <div className="grid grid-cols-3 gap-4 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 p-2 rounded-t-lg">
                    <span>Code</span>
                    <span>Name</span>
                    <span className="justify-self-start ml-2">Grade</span>
                </div>
                <div className="space-y-1">
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>CSC 106 1.5</span>
                        <span>Computer System Organization</span>
                        <span className="justify-self-start ml-2">A-</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>CSC 107 2.0</span>
                        <span>Introduction to Computer Programming</span>
                        <span className="justify-self-start ml-2">B</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>CSC 108 1.5</span>
                        <span>Software Engineering I</span>
                        <span className="justify-self-start ml-2">C+</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>ENG 101 2.0</span>
                        <span>Compulsory English (Scientific Communication)</span>
                        <span className="justify-self-start ml-2">A-</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>MAT 111 2.0</span>
                        <span>Fundamentals of Logic and Set Theory</span>
                        <span className="justify-self-start ml-2">B</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>MAT 112 2.0</span>
                        <span>Differential Equations</span>
                        <span className="justify-self-start ml-2">A</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>MAT 113 1.0</span>
                        <span>Complex Numbers and Vectors</span>
                        <span className="justify-self-start ml-2">A</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>PHY 103 2.0</span>
                        <span>Mechanics and Properties of Matter</span>
                        <span className="justify-self-start ml-2">B</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>PHY 104 1.0</span>
                        <span>Electricity and Magnetism</span>
                        <span className="justify-self-start ml-2">A+</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>PHY 105 1.0</span>
                        <span>Waves and Vibrations</span>
                        <span className="justify-self-start ml-2">B</span>
                    </div>
                </div>
            </div>

            {/* Separator */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* Semester 2 */}
            <div>
                <h4 className="text-md font-semibold text-gray-800 mb-2">2021 - Semester II</h4>
                <div className="grid grid-cols-3 gap-4 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 p-2 rounded-t-lg">
                    <span>Code</span>
                    <span>Name</span>
                    <span className="justify-self-start ml-2">Grade</span>
                </div>
                <div className="space-y-1">
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>CSC 110 2.0</span>
                        <span>Object Oriented Programming</span>
                        <span className="justify-self-start ml-2">A</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>CSC 111 1.0</span>
                        <span>Computer Programming - Laboratory</span>
                        <span className="justify-self-start ml-2">A-</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>CSC 112 2.0</span>
                        <span>Software Engineering II</span>
                        <span className="justify-self-start ml-2">B-</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>ENG 102 2.0</span>
                        <span>English for Scientific Discourses</span>
                        <span className="justify-self-start ml-2">A+</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>MAT 121 2.0</span>
                        <span>Linear Algebra I</span>
                        <span className="justify-self-start ml-2">A-</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>MAT 122 2.0</span>
                        <span>Calculus</span>
                        <span className="justify-self-start ml-2">A+</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>MAT 123 1.0</span>
                        <span>Vector Calculus</span>
                        <span className="justify-self-start ml-2">A</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>PHY 106 2.0</span>
                        <span>Practical (Semester I & II)</span>
                        <span className="justify-self-start ml-2">C</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>PHY 107 2.0</span>
                        <span>Applied Electricity and Basic Electronics</span>
                        <span className="justify-self-start ml-2">A+</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-300 text-gray-800">
                        <span>PHY 108 2.0</span>
                        <span>Thermodynamics</span>
                        <span className="justify-self-start ml-2">B</span>
                    </div>
                </div>
            </div>
        </section>
    );
}