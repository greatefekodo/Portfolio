import { Progress } from "@/components/ui/progress";
import project1 from "../../public/images/nexter mockup2.png";
// import project2 from "../../public/images/nexter.png";
import Image from "next/image";

export const About = () => {
    return (
        <section id="about" className="text-white p-8">
            <h2 className="text-6xl font-bold mb-8">
                About <span className="text-purple-300">Me</span>
            </h2>
            <div className="grid md:grid-cols-3">
                <div className="border border-white/20  p-6">
                    <h3 className="text-2xl font-bold mb-2">01. background</h3>
                    <p className="text-white/50 mb-6">
                        I'm a passionate full-stack developer with strong foundation in
                        computer science and I love creating innovative web solutions. My
                        stacks are:
                    </p>

                    <div className="rounded-lg p-4 mb-4 border border-white/20">
                        <code className="text-purple-200">
                            const skills = [<br />
                            &nbsp;&nbsp; 'JavaScript', <br />
                            &nbsp;&nbsp; 'React', <br />
                            &nbsp;&nbsp; 'Node.js', <br />
                            &nbsp;&nbsp; 'Java', <br />
                            &nbsp;&nbsp; 'SQl', <br />
                            &nbsp;&nbsp; 'AWS'
                            <br />
                            ];
                        </code>
                    </div>
                </div>

                <div className="border border-white/20  p-6">
                    <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
                    <p className="text-white/50">
                        I specialize in building robust and scalable web applications using
                        modern technologies. My expertise spans both front-end and back-end
                        development, allowing me to create seamless, end-to-end solutions.
                    </p>
                    <div className="mt-4 relative border border-white/20  p-4 h-[220px] overflow-hidden">
                        <Image
                            src={project1}
                            alt="project 1"
                            layout="fill"
                            // objectFit="cover"

                        />
                    </div>
                </div>

                <div className="border border-white/20  p-6">
                    <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
                    <p className="text-white/50 mb-4">
                        I'm proficient in a wide range of technologies and constantly
                        expanding my skill set.
                    </p>
                    <div className="grid grid-cols-2 text-center gap-4">
                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-purple-300 font-medium mb-2">Frontend</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                                <li>Framer motion</li>
                                <li>GSAP</li>
                            </ul>
                        </div>

                        <div className="border border-white/20  p-3">
                            <h4 className="text-purple-300 font-medium mb-2">Backend</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>Node.js</li>
                                <li>Java: Spring boot</li>
                                <li>PostgresSQL</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="border border-white/20 rounded-lg p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-meduim mb-1">
                                Front-End
                            </label>
                            <Progress
                                value={90}
                                className="bg-purple-300/20 [&>div]:bg-purple-100/80"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-meduim mb-1">
                                Back-End
                            </label>
                            <Progress
                                value={85}
                                className="bg-purple-300/20 [&>div]:bg-purple-100/80"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-meduim mb-1">DevOps</label>
                            <Progress
                                value={55}
                                className="bg-purple-300/20 [&>div]:bg-purple-100/80"
                            />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
                    <p className="text-white/50">
                        I believe in writing clean, maintainable, and scalable code while
                        following best practices to ensure effective project delivery. My
                        approach involves understanding client needs, planning thoroughly,
                        and delivering high-quality solutions on time.
                    </p>
                </div>


                <div className="border border-white/20 rounded-lg p-6">
                    {/* <div className="h-[200px] overflow-hidden p-4 border border-white/20 relative">
                        <Image
                            src={project2}
                            alt="project 2"
                            layout="fill"
                            objectFit="cover"
                            
                        />
                    </div> */}

                    <div>
                        <h3 className="text-2xl font-bold mb-6">06 Goals</h3>
                        <p className="text-white/50">
                            My ultimate goal is to continuously evolve as a developer by embracing new challenges
                            and expanding my technical skillset. I thrive on tackling complex projects that require
                            innovative solutions, and I am deeply committed to giving back to the tech community.
                            I’m always excited to dive into emerging technologies and push the boundaries of
                            what’s possible in modern web development.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    );
};
