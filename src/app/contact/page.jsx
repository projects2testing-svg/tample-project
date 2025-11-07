export default function ContactPage() {
    return (
        <section className="py-16 bg-[var(--white-color)]">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <p className="text-xs bg-[var(--primary-color)]/20 text-[var(--primary-color)] font-medium px-4 py-1.5 rounded-full inline-block">
                            Contact Us
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
                            Let's Get In Touch
                        </h1>
                        <p className="text-sm md:text-base text-gray-500 mt-4 max-w-xl mx-auto">
                            Have questions about our temple services or events? Reach out to us and we'll be happy to assist you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                                
                                <div className="space-y-4">
                                    {/* Phone */}
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.987 1.85a1.25 1.25 0 0 1 1.265-.1l2.5 1.25a1.25 1.25 0 0 1 .69 1.123v1.504a1.25 1.25 0 0 1-.81 1.174l-1.49.595a8.75 8.75 0 0 0 4.192 4.192l.595-1.49a1.25 1.25 0 0 1 1.174-.81h1.504a1.25 1.25 0 0 1 1.123.69l1.25 2.5a1.25 1.25 0 0 1-.1 1.265l-1.25 1.875a1.25 1.25 0 0 1-1.265.575 12.5 12.5 0 0 1-10.625-10.625 1.25 1.25 0 0 1 .575-1.265L6.987 1.85z" fill="var(--primary-color)"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Phone</p>
                                            <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="var(--primary-color)"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <p className="font-medium text-gray-900">contact@temple.org</p>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 1.875a6.25 6.25 0 0 0-6.25 6.25c0 4.375 6.25 10.625 6.25 10.625s6.25-6.25 6.25-10.625A6.25 6.25 0 0 0 10 1.875zm0 8.75a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="var(--primary-color)"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Address</p>
                                            <p className="font-medium text-gray-900">123 Temple Street<br />Spiritual City, SC 12345</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-200 my-6"></div>

                                {/* Temple Hours */}
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Temple Hours</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Monday - Friday</span>
                                            <span className="font-medium">6:00 AM - 8:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Saturday - Sunday</span>
                                            <span className="font-medium">5:00 AM - 9:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                                <form className="flex flex-col text-sm text-gray-800">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div className="md:col-span-2">
                                            <label htmlFor="name" className="font-medium text-gray-700">Full Name</label>
                                            <div className="flex items-center mt-2 h-12 pl-4 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-[var(--primary-color)] transition-all overflow-hidden">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="var(--primary-color)"/>
                                                </svg>
                                                <input 
                                                    type="text" 
                                                    className="h-full px-3 w-full outline-none bg-transparent placeholder-gray-400" 
                                                    placeholder="Enter your full name" 
                                                    required 
                                                />
                                            </div>
                                        </div>

                                        {/* Email Address */}
                                        <div>
                                            <label htmlFor="email" className="font-medium text-gray-700">Email Address</label>
                                            <div className="flex items-center mt-2 h-12 pl-4 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-[var(--primary-color)] transition-all overflow-hidden">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="var(--primary-color)"/>
                                                </svg>
                                                <input 
                                                    type="email" 
                                                    className="h-full px-3 w-full outline-none bg-transparent placeholder-gray-400" 
                                                    placeholder="Enter your email address" 
                                                    required 
                                                />
                                            </div>
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label htmlFor="phone" className="font-medium text-gray-700">Phone Number</label>
                                            <div className="flex items-center mt-2 h-12 pl-4 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-[var(--primary-color)] transition-all overflow-hidden">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.987 1.85a1.25 1.25 0 0 1 1.265-.1l2.5 1.25a1.25 1.25 0 0 1 .69 1.123v1.504a1.25 1.25 0 0 1-.81 1.174l-1.49.595a8.75 8.75 0 0 0 4.192 4.192l.595-1.49a1.25 1.25 0 0 1 1.174-.81h1.504a1.25 1.25 0 0 1 1.123.69l1.25 2.5a1.25 1.25 0 0 1-.1 1.265l-1.25 1.875a1.25 1.25 0 0 1-1.265.575 12.5 12.5 0 0 1-10.625-10.625 1.25 1.25 0 0 1 .575-1.265L6.987 1.85z" fill="var(--primary-color)"/>
                                                </svg>
                                                <input 
                                                    type="tel" 
                                                    className="h-full px-3 w-full outline-none bg-transparent placeholder-gray-400" 
                                                    placeholder="Enter your phone number" 
                                                />
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div className="md:col-span-2">
                                            <label htmlFor="subject" className="font-medium text-gray-700">Subject</label>
                                            <div className="flex items-center mt-2 h-12 pl-4 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-[var(--primary-color)] transition-all overflow-hidden">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 1.875a6.25 6.25 0 0 0-6.25 6.25c0 4.375 6.25 10.625 6.25 10.625s6.25-6.25 6.25-10.625A6.25 6.25 0 0 0 10 1.875zm0 8.75a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="var(--primary-color)"/>
                                                </svg>
                                                <input 
                                                    type="text" 
                                                    className="h-full px-3 w-full outline-none bg-transparent placeholder-gray-400" 
                                                    placeholder="What is this regarding?" 
                                                    required 
                                                />
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="md:col-span-2">
                                            <label htmlFor="message" className="font-medium text-gray-700">Message</label>
                                            <textarea 
                                                rows="4" 
                                                className="w-full mt-2 p-4 bg-transparent border border-gray-300 rounded-2xl resize-none outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all placeholder-gray-400" 
                                                placeholder="Tell us how we can help you..." 
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    
                                    {/* Submit Button */}
                                    <button 
                                        type="submit" 
                                        className="flex items-center justify-center gap-2 mt-6 bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 text-white py-3.5 w-full rounded-full transition-all duration-300 font-medium"
                                    >
                                        Send Message
                                        <svg className="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}