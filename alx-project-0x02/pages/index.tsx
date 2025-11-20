import Head from 'next/head';



// Example of using an interface

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Project 0x02 - Welcome</title>
        <meta name="description" content="Welcome to ALX Project 0x02" />
      </Head>

      {/* Simple Header directly in the file */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            ALX Project 0x02
          </h1>
        </div>
      </header>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Welcome Section */}
            <section className="mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-6 mt-8">
                Welcome to ALX Project 0x02!
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                This is a Next.js project with TypeScript and Tailwind CSS. 
                We&/re excited to have you here and cant wait to see what you&/ll build!
              </p>
            </section>

            {/* Features Section */}
            <section className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">TypeScript</h3>
                <p className="text-gray-600">Type-safe development for better code quality</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Tailwind CSS</h3>
                <p className="text-gray-600">Utility-first CSS framework for rapid UI development</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Next.js</h3>
                <p className="text-gray-600">React framework with best-in-class performance</p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6">
                Explore the project structure and start building amazing features!
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition duration-200">
                Explore Features
              </button>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>ALX Project 0x02 - Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
