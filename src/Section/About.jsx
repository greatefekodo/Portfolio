import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {
  useGSAP(() => {
    const screenWidth = window.innerWidth;

    // 👉 Don't run animations on mobile (less than 768px)
    if (screenWidth < 768) return;

    const moveDistance = -500;

    gsap.fromTo(
      '.profile-img',
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power1.inOut',
        onComplete: () => {
          const tl = gsap.timeline();
          tl.to('.profile-image', {
            x: moveDistance,
            ease: 'power1.inOut',
            duration: 0.5,
          })
            .to('.great', {
              x: moveDistance,
              y: -10,
              ease: 'power1.inOut',
              duration: 0.5,
            })
            .to('.about', {
              y: -250,
              ease: 'power1.inOut',
              duration: 0.5,
            })
            .to('.project', {
              y: -250,
            });
        },
      }
    );
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-3xl mx-auto profile">
      {/* Profile Image Section */}
      <div className="flex justify-center mt-12 sm:mt-20 profile-image">
        <div className="bg-gradient-to-r from-blue-300 via-slate-600 to-blue-900 p-0.5 sm:p-1 rounded-full">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/images/mypic.jpeg"
              alt="Great Efekodo"
              className="w-full h-full object-cover profile-img"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-1 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-4 great">
          Great Efekodo
        </h1>

        <div className="space-y-6 about">
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Full-Stack Developer | Frontend • Backend • Cloud
          </h2>

          <div className="p-3 sm:p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3 flex items-center">
              💻 About Me
            </h3>
            <p className="text-left sm:text-justify text-black leading-relaxed text-sm sm:text-base">
              I'm a passionate full-stack developer who loves building modern, scalable, 
              responsive, and accessible websites and applications that deliver
              seamless user experiences. I enjoy taking ideas from concept to
              deployment, working across both frontend design and backend logic,
              and continuously improving my craft by learning new technologies.
            </p>
          </div>

          {/* 👇 Contact Info Added Here */}
          <div className="text-left text-black bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">📬 Let's Connect</h3>
            <ul className="space-y-1">
              <li>
                📞 <strong>Phone:</strong>{' '}
                <a href="tel:+2349046764158" className="text-blue-600 hover:underline">
                  +234 904 676 4158
                </a>
              </li>
              <li>
                💬 <strong>WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/2349046764158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  +234 904 676 4158
                </a>
              </li>
              <li>
                ✉️ <strong>Email:</strong>{' '}
                <a href="mailto:greatefekodo@gmail.com" className="text-blue-600 hover:underline">
                  greatefekodo@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left text-black space-y-4">
            <div>
              <h3 className="text-lg font-semibold">✨ Frontend Skills</h3>
              <ul className="list-disc pl-6">
                <li>React.js – building dynamic and scalable user interfaces</li>
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>Tailwind CSS – creating clean, responsive designs quickly</li>
                <li>GSAP (GreenSock) – smooth animations & interactive experiences</li>
                <li>Accessibility & Responsive Design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">⚙️ Backend & DevOps Skills</h3>
              <ul className="list-disc pl-6">
                <li>Spring Boot & Microservices – scalable backend systems</li>
                <li>JWT Authentication & Security</li>
                <li>Apache Kafka – real-time data streaming</li>
                <li>Databases – relational & NoSQL</li>
                <li>Git & GitHub – version control & CI/CD</li>
                <li>Kubernetes & Docker – containerization & orchestration</li>
                <li>AWS – cloud deployment and scaling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;