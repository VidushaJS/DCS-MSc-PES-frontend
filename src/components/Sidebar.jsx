import { FaUser, FaGraduationCap, FaBook, FaStethoscope, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/USJ-logo.png';

export default function Sidebar({ sidebarOpen, setSidebarOpen, setContent, content }) {
    const handleClick = (newContent) => {
        setContent(newContent);
    };

    return (
        <div
            className={`fixed md:relative z-20 w-64 bg-gray-800 text-white h-full transition-all duration-300 ease-in-out 
        ${sidebarOpen ? 'left-0' : '-left-64 md:left-0'}`}
        >
            {/* Header with centered logo and working close button */}
            <div className="relative flex items-center justify-between pt-10 pb-10 px-4 border-b border-gray-700">
                {/* This invisible spacer balances the close button */}
                <div className="w-6 h-6 invisible md:hidden"></div>

                {/* Centered logo */}
                <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-20 h-20 rounded-full"
                    />
                </div>

                {/* Close button with z-index to ensure it's clickable */}
                <button
                    className="md:hidden text-gray-300 hover:text-white z-10"
                    onClick={() => setSidebarOpen(false)}
                >
                    <FaTimes className="text-xl" />
                </button>
            </div>

            <nav className="p-4 space-y-2">
                <button
                    className={`flex items-center gap-3 p-3 rounded-md w-full ${content === "home" ? 'bg-gray-600' : 'hover:bg-gray-700'
                        }`}
                    onClick={() => handleClick("home")}
                >
                    <FaUser className="text-lg" />
                    <span>My Account</span>
                </button>
                <button
                    className={`flex items-center gap-3 p-3 rounded-md w-full ${content === "performance" ? 'bg-gray-600' : 'hover:bg-gray-700'
                        }`}
                    onClick={() => handleClick("performance")}
                >
                    <FaGraduationCap className="text-lg" />
                    <span>Performance</span>
                </button>
                <button
                    className={`flex items-center gap-3 p-3 rounded-md w-full ${content === "exams" ? 'bg-gray-600' : 'hover:bg-gray-700'
                        }`}
                    onClick={() => handleClick("exams")}
                >
                    <FaBook className="text-lg" />
                    <span>Exams</span>
                </button>
                <button
                    className={`flex items-center gap-3 p-3 rounded-md w-full ${content === "medicals" ? 'bg-gray-600' : 'hover:bg-gray-700'
                        }`}
                    onClick={() => handleClick("medicals")}
                >
                    <FaStethoscope className="text-lg" />
                    <span>Medicals</span>
                </button>
            </nav>
        </div>
    );
}