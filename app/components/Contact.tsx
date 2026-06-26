"use client"

import { motion } from 'framer-motion'
import { FiMail, FiPhoneCall } from 'react-icons/fi'


export const Contact = () => {


    return (
        <section id="contact" className='py-32 text-white max-w-[1200px] mx-auto px-4'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='grid lg:grid-cols-2 gap-16'
            >
                <div className='space-y-12'>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-7xl font-bold text-gray-300'
                    >
                        Get in <span className='text-purple-500'>touch</span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='glass p-8 rounded-2xl space-y-8'
                    >
                        <div className='space-y-2'>
                            <p className='text-lg text-purple-300'>Phone / Whatsapp</p>
                            <a
                                href='tel:+2349046764158'
                                className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'
                            >
                                +234 904 676 4158
                                <span className="text-purple-400/50 text-sm font-light "><FiPhoneCall size={16} /></span>
                            </a>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-lg text-purple-300'>Email</p>
                            <a
                                href='mailto:greatefekodo@gmail.com'
                                className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'
                            >
                                greatefekodo@gmail.com
                                {/* <span className="text-purple-400/70 text-sm font-light"><FiMail size={16} /></span> */}
                            </a>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-lg text-purple-300'>Address</p>
                            <address className='text-xl not-italic leading-relaxed'>
                                Lekki, Lagos, Nigeria
                            </address>
                        </div>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507402.3171548489!2d3.445209142117286!3d6.511481728242044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf75df5c74367%3A0x6a7e7df9d6c1cd4a!2sLekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1782398437055!5m2!1sen!2sng" 
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen
                        loading='lazy'
                    >

                    </iframe>

                </motion.div>

            </motion.div>
        </section>
    )
}