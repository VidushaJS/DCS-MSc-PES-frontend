import { FaBars } from 'react-icons/fa';

export default function Header({ setSidebarOpen, sidebarOpen }) {
    return (
        <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden text-gray-600"
                        onClick={() => setSidebarOpen(prev => !prev)}
                    >
                        <FaBars className="text-xl" />
                    </button>
                    <div>
                        <h1 className="font-bold text-lg md:text-xl font-mono">Performance and Evaluation Service</h1>
                        <p className="text-sm md:text-base">MSc Programme</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="bg-gray-800 text-white px-4 py-1 rounded-md text-sm md:text-base">
                        Log Out
                    </button>
                </div>
            </div>
        </header>
    );
}