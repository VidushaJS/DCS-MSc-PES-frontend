import { useState } from 'react';
import OverallResults from './OverallResults';
import SemesterResults from './SemesterResults';
import GPA from './GPA';
import HowWhat from './HowWhat';

export default function PerformancePage() {
    const [activeTab, setActiveTab] = useState('overall');

    return (
        <section className="bg-white rounded-xl p-6">
            {/* Tabs */}
            <div className="flex border-b border-gray-300 mb-4">
                <button
                    className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === 'overall' ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    onClick={() => setActiveTab('overall')}
                >
                    Overall Results
                </button>
                <button
                    className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === 'semester' ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    onClick={() => setActiveTab('semester')}
                >
                    Semester Results
                </button>
                <button
                    className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === 'gpa' ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    onClick={() => setActiveTab('gpa')}
                >
                    GPA
                </button>
                <button
                    className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === 'howWhat' ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    onClick={() => setActiveTab('howWhat')}
                >
                    How & What
                </button>
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === 'overall' && <OverallResults />}
                {activeTab === 'semester' && <SemesterResults />}
                {activeTab === 'gpa' && <GPA />}
                {activeTab === 'howWhat' && <HowWhat />}
            </div>
        </section>
    );
}