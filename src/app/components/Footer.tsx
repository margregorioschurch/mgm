"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faWhatsapp,
  faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 text-white py-12 bg-cover bg-center"
      style={{ backgroundImage: "url(/img/calvary-mountain-sunset-background-vector.webp)" }}
    >
      <div className="bg-opacity-70 p-6">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            {/* Church Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-300">Church</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-yellow-200">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-yellow-200">Contact Us</Link></li>
                <li><Link href="/booking" className="hover:text-yellow-200">Bookings</Link></li>
                <li><a href="#" className="hover:text-yellow-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-200">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-300">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://goo.gl/maps/bPcQHy4m9zeorK3y9"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-200"
                  >
                    Thottapuzha, Eraviperoor, Kerala 689542
                  </a>
                </li>
                <li>
                  <a href="tel:04692668858" className="hover:text-yellow-200">
                    0469-2668858
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:margregorioschurch71@gmail.com"
                    className="hover:text-yellow-200"
                  >
                    margregorioschurch71@gmail.com
                  </a>
                </li>
              </ul>

              <div className="flex space-x-4 mt-4 text-xl">
                <a href="#" className="hover:text-green-400">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                  href="https://www.facebook.com/groups/205694423941111"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.youtube.com/@anugrahaweddingstudio8764"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-400"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="https://directory.mosc.in/parishes/mar-gregorios-orthodox-church-49/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-300"
                >
                  <FontAwesomeIcon icon={faInternetExplorer} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-300">Service</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-300">Sunday</span>
                  <p>06:30AM - 10:30AM</p>
                </li>
                <li>
                  <span className="text-gray-300">Monday - Friday</span>
                  <p>TBA</p>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-300">Newsletter</h4>
              <p className="text-gray-300">Subscribe to get the latest news.</p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-2 mb-3 rounded bg-gray-700/90 text-white border border-gray-600"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-yellow-400 text-gray-800 font-bold rounded hover:bg-yellow-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Visitor Counter */}
          <div className="text-center mt-10">
            <a
              href="https://hits.sh/margregorioschurch.github.io/mgm/"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <img
                alt="Hits"
                src="https://hit.sh/margregorioschurch.github.io/mgm.svg?style=for-the-badge&label=Visitors%20Count&color=eaeeb5&labelColor=bc451d"
              />
            </a>
          </div>

          {/* Bottom */}
          <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; {new Date().getFullYear()} Mar Gregorios Church, All Rights Reserved.</p>
            <div className="space-x-4 mt-2 md:mt-0">
              <Link href="/index" className="hover:text-yellow-200">Home</Link>
              <Link href="#" className="hover:text-yellow-200">Cookies</Link>
              <Link href="#" className="hover:text-yellow-200">Help</Link>
              <Link href="#" className="hover:text-yellow-200">FAQs</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
