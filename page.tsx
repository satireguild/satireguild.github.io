import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>College Satire Guild</title>
        <meta name="description" content="Fostering creative expression and critical thinking through satirical journalism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">College Satire Guild</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-6 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              The primary exempt purpose of the College Satire Guild is to foster creative expression, critical thinking, and community engagement through satirical journalism. We collaborate with various college organizations to produce and distribute satirical publications, enhancing students' educational experiences and civic awareness.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
            <ul className="list-disc pl-5 mb-4">
              <li>Successfully published nine issues over the past year</li>
              <li>Involved over twenty college-aged staff members in editorial, writing, and production processes</li>
              <li>Provided practical experience in journalism and publishing</li>
              <li>Created a platform for students to engage in social and cultural commentary</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <p className="mb-4">
              Through our satirical publications, we offer students a unique opportunity to develop their writing skills, critical thinking abilities, and understanding of current events. Our work not only entertains but also encourages readers to question societal norms and engage in meaningful discussions about important issues.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Group Membership</h2>
            <p className="mb-4">
              The College Satire Guild welcomes membership applications from college satire organizations. By joining our guild, your organization can:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Connect with other college satire publications across the country</li>
              <li>Share resources and best practices for satirical journalism</li>
              <li>Participate in collaborative projects and events</li>
              <li>Gain exposure to a wider audience through our network</li>
            </ul>
            <p className="mb-4">
              If your college satire organization is interested in becoming a member of the College Satire Guild, please reach out to us for more information on the application process.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              For more information about the College Satire Guild or to get involved, please contact us at <a href="mailto:info@collegesatireguild.org" className="text-blue-600 hover:underline">info@collegesatireguild.org</a>.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} College Satire Guild. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

