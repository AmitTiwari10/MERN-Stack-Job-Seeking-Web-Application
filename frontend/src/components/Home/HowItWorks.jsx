// import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Sea Media Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Create an Account with Sea Media today to unlock the power of our audience building technology and gain access to our owned and operated web properties. Reach your target customers and achieve your performance marketing goals effortlessly.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Advertiser/Publisher </p>
              <p>
                Targeting In addition to demographic and geographic attributes,
                Sea Media is able to integrate dynamic surveys within its
                properties, thus enabling Advertisers to gain a deeper
                understanding of their ideal audiences.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Offers/Promoters </p>
              <p>
                Working closely with clients, Ocean Media provides solutions
                which can include verification, validation, and compliance,
                allowing Advertisers to mitigate risks while scaling the
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
