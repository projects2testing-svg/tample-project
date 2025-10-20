import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Highlights", href: "/solutions/enterprise" },
        { label: "About", href: "/resources/docs" },
        { label: "Festival", href: "/contact-us" },
        { label: "Contact Us", href: "/company/contact" },
      ],
    },
    {
      title: "Important Pages",
      links: [
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Administration", href: "/administration" },
        { label: "Donation", href: "/get-started" },
        { label: "Book Now", href: "/login" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { icon: <FaFacebookF />, href: "https://facebook.com" },
        { icon: <FaInstagram />, href: "https://instagram.com" },
        { icon: <FaTwitter />, href: "https://twitter.com" },
        { icon: <FaYoutube />, href: "https://youtube.com" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--white-color)] border-t border-gray-200 text-[var(--gray-color)] ">
      {/* Top Footer Section */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-12 container">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand Info */}
          <div className="max-w-[400px]">
            <div className="flex items-center space-x-2">
              <img
                src="https://www.maakamakhya.org/assets/images/logo.png"
                alt="Borbheti Logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-gray-900">Borbheti</span>
            </div>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-600">
              Welcome to Borbheti Temple a sacred destination for spiritual seekers.
              Join us to experience divine energy, participate in festivals, and contribute
              to temple development through your generous donations.
            </p>
          </div>

          {/* Link Sections */}
          <div className="flex flex-wrap justify-between w-full md:w-[55%] gap-10">
            {linkSections.slice(0, 2).map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-xl text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-[16px] hover:text-[var(--primary-color)] hover:underline transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Follow Us</h3>
              <div className="flex items-center space-x-4">
                {linkSections[2].links.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="p-3 rounded-full border border-gray-300 hover:bg-[var(--primary-color)] hover:text-white transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 py-4 text-center text-sm md:text-base text-gray-600">
        <p>
          © {new Date().getFullYear()} Borbheti Temple All Rights Reserved.
        </p>
        <p className="mt-2 text-sm">
          Designed & Developed by{" "}
          <a
            href="https://yourcompany.com"
            target="_blank"
            className="font-semibold hover:underline text-[var(--primary-color)]"
          >
            Shahed
          </a>
          . Need a professional website?{" "}
          <a
            href="mailto:info@yourcompany.com"
            className="hover:underline text-[var(--primary-color)]"
          >
            Contact us today
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
