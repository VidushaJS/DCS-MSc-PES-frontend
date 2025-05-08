import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Account from './components/myAccount/Account';
import PerformancePage from './components/performance/PerformancePage'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [content, setContent] = useState("home");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} content={content} setContent={setContent} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-4xl mx-auto">
            {/* Profile Section */}
            {content === "home" && <Account />}
            {content === "performance" && <PerformancePage />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;