import React, { useEffect } from 'react';
import gsap from 'gsap';

const About = () => {
  useEffect(() => {
    const hasAnimated = sessionStorage.getItem('aboutAnimated');
    const isMobile = window.innerWidth < 640; 

    if (!isMobile) {
      // Desktop animation only
      const imageMoveX = -70;
      const nameMoveX = -70;
      const nameMoveY = -18;
      const aboutMoveY = -30;
      const projectMoveY = -30;

      if (hasAnimated) {
        gsap.set('.profile-image', { xPercent: imageMoveX });
        gsap.set('.great', { xPercent: nameMoveX, yPercent: nameMoveY });
        gsap.set('.about', { yPercent: aboutMoveY });
        gsap.set('.project', { yPercent: projectMoveY });
      } else {
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
                xPercent: imageMoveX,
                duration: 0.5,
                ease: 'power1.inOut',
              })
                .to('.great', {
                  xPercent: nameMoveX,
                  yPercent: nameMoveY,
                  duration: 0.5,
                })
                .to('.about', {
                  yPercent: aboutMoveY,
                  duration: 0.5,
                })
                .to('.project', {
                  yPercent: projectMoveY,
                  duration: 0.5,
                });

              sessionStorage.setItem('aboutAnimated', 'true');
            },
          }
        );
      }
    }

    // SAVE SCROLL POSITION
    const savedScroll = sessionStorage.getItem('aboutScroll');
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll, 10));
    }

    const handleScroll = () => {
      sessionStorage.setItem('aboutScroll', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-3xl mx-auto profile">

      {/* MOBILE IMAGE */}
      <div className="flex justify-center mt-12 sm:hidden">
        <div className="bg-gradient-to-r from-blue-300 via-slate-600 to-blue-900 p-0.5 rounded-full">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/images/mypic.jpeg"
              alt="Great Efekodo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* DESKTOP IMAGE (animated) */}
      <div className="hidden sm:flex justify-center mt-20 profile-image">
        <div className="bg-gradient-to-r from-blue-300 via-slate-600 to-blue-900 p-1 rounded-full">
          <div className="w-40 h-40 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/images/mypic.jpeg"
              alt="Great Efekodo"
              className="w-full h-full object-cover profile-img"
            />
          </div>
        </div>
      </div>

      <div className="mt-0 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-4 great">
          Great Efekodo
        </h1>

        <div className="space-y-6 about">

          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Full-Stack Developer | Frontend • Backend • Cloud
          </h2>

          {/* ABOUT ME BOX */}
          <div className="p-3 sm:p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-black mb-3 flex items-center">
              💻 About Me
            </h3>
            <p className="text-left  text-black leading-relaxed text-base">
              I'm a passionate full-stack developer who loves building modern,
              scalable, responsive, and accessible websites and applications
              that deliver seamless user experiences. I enjoy taking ideas from
              concept to deployment, working across both frontend design and
              backend logic, and continuously improving my craft by learning new
              technologies.
            </p>
          </div>

          {/* CONTACT BOX */}
          <div className="text-left text-black bg-gray-50 p-4 rounded-lg border border-gray-200 ">
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

          {/* SKILLS */}
          <div className="text-left text-black space-y-4">

            <div>
              <h3 className="text-lg font-semibold">✨ Frontend Skills</h3>
              <ul className="list-disc pl-6">
                <li>React.js – dynamic and scalable UI</li>
                <li>HTML5, CSS3, SCSS, JavaScript (ES6+)</li>
                <li>Tailwind CSS – responsive UI design</li>
                <li>GSAP – animations & interactions</li>
                <li>Accessibility & Responsive Design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">⚙️ Backend & DevOps Skills</h3>
              <ul className="list-disc pl-6">
                <li>Spring Boot & Microservices</li>
                <li>JWT Authentication & Security</li>
                <li>Apache Kafka – real-time streaming</li>
                <li>Databases – SQL & NoSQL</li>
                <li>Git & GitHub – CI/CD pipelines</li>
                <li>Kubernetes & Docker</li>
                <li>AWS Cloud Deployment</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
