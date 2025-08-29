
// Main App component
export default function Home() {
  // A simple way to handle navigation without react-router-dom
  const navigate = (path) => {
    window.location.href = path;
  };

  const projects = [
    { name: "Counter", path: "/counter", description: "A simple counter application with increment and decrement functionality." },
    { name: "Clock", path: "/clock", description: "A digital clock that displays the current time." },
    { name: "Todo List App", path: "/todo-list", description: "An interactive to-do list to help you manage your tasks." },
    { name: "Grocery List App", path: "/grocery-app", description: "A convenient app to organize your grocery shopping list." },
    { name: "Quote Generator App", path: "/quote-generator", description: "An app that generates inspiring quotes with a click of a button." },
    { name: "Bookie", path: "https://bookielib.netlify.app/", description: "A  Library app, Features include CRUD operations,  and a responsive ui" },


  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
            Welcome to My Project Showcase
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 font-light max-w-2xl mx-auto">
            Explore a collection of interactive applications built with React and Tailwind CSS.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-slate-800 p-8 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-slate-700 transform hover:-translate-y-2 animate-fade-in group overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative">
                <h2 className="text-2xl font-bold mb-2 text-cyan-300 group-hover:text-white transition-colors duration-500">{project.name}</h2>
                <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-500">{project.description}</p>
                {/* <button
                  onClick={() => navigate(project.path)}
                  className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-cyan-600 to-indigo-700 text-white font-bold shadow-md transition-all duration-300 transform hover:scale-105"
                >
                  Go to App
                </button> */}

                {project.path.startsWith("http") ? (
                  <a
                    href={project.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-3 px-4 rounded-full bg-gradient-to-r from-cyan-600 to-indigo-700 text-white font-bold shadow-md transition-all duration-300 transform hover:scale-105"
                  >
                    Go to App
                  </a>
                ) : (
                  <button
                    onClick={() => navigate(project.path)}
                    className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-cyan-600 to-indigo-700 text-white font-bold shadow-md transition-all duration-300 transform hover:scale-105"
                  >
                    Go to App
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.8s ease-out forwards;
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
