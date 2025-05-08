"use client";
import React, { useEffect, useState, useRef } from 'react';

//carousel
// Add proper type definition for Carousel component
const Carousel = ({ images }: { images: string[] | string }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  // Convert single image to array for consistent handling
  const imageArray = Array.isArray(images) ? images : [images];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setIndex(prev => (prev + 1) % imageArray.length);
        setFade(true); // Fade-in next image
      }, 400); // Fade-out duration (ms)
    }, 3500); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [imageArray.length]);

  return (
    <img
      src={imageArray[index]}
      alt={`carousel-image-${index}`}
      className={`w-full h-full object-cover transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Handle smooth scrolling when clicking navigation links
  const scrollToSection = (elementRef:any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
    // Close mobile menu when a link is clicked
    setIsMenuOpen(false);
  };
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'experience', ref: experienceRef },
        { id: 'skills', ref: skillsRef },
        { id: 'projects', ref: projectsRef },
        { id: 'contact', ref: contactRef }
      ];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current && scrollPosition >= section.ref.current - 100) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  // Portfolio data - Oil Rig Worker
  const personalInfo = {
    name: "Ram Prasad Ramakrishnan",
    title: "Offshore Field Engineer",
    yearsExperience: 4,
    bio: "An Offshore Field Engineer experienced in Offshore Subsea Structure Installation,  Subsea Cable lay Vessel Mobilization, Methods, Construction support  & ROV Inspection in the Oil & Gas EPCI industry in Qatar."
  };
  
  const experiences = [
    {
      company: "McDermott International, Qatar",
      position: "Associate Field Engineer",
      duration: "Aug 2022 – Present",
      description: "Managed offshore vessel mobilization and installation operations for the NFXP campaign, ensuring procedural compliance and seamless execution across stakeholders.",
      achievements: [
        "Mobilized DP and support vessels across UAE and Qatar for offshore campaigns.",
        "Prepared and reviewed installation procedures, lift charts, and sequence drawings.",
        "Monitored offshore execution and maintained installation tolerances per client specs.",
        "Assisted construction manager in tracking project progress and reporting delays.",
        "Planned vessel movements and optimized tug, barge, and supply logistics.",
        "Liaised with offshore personnel to ensure smooth operations.",
        "Performed yard inspections and rigging recertification pre-campaign.",
        "Logged vessel downtime and submitted reports to project management.",
        "Completed QELNG ePTW training and ensured permit compliance."
      ],
      projects:{
        title:["Crossing Support Subsea Structures Installation",
          "Cable Lay Vessel Mobilization",
          "Looping Platform Installation",
          "Installation of DP2 Reflectors",
          "MEG Riser Inspection"
        ],
        content:["Loadout & Installation of 893 structures comprising Steel Bridges, Steel Sleepers, ZRB Sleepers, Concrete Sleepers & Mattresses using DP vessel.",
          "269KMs of Subsea Cable transpooled onto Cable Lay DP Vessel mobilized from China to Qatar. Yard inspection & verification of Cable Lay accessories like Centralizer, Bend restrictor & Cable End cap seals. Platform Support Vessel DP vessel mobilized at Qatar including installation of Heave Compensated Gangway for personnel transfer from Vessel to Platform.",
          "6 x Temporary looping platforms installed on the Jacket platforms SIMPOS with the Drill rigs amidst ongoing drilling activities.",
          "Fabricated hand made (DIY) reflectors using SOLAS approved reflective tapes & installed on live Jacket platforms to comply with the DP reference Client requirement.",
          "Inspection of Thickness deterioration on the pre-installed MEG risers on the Jacket Platform."
        ]
      }
    }
    ,
    {
      company: "SAAR GLOBAL SERVICES L.L.C, Qatar",
      position: "Marine Surveyor",
      duration: "Feb 2021 – July 2022",
      description: "Conducted vessel, cargo, and container surveys, while managing port operations to support safe and timely loading and discharge.",
      achievements: [
        "Performed accident investigations and monitored loading/discharge of cargo including Steel Bulk Pipes and Aluminum Ingots",
        "Assessed container and cargo condition to determine nature, cause, and extent of damage",
        "Executed cargo expediting (Port captaincy) for Charterers/Ship Owners to minimize discharge delays",
        "Inspected lashing/securing to prevent cargo movement during voyage",
        "Verified Safety Working Load (SWL) of lifting gear used for discharge",
        "Ensured safe cargo movement with proper securing from discharge point to installation site",
        "Served as Vessel In-charge for Aluminum Ingots loading",
        "Coordinated with suppliers and logistics for yard cargo arrangement",
        "Inspected and implemented proper stowage plan based on cargo dimensions",
        "Assessed lashing with belts/chains and appropriate securing methods"
      ],
      projects:{
        title:[],
        content:[]
      }
    } 
  ];
  
  const skills = [
    "Excellent Communication & Presentation Skills",
    "Strong Team Player",
    "leadership Skills",
    "Team Leadership",
    "NDT : Ultrasonic Testing Level 2 Inspector",
    "Software's : CAD , MATLAB",
    "Proficient in Microsoft Office Suite",
  ];
  
  const education = [
    {
      institution: "University of Strathclyde, Glasgow, United Kingdom",
      degree: "MSc. in Marine Engineering",
      duration: "2017 – 2018",
      modules: "Advanced Marine Engineering, System Availability and Maintenance, Maritime Safety and Risk, Marine Environment Protection and Safety, Maritime Transport",
      dissertation:"Hull Condition Assessment of the vessel using artificial intelligence"
    },
    {
      institution: "Sri Ramakrishna Engineering College, Anna University, India",
      degree: "B.E in Mechanical Engineering",
      duration: "2013 – 2017",
      modules: " Dynamics, Materials, Structural Mechanics, Engineering Analysis, Thermodynamics, Design, Electrical Machines and Control, Fluid Mechanics",
      dissertation:"Air assisted windshield wiper system in automobiles. 6-month specialized program focused on deepwater drilling technologies and safety systems"
    }
  ];
  
  const projects = [
    {
      title: "6\" MES Riser ROV inspection",
      description: "Riser Inspection on the Pre-Installed Jackets using ROV's to ascertain the thickness of deterioration due to water ingress",
      images: "/6mes.png"
    },
    {
      title: "Subsea Structures Installation using Millenium 3 - DP Vessel",
      description: "Loadout & Installation of 626 Subsea strutures including steel bridge, steel sleepers, concrete mattresses/blocks",
      images: "/3dsubsea.jpg"
    },
    {
      title: "Subsea Structures Installation using Telford 25 - 3 DP Vessel",
      description: "Loadout & Installation of 267 Subsea strutures including steel bridge, steel sleepers, concrete mattresses/blocks. Installation of 6x Temporary Looping Platforms on the jackets SIMOPS with Drill rigs.",
      images: "/telford.jpg"
    },
    {
      title: "Subsea Cable Lay Installation",
      description: "Installation of Stern chute, Roller tables & Tugger winches on HKMG vessel. Mobilized Platorm Support Vessel -Britoil Diamond for the Subsea Cable Pull in works. Installed heave compensated gangway complying with client requirements. Installed Reflectors on the rigless jackets for the DP reference systems",
      images: ["/subseacablelay.png","/subseacablelay1.png"]
    }
  ];
 
  return (
    <div className="font-sans text-gray-800">
      {/* Navigation with Mobile Dropdown */}
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-xl">Ram Prasad Ramakrishnan</div>
            
            {/* Mobile menu button */}
            <button 
              className="block md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Home', ref: homeRef },
                { id: 'about', label: 'About', ref: aboutRef },
                { id: 'experience', label: 'Experience', ref: experienceRef },
                { id: 'skills', label: 'Skills', ref: skillsRef },
                { id: 'projects', label: 'Projects', ref: projectsRef },
                { id: 'contact', label: 'Contact', ref: contactRef }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.ref)}
                    className={`px-2 py-1 text-sm uppercase tracking-wider transition-colors ${
                      activeSection === item.id
                        ? 'text-yellow-400 font-medium'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile Navigation Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-black bg-opacity-95 pb-4 pt-2 animate-fadeIn">
              <ul className="flex flex-col space-y-3">
                {[
                  { id: 'home', label: 'Home', ref: homeRef },
                  { id: 'about', label: 'About', ref: aboutRef },
                  { id: 'experience', label: 'Experience', ref: experienceRef },
                  { id: 'skills', label: 'Skills', ref: skillsRef },
                  { id: 'projects', label: 'Projects', ref: projectsRef },
                  { id: 'contact', label: 'Contact', ref: contactRef }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.ref)}
                      className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors block w-full text-left ${
                        activeSection === item.id
                          ? 'text-yellow-400 font-medium'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section 
        ref={homeRef} 
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-black">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1)), 
                url('/HeroBG.png')
              `,
              backgroundSize: 'cover',
              backgroundPosition: 'center 10%',  // Shifts the image slightly lower
              backgroundRepeat: 'no-repeat',
              opacity: 0.6,
              
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in"
          style={{
            textShadow: '0 0 5px rgba(0, 0, 0, 0.7), 0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          {personalInfo.name}
        </h1>
        <h2
          className="text-2xl md:text-3xl mb-6 text-yellow-400"
          style={{
            textShadow: '0 0 5px rgba(0, 0, 0, 0.7), 0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          {personalInfo.title}
        </h2>
        <p
          className="text-xl max-w-2xl mx-auto mb-8"
          style={{
            textShadow: '0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.9)',
          }}
        >
          {personalInfo.yearsExperience} years of offshore field experience
        </p>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          Get In Touch
        </button>
      </div>

        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="text-white bg-transparent border-2 border-white rounded-full p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-800 to-black text-white ">
        <div className="max-w-6xl mx-auto px-4 ">
          <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                <img src="/profilephoto.png" alt="portrait" className="w-full h-auto" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Professional Background</h3>
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                {personalInfo.bio}<br></br>
                Graduated from the University of Strathclyde, UK with Master's in Marine Engineering 
                
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="text-yellow-400 font-medium mb-2">Name:</h4>
                  <p>{personalInfo.name}</p>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-medium mb-2">Position:</h4>
                  <p>{personalInfo.title}</p>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-medium mb-2">Experience:</h4>
                  <p>{personalInfo.yearsExperience} Years</p>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-medium mb-2">Availability:</h4>
                  <p>Full time / Rotation basis</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  onClick={(e) => {e.preventDefault(); scrollToSection(experienceRef);}}
                  className="bg-yellow-500 text-black px-6 py-2 rounded font-medium hover:bg-yellow-400 transition-colors"
                >
                  My Experience
                </a>
                <a 
                  href="/Ram Prasad Project Engineer Resume.pdf" 
                  download
                  className="bg-transparent border border-yellow-500 text-yellow-500 px-6 py-2 rounded font-medium hover:bg-yellow-500 hover:text-black transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - MODIFIED: Full width, vertical layout */}
      <section
        ref={experienceRef}
        className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-800 to-black"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Work Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200 md:mx-0"></div>
            
            {/* Experience items - Vertical layout */}
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="flex flex-col ml-12 mb-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 -ml-6 w-6 h-6 rounded-full bg-yellow-500 border-4 border-white z-10"></div>
                
                {/* Content */}
                <div className="w-full bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                  <h4 className="text-lg text-yellow-600 font-medium mb-3">{exp.company}</h4>
                  <p className="text-gray-600 mb-4">{exp.duration}</p>
                  <p className="mb-4">{exp.description}</p>
                  <h5 className="font-bold text-xl mb-3">Key Achievements:</h5>
                  <ul className="list-disc pl-5 text-gray-700">
                  {exp.achievements.map((achievement, i) => (
                      <li key={i} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                  <br></br>
                  {exp.projects.title.length > 0 && (
                    <>
                      <h5 className="font-bold text-xl mb-3">Projects:</h5>
                      <ul className="list-disc pl-5 text-gray-700">
                        {exp.projects.title.map((title, j) => (
                          <li key={j} className="mb-2">
                            {/* Display title in bold with a colon, then display content */}
                            <span className="font-bold">{title}:</span>
                            {/* Check if content exists for this title and render it */}
                            {exp.projects.content[j] && (
                              <span className="ml-2">{exp.projects.content[j]}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - MODIFIED: Skills on top, Education on bottom */}
      <section
        ref={skillsRef}
        className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-800 to-black text-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Skills & Education</h2>
          
          <div className="flex flex-col gap-12">
            {/* Skills Section - Full width */}
            <div className="w-full">
              <h3 className="text-2xl font-semibold mb-8 text-yellow-400">Technical Skills</h3>
              <div className="bg-gray-900 bg-opacity-70 rounded-lg p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
                  {skills.map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 text-yellow-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-200">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Education Section - Full width */}
            <div className="w-full">
              <h3 className="text-2xl font-semibold mb-8 text-yellow-400">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-900 bg-opacity-70 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                    <h5 className="text-yellow-500 mb-2">{edu.institution}</h5>
                    <p className="text-gray-400 mb-3">{edu.duration}</p>
                    <p className="text-gray-300"> <strong>Modules :</strong>{edu.modules}</p>
                    <p className="text-gray-300"><strong>Dissertation :</strong>{edu.dissertation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-800 to-black"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Notable Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1;

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="h-90 overflow-hidden">
                  {isLast && Array.isArray(project.images) ? (
                    <Carousel images={project.images} />
                  ) : (
                    <img
                      src={project.images as string}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>

                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-20 md:py-32 bg-black text-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Get In Touch</h2>
          
          <div className="flex flex-col space-y-12">
            {/* Contact Information - Horizontal Layout */}
            <div className="w-full">
              <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>
              
              {/* Grid for contact items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Phone */}
                <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="text-yellow-500 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-300 text-center">+91 747 0451097</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="text-yellow-500 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-300 text-center">ramprasad1011@gmail.com</p>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="text-yellow-500 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-300 text-center">Doha, Qatar</p>
                </div>

                {/* Work Schedule */}
                <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="text-yellow-500 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium mb-1">Work Schedule</h4>
                  <p className="text-gray-300 text-center">Full time / Rotation basis</p>
                </div>
              </div>
            </div>

            {/* Social Links - Centered */}
            <div className="w-full flex flex-col items-center">
              <h4 className="font-medium mb-6 text-center">Connect with me:</h4>
              <div className="flex space-x-6">
                <a href="mailto:ramprasad1011@gmail.com" className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/ramprasad1011" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white p-4 rounded-full hover:bg-blue-800 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.535 20h-2.93v-10.993h2.93v10.993zm-1.464-12.535c-.939 0-1.5-.625-1.5-1.408 0-.798.577-1.408 1.533-1.408.957 0 1.5.61 1.513 1.408 0 .783-.555 1.408-1.546 1.408zm13.999 12.535h-2.93v-5.849c0-1.47-.527-2.473-1.846-2.473-1.007 0-1.605.679-1.87 1.335-.096.234-.12.561-.12.889v6.098h-2.93s.039-9.892 0-10.993h2.93v1.557c.389-.6 1.084-1.452 2.637-1.452 1.927 0 3.369 1.26 3.369 3.965v6.923z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Ram Prasad Ramakrishnan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;