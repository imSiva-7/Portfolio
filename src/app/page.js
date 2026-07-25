import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-black"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hi, Im <span className="text-blue-600 dark:text-blue-400">Siva</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          A passionate developer who builds clean, performant web experiences.
        </p>
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <Link href="#projects" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
            View My Work
          </Link>
          <Link href="#contact" className="rounded-lg border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">

            Get in Touch
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            I’m a self-taught developer with a love for clean code and great design. I specialize in building modern web apps with React, Next.js, and Tailwind CSS. When I’m not coding, you’ll find me exploring new tech or contributing to open source.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 bg-white dark:bg-black"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Projects</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder project cards */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project One</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">A short description of the project goes here.</p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project Two</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Another cool project description.</p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project Three</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">A third project to fill the grid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}