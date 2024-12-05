import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Meeting Creative</h3>
          <p className="text-gray-400">
            We create digital solutions that transform <br /> your business vision into reality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
            <Link to="/services" className="text-gray-300 hover:text-white">Our Services</Link>
            <Link to="/team" className="text-gray-300 hover:text-white">Our Team</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <div className="space-y-2">
            <p>Email: contact@meeting.co.th</p>
            <p>Phone: +66 XX XXX XXXX</p>
            {/* <p>Address: Korat, Thailand</p> */}
            <p>555/126 ศุภาลัย เบลล่า หมู่ 4 ต.จอหอ อ.เมือง จ.นครราชสีมา 30310</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p className="text-gray-400">
          © {currentYear} Meeting Creative. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;