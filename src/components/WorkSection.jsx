import { FaHeartbeat } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaChild } from "react-icons/fa";

const WorkSection = () => {
  return (
    <div className="WorkSection">
      <h3 id="workStationTitle">Building a better world for and with children</h3>
      <p id="workStationText">
        We work hard to protect children from harm and help them <br /> access quality
        education and health services.
      </p>
      <div className="workBox">
        <div class="feature-box">
          <FaHeartbeat id="change" />
          <h3 class="heading-tertiary u-margin-bottom-small">Health</h3>
          <p class="feature-box-text">
            We improve the health of children and families so children no longer
            die of preventable illnesses and live past their fifth birthday.
          </p>
        </div>

        <div class="feature-box">
          <FaSchool id="change" />
          <h3 class="heading-tertiary u-margin-bottom-small">Education</h3>
          <p class="feature-box-text">
            We create greater access to quality education and ensure that girls
            and boys are able to learn in safe and positive environments.
          </p>
        </div>

        <div class="feature-box">
          <FaChild id="change" />
          <h3 class="heading-tertiary u-margin-bottom-small">Protect</h3>
          <p class="feature-box-text">
            We ensure children are safe at all times and prevent their exposure
            to abuse, neglect, exploitation and violence.
          </p>
        </div>

        <div class="feature-box">
          <FaHandsHelping id="change" />
          <h3 class="heading-tertiary u-margin-bottom-small">Support</h3>
          <p class="feature-box-text">
            When disaster strikes, we ensure that children are given care and
            emotional support to survive, recover and continue to learn and live
            a normal life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
