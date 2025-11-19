
// Fix: Import React to resolve the 'Cannot find namespace 'JSX'' error.
import React from 'react';

const portfolioProjects = [
  {
    projectName: 'E-commerce Store',
    clientIndustry: 'Fashion',
    challenge: 'Low sales from Google and poor keyword rankings for top products.',
    strategy: 'Full technical audit, on-page optimization for product pages, and a targeted link-building campaign.',
    result1: '+350% Organic Traffic',
    result2: '#1 for "vintage style dress"',
    proofLink: '#',
  },
  {
    projectName: 'B2B SaaS Platform',
    clientIndustry: 'Software',
    challenge: 'Struggling to generate qualified leads from organic search to fill the sales pipeline.',
    strategy: 'Developed a content hub strategy around long-tail keywords, earning featured snippets.',
    result1: '+400% Demo Requests',
    result2: 'Top 3 for 20+ keywords',
    proofLink: '#',
  },
  {
    projectName: 'Local Dental Clinic',
    clientIndustry: 'Healthcare',
    challenge: 'Needed to attract new patients in a highly competitive local market.',
    strategy: 'Optimized Google Business Profile, built local citations, and created location-specific service pages.',
    result1: '+200% "Near Me" Searches',
    result2: '50+ New Patient Calls/Month',
    proofLink: '#',
  },
];


const SkillCard: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center" data-aos="fade-up">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h4 className="font-semibold text-gray-800">{title}</h4>
  </div>
);

const skills = [
  { title: 'Keyword Research', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
  { title: 'Technical SEO', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
  { title: 'Content Strategy', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
  { title: 'Link Building', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> },
  { title: 'Analytics & Reporting', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
  { title: 'Local SEO', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
];

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        {/* Philosophy Section */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2" data-aos="fade-right">
            <img src="https://picsum.photos/id/237/350/350" alt="Professional headshot" className="rounded-lg shadow-2xl w-full" />
          </div>
          <div className="md:col-span-3" data-aos="fade-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">My Philosophy</h1>
            <p className="mt-6 text-lg text-gray-600">
              I believe in a holistic approach to SEO that goes beyond just keywords and rankings. My focus is on understanding user intent, creating valuable content, and ensuring technical excellence to build a sustainable foundation for long-term growth.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Transparency and data are at the core of my work. I provide clear, actionable insights and regular reporting to ensure we are always aligned with your business goals. SEO is a partnership, and I'm committed to helping your business succeed.
            </p>
          </div>
        </div>

        {/* Project Highlights Table */}
        <div className="mt-24">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Project Highlights</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A snapshot of my work, strategies, and the results I've delivered.
            </p>
          </div>
          <div className="mt-12 flex flex-col" data-aos="fade-up" data-aos-delay="200">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project / Client</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">The Challenge</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">My Strategy</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Results</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proof</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {portfolioProjects.map((project) => (
                        <tr key={project.projectName}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{project.projectName}</div>
                            <div className="text-sm text-gray-500">{project.clientIndustry}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-normal">
                            <div className="text-sm text-gray-900 max-w-xs">{project.challenge}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-normal">
                            <div className="text-sm text-gray-900 max-w-xs">{project.strategy}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                             <div>{project.result1}</div>
                             <div>{project.result2}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a href={project.proofLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900">View Proof</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-24">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Core Competencies</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The tools and tactics I use to drive results.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
