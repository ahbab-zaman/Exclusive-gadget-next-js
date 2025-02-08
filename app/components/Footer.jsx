import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Exclusive</h6>
          <a className="link link-hover">Subscribe</a>
          <p>Get 10% off your first order</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter email"
              className="py-1 pl-2"
            />
            <button className="px-2 py-1 bg-white text-black">Send</button>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>01569118531</p>
        </nav>
        <nav>
          <h6 className="footer-title">Account</h6>
          <a className="link link-hover">Login / Register</a>
          <a className="link link-hover">Shop</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Link</h6>
          <a className="link link-hover">Privacy & Policy</a>
          <a className="link link-hover">Terms of uses</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Downloads</h6>
          <div className="flex justify-center items-center gap-3">
            <Link href="/facebook">
              <FaFacebookF className="text-lg"></FaFacebookF>
            </Link>
            <Link href="/twitter">
              <CiTwitter className="text-lg"></CiTwitter>
            </Link>
            <Link href="/insta">
              <FaInstagram className="text-lg"></FaInstagram>
            </Link>
            <Link href="/linkedin">
              <CiLinkedin className="text-lg"></CiLinkedin>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}
