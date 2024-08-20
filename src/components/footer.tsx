import { AccordionItem } from "./accordianItem";
import fb from "../assets/facebook.svg";
import insta from "../assets/instagram.svg";
import tw from "../assets/twitter.svg";
import yt from "../assets/youtube.svg";
import LIn from "../assets/linkedin.svg";
import reliable from "../assets/reliable.svg";
import secure from "../assets/secure.svg";
import affordable from "../assets/affordable.svg";
import onemgSeal from "../assets/1mgSeal.png";
import iso from "../assets/ISO-certify.jpg";
export const Footer = () => {
  return (
    <>
      <div className="Footer bg-[#fffcf8] w-full mt-1 flex flex-col gap-y-3">
        <div className="footer-options flex gap-x-32 px-20 py-20 w-full">
          <div className="col flex flex-col">
            <div className="text-sm font-semibold cursor-text">Know Us</div>
            <div className="flex flex-col gap-y-1 mt-3">
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                About Us
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Contact Us
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Press Coverage
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Careers
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Business Partnership
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Become a Health Partner
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Corporate Governance
              </div>
            </div>
          </div>
          <div className="col flex flex-col">
            <div className="text-sm font-semibold cursor-text">
              Our Policies
            </div>

            <div className="flex flex-col gap-y-1 mt-3">
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Privacy Policy
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Terms and Conditions
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Editorial Policy
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Return Policy
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                IP Policy
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Grievance Redressal Policy
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Fake Jobs and Fraud Disclaimer
              </div>
            </div>
          </div>
          <div className="col flex flex-col">
            <div className="text-sm font-semibold cursor-text">
              Our Services
            </div>
            <div className="flex flex-col gap-y-1 mt-3">
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Order Medicines
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Book Lab Tests
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Consult a Doctor
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Ayurveda Articles
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Hindi Articles
              </div>
              <div className="text-exss text-gray-600 cursor-pointer font-medium">
                Care Plan
              </div>
            </div>
          </div>
          <div className="col flex flex-col">
            <div className="text-sm font-semibold cursor-text">Connect</div>
            <div className="flex flex-col gap-y-2 mt-3">
              <div className="text-menu text-gray-600 cursor-pointer font-medium">
                Social Links
              </div>
              <div className="flex gap-x-2">
                <img className="size-5" src={fb} alt="" />
                <img className="size-5" src={insta} alt="" />
                <img className="size-5" src={tw} alt="" />
                <img className="size-5" src={yt} alt="" />
                <img className="size-5" src={LIn} alt="" />
              </div>
              <div className="text-menu text-gray-600 cursor-pointer font-medium">
                Want daily dose of health?
              </div>
              <button className="bg-red-500 w-2/3 py-2 text-white text-sm rounded-sm font-bold uppercase">
                sign up
              </button>
            </div>
          </div>
          <div className="col flex flex-col">
            <div className="text-sm font-semibold cursor-text">
              Download App
            </div>
            <div className="flex flex-col gap-y-1 mt-3">
              <div className="icons icon1 cursor-pointer"></div>
              <div className="icons icon2 cursor-pointer"></div>
            </div>
          </div>
        </div>
        <div className="px-20">
          <div className="border-y flex gap-x-3">
            <div className="flex gap-x-5 py-10 px-10">
              <div className="flex gap-x-5">
                <img className="w-80 object-contain" src={reliable} alt="" />
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold">Reliable</div>
                <div className="text-exss text-gray-600 text-wrap tracking-wide mt-3">
                  All products displayed on Tata 1mg are procured from verified
                  and licensed pharmacies. All labs listed on the platform are
                  accredited
                </div>
              </div>
            </div>
            <div className="flex gap-x-5 py-10 px-10">
              <div className="flex gap-x-5">
                <img className="w-80 object-contain" src={secure} alt="" />
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold">
                Secure</div>
                <div className="text-exss text-gray-600 text-wrap tracking-wide mt-3">
                  Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption
                  and is Payment Card Industry Data Security Standard (PCI DSS)
                  compliant{" "}
                </div>
              </div>
            </div>
            <div className="flex gap-x-5 py-10 px-10">
              <div className="flex gap-x-5">
                <img className="w-80 object-contain" src={affordable} alt="" />
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold">Affordable</div>
                <div className="text-exss text-gray-600 text-wrap tracking-wide mt-3">
                  Find affordable medicine substitutes, save up to 50% on health
                  products, up to 80% off on lab tests and free doctor
                  consultations.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex w-full justify-center gap-x-3">
            <img className="object-contain" src={onemgSeal} alt="" />
            <img className="object-contain w-40" src={iso} alt="" />
          </div>
          <div className="font-bold text-sm text-center mt-3">
            India's only LegitScript and ISO/ IEC 27001:2022 certified online
            healthcare platform
          </div>
        </div>
        <div className="border-y mt-5">
          <AccordionItem title="Know more about Tata 1mg">
            <div className="flex flex-col gap-y-1">
              <div className="leading-5 tracking-wider font-bold text-sm">
                Access medical and health information
              </div>
              <div className="text-gray-500 text-wrap text-sm font-extralight leading-5">
                Tata 1mg provides you with medical information which is curated,
                written and verified by experts, accurate and trustworthy. Our
                experts create high-quality content about medicines, diseases,
                lab investigations, Over-The-Counter (OTC) health products,
                Ayurvedic herbs/ingredients, and alternative remedies.
              </div>
            </div>
            <div className="flex flex-col gap-y-1 mt-5">
              <div className="leading-5 tracking-wider font-bold text-sm">
                Order medicines online
              </div>
              <div className="text-gray-500 text-wrap text-sm font-extralight leading-5">
                Get free medicine home delivery in over 1800 cities across
                India. You can also order Ayurvedic, Homeopathic and other
                Over-The-Counter (OTC) health products. Your safety is our top
                priority. All products displayed on Tata 1mg are procured from
                verified and licensed pharmacies.
              </div>
            </div>
            <div className="flex flex-col gap-y-1 mt-5">
              <div className="leading-5 tracking-wider font-bold text-sm">
                Book lab tests
              </div>
              <div className="text-gray-500 text-wrap text-sm font-extralight leading-5">
                Book any lab tests and preventive health packages from certified
                labs and get tested from the comfort of your home. Enjoy free
                home sample collection, view reports online and consult a doctor
                online for free.{" "}
              </div>
            </div>
            <div className="flex flex-col gap-y-1 mt-5">
              <div className="leading-5 tracking-wider font-bold text-sm">
                Consult a doctor online
              </div>
              <div className="text-gray-500 text-wrap text-sm font-extralight leading-5">
                Got a health query? Consult doctors online from the comfort of
                your home for free. Chat privately with our registered medical
                specialists to connect directly with verified doctors. Your
                privacy is guaranteed.
              </div>
            </div>
            <div className="mt-10 flex gap-x-3">
              <div className="">
                <img src={fb} alt="" />
              </div>
              <div className="">
                <img src={tw} alt="" />
              </div>
              <div className="">
                <img src={insta} alt="" />
              </div>
            </div>
          </AccordionItem>
        </div>
        <div className="w-full flex justify-center mt-5">
          <div className="icons payments"></div>
        </div>
        <div className="font-semibold text-center text-gray-400 text-sm px-20 py-5">
          © 2024 Tata 1mg. All rights reserved. All medicines are dispensed in
          compliance with the Drugs and Cosmetics Act, 1940 and Drugs and
          Cosmetics Rules, 1945. We do not process requests for Schedule X and
          habit forming drugs.
        </div>
      </div>
    </>
  );
};
