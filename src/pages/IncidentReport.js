import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import styles from "../components/Layout/Form.module.css";
import Input from "../components/UI/Input";
import TextArea from "../components/UI/TextArea";
import Button from "../components/UI/Button";

function IncidentReport() {
  return (
    <div>
      <Navbar />
      <div className={styles.report}>
        <div className={styles.report_header}>
          <h1>Report an incident</h1>
          <p>
            We are here to make sure that you have the best experience at Tenon,
            please let us know what difficulty you have faced with us.
          </p>
        </div>
        <div className={styles.report_personal_info}>
          <p>Personal information</p>
          <div className={styles.report_personal_info_input}>
            <Input
              className={styles.input}
              label="First name"
              placeholder="Placeholder"
            />
            <Input
              className={styles.input}
              label="Last name"
              placeholder="Placeholder"
            />
          </div>

          <div className={styles.report_personal_info_input}>
            <Input
              className={styles.input}
              label="Email address"
              placeholder="Placeholder"
            />
            <Input
              className={styles.input}
              label="Phone number"
              placeholder="Placeholder"
            />
          </div>
        </div>
        <div className={styles.report_personal_info}>
          <p>Incident information</p>
          <div className={styles.report_personal_info_input}>
            <Input
              className={styles.input}
              label="Date of incident"
              placeholder="Placeholder"
              type="date"
            />
            <Input
              className={styles.input}
              label="Location of incident"
              placeholder="Placeholder"
            />
          </div>
          <div className={styles.report_personal_info_input}>
            <div className={styles.rateFilter}>
              <label>Category of incident</label>
              <select>
                <option value="3">Category of incident</option>
              </select>
            </div>

            <Input
              className={styles.input}
              label="Staff name / truck number"
              placeholder="Placeholder"
            />
          </div>
          <div className={styles.report_personal_info_input}>
            <TextArea
              className={styles.text_area}
              label="Tell us what happened"
              placeholder="Placeholder"
            />
          </div>
          <div className={styles.report_personal_info_input_file}>
            <div className={styles.report_personal_info_input_file_inner}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11M19.25 9.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75Z"
                  stroke="#DCDEE6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Drop your files or click to upload</p>
              <p>Supported file types: PNG, JPG, GIF</p>
              <div>
                <Input
                  className={styles.input}
                  type="file"
                  placeholder="Browse"
                />
              </div>
            </div>
          </div>
          <Button className={styles.btn}>Submit</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IncidentReport;
