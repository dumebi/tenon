import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import styles from "../components/Sections/TermsAndConditions.module.css";

function TermsAndConditions() {
  return (
    <div>
      <Navbar />
      <div className={styles.tc}>
        <div className={styles.tc_inner}>
          <h1>Terms and conditions</h1>
          <div>
            <h2>Terms and Conditions</h2>
            <p>
              Welcome to the https://tenonlogisticsltd.com/. This website is
              owned and operated by Tenon Logistics Limited (“TENON LOGISTICS”).
              Information therein is for historical purposes only and that while
              information contained within the releases was believed to be
              accurate at the time of issue, the Company will not, and
              specifically disclaims any duty to, update this information.
            </p>
            <p>
              Visitors to this website are bound by the following terms and
              conditions so please read these carefully before going on. For the
              purposes of these terms and conditions, “this website” means the
              following parts of the https://tenonlogisticsltd.com/.
            </p>
            <p>
              This website contains material including text, photographs and
              other images and sound, which is protected by copyright and/or
              other intellectual property rights. All copyright and other
              intellectual property rights in this material are either owned by
              TENON LOGISTICS or have been licensed to it by the owner(s) of
              those rights so that it can use this material as part of this
              website.
            </p>
            <p>
              This website also contains trademarks, including the mark “TENON
              LOGISTICS” and the TENON LOGISTICS logo. All trademarks included
              on this website belong to TENON LOGISTICS or have been licensed to
              it by the owner(s) of those trade marks for use on this website.
            </p>
            <div>
              <ul>
                <p>You may</p>
                <li>access any part of the website;</li>
                <li>
                  print off one copy of any or all of the pages for your own
                  personal reference.
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <p>You may not</p>
                <li>
                  copy (whether by printing off onto paper, storing on disk,
                  downloading or in any other way), distribute (including
                  distributing copies), broadcast, alter or tamper with in any
                  way or otherwise use any material contained in the website
                  except as set out under “You may”. These restrictions apply in
                  relation to all or part of the material on the website.
                </li>
                <li>
                  remove any copyright, trademark or other intellectual property
                  notices contained in the original material from any material
                  copied or printed off from the website; without our express
                  written consent.
                </li>
              </ul>
            </div>

            <p>
              If you wish to provide a hypertext or other link to this website,
              please email the Webmaster and we will consider your request. It
              is our decision as to whether we agree to your request and we do
              not have to do so.
            </p>
            <p>
              TENON LOGISTICS may change the terms and conditions and disclaimer
              set out above from time to time. By browsing this website, you are
              accepting that you are bound by the current terms and conditions
              and disclaimer and so you should check these each time you revisit
              the site.
            </p>
          </div>

          <div>
            <h2>Changes to Terms and Conditions</h2>
            <ul>
              <li>
                TENON LOGISTICS may change the terms and conditions and
                disclaimer set out above from time to time. By browsing this
                website you are accepting that you are bound by the current
                terms and conditions and disclaimer and so you should check
                these each time you revisit the site.
              </li>
            </ul>

            <ul>
              <h3>Changes to/Operation of website</h3>
              <li>
                TENON LOGISTICS may change the format and content of this
                website at any time.
              </li>
              <li>
                TENON LOGISTICS may suspend the operation of this website for
                support or maintenance work, in order to update the content or
                for any other reason.
              </li>
              <li>
                TENON LOGISTICS reserves the right to terminate access to this
                website at any time and without notice.
              </li>
            </ul>

            <ul>
              <h3>Complaints Procedure</h3>
              <p>
                If you have a question or complaint about this website, please
                contact the TENON LOGISTICS webmaster.
              </p>
            </ul>

            <ul>
              <h3>Jurisdiction</h3>
              <li>
                These terms and conditions are governed by and to be interpreted
                in accordance with Nigerian law and in the event of any dispute
                arising in relation to these terms and conditions or any dispute
                arising in relation to the website whether in contract or tort
                or otherwise the Nigerian courts will have non-exclusive
                jurisdiction over such.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermsAndConditions;
