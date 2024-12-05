
import { Link } from 'react-router-dom';
import { services } from '../constants/services'

const HomePage = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gray-100 py-20 text-start flex">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        From Virtual Ideas <br /> To Real <span className='hl-color text-blue-500'> Achievements </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                        Meeting Creative delivers innovative digital solutions that help your business grow and succeed in the digital landscape.
                    </p>
                    <div className="space-x-4">
                        <Link
                            to="/services"
                            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
                        >
                            Our Services
                        </Link>
                        <Link
                            to="/contact"
                            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
                            >
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-primary text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Business?</h2>
                    <p className="text-xl mb-8">
                        Let&apos;s discuss how Meeting Creative can help you achieve your digital goals.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;