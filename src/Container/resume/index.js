import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Main from "../../Components/Headercontent";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

import { Link } from "react-router-dom";
import "./style.css";
function Certificates() {
  return (
    <div>
      <Main text="CERTIFICATES" icon={<BsInfoCircleFill size={40} />} />
      <div className="certificates">
        <div className="c-row">
          <Link to="https://olympus1.mygreatlearning.com/course_certificate/OZAFTMWT">
            <div>
              <img src={img1} />
            </div>
          </Link>

          <Link to="https://www.hackerrank.com/certificates/6842db767980">
            <div>
              <img src={img2} />
            </div>
          </Link>

          <Link to="https://www.hackerrank.com/certificates/c6465910af19">
            <div>
              <img src={img3} />
            </div>
          </Link>
        </div>

        <div className="c-col">
          <Link to="https://www.hackerrank.com/certificates/167fd1c36632">
            <div>
              <img src={img4} />
            </div>
          </Link>

          <Link to="https://media.licdn.com/dms/image/sync/D5627AQFDkywrUcIikg/articleshare-shrink_800/0/1683444226791?e=1687320000&v=beta&t=twUeS7dV2l2cLTbo33OMuc0SEkmbe130aPPIHP--PIo">
            <div>
              <img src={img5} />
            </div>
          </Link>
          <Link to="https://olympus1.mygreatlearning.com/course_certificate/JUXRBQMS">
            <div>
              <img src={img6} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
