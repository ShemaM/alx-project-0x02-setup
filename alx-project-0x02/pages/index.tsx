import Head from 'next/head';
import Header from '../components/layout/Header';

import { NavItem } from '../interfaces';

// Example of using an interface
const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Project 0x02 - Welcome</title>
        <meta name="description" content="Welcome to ALX Project 0x02" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Welcome Section */}
            <section className="mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-6 mt-8">
                Welcome to ALX Project 0x02!
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                This is a Next.js project with TypeScript and Tailwind CSS. 
                We&apos;re excited to have you here and can&apos;t wait to see what you&apos;ll build!
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
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105">
                Explore Features
              </button>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-gray-600">
            <p>ALX Project 0x02 - Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
