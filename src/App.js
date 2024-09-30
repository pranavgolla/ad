import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about-us"
          element={
            <div className="c2">
              <div className="c3">
                <h1>About Us</h1>
                <p>
                  At JC Creations, we are dedicated to delivering an exceptional
                  online shopping experience for our valued customers. Our
                  expansive collection of designers and designs is continually
                  expanding, offering a diverse selection of creative embroidery
                  designs at competitive prices. We take pride in the global
                  recognition our designs have garnered, a testament to the
                  passionate craftsmanship of our exemplary design team.
                </p>

                <p>
                  For those seeking a more personalized touch, JC Creations also
                  provides custom-made embroidery designs. Thank you for
                  exploring our website, and we trust that you will discover a
                  design that resonates with you. Your feedback is important to
                  us; please feel free to reach out via email or contact us with
                  any questions or inquiries.
                </p>

                <h1>Contact Us</h1>
                <p>Phone: 918310726160</p>
                <p>Email: jc.creations99@gmail.com</p>
                <p>Address: JC Creations, Yelahanka, Bangalore-560064, India</p>
                <p>
                  We would love to hear your suggestions or comments about our
                  website. If you have any problem regarding the download of an
                  order, please contact us with your order details, so we can
                  assist you as soon as possible.
                </p>
              </div>
              <Home />
            </div>
          }
        />
        <Route
          path="/delivery-info"
          element={
            <div className="c2">
              <div className="c3">
                <h1>Delivery Information</h1>

                <h1>Shipping Policy</h1>
                <p>
                  The offerings on this platform are entirely digital, and upon
                  successful payment, users have the ability to promptly
                  download the products onto their devices as per their
                  preference. Furthermore, these digital items can be
                  re-downloaded from the site at any time without the necessity
                  for additional payments.
                </p>
              </div>
              <Home />
            </div>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <div className="c2">
              <div className="c3">
                <h1>Privacy Policy</h1>

                <p>
                  This website is owned, hosted, and operated by "JC Creations"
                  (hereinafter referred to as "JC Creations"). Unless explicitly
                  stated otherwise, all content featured or displayed on the
                  website, including but not limited to photographic images,
                  text, graphics, website layout, sound, illustrations,
                  software, trade dress, trademarks, and their arrangement ("JC
                  Creations Content"), is the property of JC Creations, its
                  affiliates, subsidiaries, licensors, contributors, or
                  third-party image partners.
                </p>

                <p>By using the website, you agree to:</p>

                <ul>
                  <li>
                    Provide accurate, current, and complete information about
                    yourself as prompted by any registration forms on the
                    website ("Registration Data").
                  </li>
                  <li>
                    Maintain and promptly update the Registration Data and any
                    other information you provide to JC Creations to ensure its
                    accuracy, currency, and completeness.
                  </li>
                  <li>
                    Safeguard the security of your password and identification.
                  </li>
                  <li>
                    Notify JC Creations immediately of any unauthorized use of
                    your account or any other security breaches.
                  </li>
                  <li>
                    Assume full responsibility for all activities conducted
                    through your account.
                  </li>
                  <li>
                    Acknowledge and assume all risks associated with
                    unauthorized access to the Registration Data and any other
                    information you provide to JC Creations.
                  </li>
                </ul>
              </div>
              <Home />
            </div>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <div className="c2">
              <div className="c3">
                <h1>Terms & Conditions</h1>

                <p>
                  The Terms and Conditions outlined here are applicable to all
                  services provided by JC Creations. By registering as a Buyer,
                  you agree to adhere to these Terms and Conditions, which can
                  only be modified through private discussion and arrangement.
                  We encourage you to familiarize yourself with our website and
                  how our system operates.
                </p>

                <p>
                  Upon selecting your purchase, you will receive the purchased
                  item or folder within a timeframe ranging from 1 minute to 24
                  hours. Rest assured, we will not debit your account until the
                  purchase has been accepted and verified.
                </p>

                <p>
                  Our website offers various internet-based services, including
                  Digital Product purchases and a Consulting Service. As a User,
                  you will register on the site, log in, and place your order.
                  Once payment is received and confirmed by our payment service
                  provider, you will either receive a link to download your
                  purchased product or the download will commence automatically.
                  Should you encounter any issues, please promptly contact JC
                  Creations support for assistance.
                </p>

                <p>
                  Each product or design purchased through your registered
                  account can be downloaded an unlimited number of times.
                </p>
              </div>
              <Home />
            </div>
          }
        />
        <Route
          path="/returns-cancellation"
          element={
            <div className="c2">
              <div className="c3">
                <h1>Returns & Cancellation</h1>

                <p>
                  JC Creations does not provide refunds or re-credits for
                  downloaded files. Requests for file returns will only be
                  entertained in instances of technical issues with the file,
                  subject to the sole discretion of JC Creations. The site
                  management retains the right to initially address and resolve
                  any technical concerns, which may involve offline correction
                  of the final artwork for the customer.
                </p>
              </div>
              <Home />
            </div>
          }
        />
        <Route
          path="/pricing"
          element={
            <div className="c2">
              <div className="c3">
                <h1>Pricing</h1>

                <p>
                  The price for each product or design is clearly indicated
                  alongside its respective listing. Please note that the site
                  management retains the authority to modify the pricing of any
                  product or design on the site at its discretion, and such
                  adjustments may occur at any time. It is important to
                  emphasize that any alterations in pricing do not impact
                  previously purchased items.
                </p>

                <p>
                  Payments can be conveniently made using credit cards or UPI
                  (Unified Payments Interface).
                </p>
              </div>
              <Home />
            </div>
          }
        />
        <Route
          path="/contact-us"
          element={
            <div className="c2">
              <div className="c3">
                <h1>JC Creations</h1>

                <p>
                  36/2, Narayanappa Layout,
                  <br />
                  Ramagondanahalli,
                  <br />
                  Yelahanka, Bengaluru-560064.
                </p>

                <h1>Telephone</h1>
                <p>+91 83107 26160</p>
              </div>
              <div>
                <Home />
              </div>
            </div>
          }
        />
        <Route
          path="/site-map"
          element={
            <div className="c2">
              <h1 className="c3">Site Map Page</h1>

              <div>
                <Home />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
