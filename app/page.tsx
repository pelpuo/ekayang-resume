import Image from "next/image";
import "@/components/navbar/Navbar";
import Navbar from "@/components/navbar/Navbar";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaGoogleScholar } from "react-icons/fa6";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="max-w-[1200px] w-full mx-auto min-h-screen flex flex-col items-center">
      <Navbar />
      <hr className="w-full h-0.5 border-gray-800 mb-4" />
      <main className="w-full mt-6 grid grid-cols-8 gap-6 items-start">
        <div className="col-span-2 flex flex-col items-left">
          <Image
            src="/images/headshot_alt.png"
            alt="avatar"
            height={160}
            width={160}
            className="rounded-full"
          />
          <h2 className="text-xl font-semibold mt-4">Edwin Pelpuo Kayang</h2>
          <p className="text-md text-gray-600 text-left mt-1">PhD Student</p>
          <p className="text-md text-gray-600 left">Arizona State University</p>

          <div className="socials text-left mt-2">
            {/* Social media icons/links can be added here */}

            {/* Email */}
            <a
              href="mailto:epkayang@gmail.com"
              className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
            >
              <MdEmail className="inline mr-2" size={16} />
              Email
            </a>
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/edwin-kayang-52295719b/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
            >
              <BsLinkedin className="inline mr-2" size={16} />
              LinkedIn
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/pelpuo"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
            >
              <BsGithub className="inline mr-2" size={16} />
              GitHub
            </a>
            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/citations?user=f3EDFGcAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
            >
              <FaGoogleScholar className="inline mr-2" size={16} />
              Google Scholar
            </a>
          </div>
        </div>

        <section className="col-span-6 flex flex-col items-start px-4">
          {/* Right-column details go here */}

          {/* About Me */}
          <section className="w-full text-gray-300" id="about">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                I am a <strong>Computer Science PhD student</strong> at{" "}
                <strong>Arizona State University</strong>, where I serve as a
                Research Assistant at the{" "}
                <strong>
                  Secure, Trusted and Assured Microelectronics (STAM) Center
                </strong>{" "}
                under the supervision of <strong>Prof. Michel A. Kinsy</strong>
                My research interests are centered at the intersection of{" "}
                <strong>Program Analysis</strong>, <strong>Compilers</strong>,
                and <strong>System Security</strong>
              </p>
              <p>
                Currently, my work focuses on developing innovative tools and
                algorithms to ensure <strong>memory safety</strong> in legacy
                applications while maintaining high performance. I am also
                investigating automated algorithms to facilitate{" "}
                <strong>profile-guided optimization</strong> and compiler
                autotuning to improve system efficiency.
              </p>
              <p>
                Prior to my doctoral studies, I earned my{" "}
                <strong>BS in Computer Engineering</strong> with{" "}
                <strong>First Class Honours</strong> from the{" "}
                <strong>University of Ghana</strong>. My professional experience
                includes serving as an Innovations Graduate Executive at{" "}
                <strong>4th-IR</strong>, where I developed APIs for machine
                learning models, and as a <strong>SuaCode Fellow</strong> with
                the Nsesa Foundation, contributing to automated grading
                research.
              </p>
              <p>
                I am passionate about building extensible frameworks for open
                instruction set architectures, particularly{" "}
                <strong>RISC-V</strong>, and applying machine learning to
                hardware/software co-design challenges.
              </p>
            </div>
          </section>

          {/* Publications */}
          <section className="mt-8 w-full" id="publications">
            <h2 className="text-3xl font-semibold mb-4">Publications</h2>
            <ul className="list-disc list-outside ml-6 space-y-6">
              {/* Panoptes */}
              <li>
                <strong>
                  Panoptes: A Framework for Profile Clustering and Context-Aware
                  Binary Optimization
                </strong>
                <span className="italic ml-1">(Just Accepted)</span>
                <br />
                <strong>Edwin Kayang</strong>, Eric Jahns, Mishel Jyothis Paul,
                Michel A. Kinsy
                <br />
                ACM/IEEE International Conference on Software Engineering
                <br />
                Dec 2025
              </li>

              {/* AQUILA */}
              <li>
                <strong>
                  AQUILA: A Flexible Architecture Guideline for Building Custom
                  Distributed Systems Testbeds
                </strong>
                <span className="italic ml-1">(Just Accepted)</span>
                <br />
                Luigi Mastromauro, <strong>Edwin Kayang</strong>, Mishel Jyothis
                Paul, Eric Jahns, Muslum Ozgur Ozmen, Michel A. Kinsy
                <br />
                IEEE/IFIP International Conference on Embedded and Ubiquitous
                Computing
                <br />
                Sept 2025
              </li>

              {/* Prismo */}
              <li>
                <strong>
                  Prismo: A Decision Support System for Privacy-Preserving ML
                  Framework Selection
                </strong>
                <br />
                Njungle, Nges Brian, Jahns, Eric, Mastromauro, Luigi,{" "}
                <strong>Kayang, Edwin P</strong>, Stojkov, Milan, and Kinsy,
                Michel A
                <br />
                2025
                <br />[
                <a
                  href="https://arxiv.org/pdf/2510.09985"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <span className="text-blue-400 underline">Paper</span>
                </a>
                ]
              </li>

              {/* R-Visor */}
              <li>
                <strong>
                  R-Visor: An Extensible Dynamic Binary Instrumentation and
                  Analysis Framework for Open Instruction Set Architectures
                </strong>
                <br />
                <strong>Edwin Kayang</strong>, Mishel Jyothis Paul, Eric Jahns,
                Muslum Ozgur Ozmen, Milan Stojkov, Kevin Rudd, Michel A. Kinsy
                <br />
                ACM SIGPLAN/SIGBED Conference on Languages Compilers Tools and
                Theory for Embedded Systems
                <br />
                June 2025
                <br />
                <span className="">
                  [
                  <a
                    href="https://dl.acm.org/doi/pdf/10.1145/3735452.3735522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <span className="text-blue-400 underline">Paper</span>
                  </a>
                  ]
                </span>
              </li>

              {/* Autograd */}
              <li>
                <strong>
                  Autograd: Automated grading software for mobile game
                  assignments in Suacode courses
                </strong>
                <br />
                Prince Steven Annor, <strong>Edwin Kayang</strong>, Samuel
                Boateng, George Boateng
                <br />
                Computer Science Education Research Conference
                <br />
                Nov 2021
                <br />
                <span className="">
                  [
                  <a
                    href="https://dl.acm.org/doi/pdf/10.1145/3507923.3507954"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <span className="text-blue-400 underline">Paper</span>
                  </a>
                  ]
                </span>
              </li>
            </ul>
          </section>

          {/* Portfolio */}
          <section className="mt-8 w-full" id="portfolio">
            <h2 className="text-3xl font-semibold mb-4">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* R-Visor */}
              <div className="p-4 bg-gray-950 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">R-Visor</h3>
                <p className="text-sm text-gray-300 mb-2">
                  An extensible Dynamic Binary Instrumentation (DBI) and
                  analysis framework with initial support for the RISC-V
                  Instruction Set Architecture (ISA).
                </p>
                <p className="text-xs font-mono text-gray-500">
                  Technologies: C, RISC-V Assembly
                </p>
              </div>

              {/* Panoptes */}
              <div className="p-4 bg-gray-950 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Panoptes</h3>
                <p className="text-sm text-gray-300 mb-2">
                  A framework for profile clustering and context-aware binary
                  optimization designed to facilitate optimization effort by
                  promoting optimization reuse between similar binaries.
                </p>
                <p className="text-xs font-mono text-gray-500">
                  Technologies: Program Analysis, Compilers, Machine Learning
                </p>
              </div>
            </div>
          </section>


        </section>
      </main>
      <Footer />
    </div>
  );
}
