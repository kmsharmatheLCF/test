import "./home.css";
import bm1 from "../../assets/buisness1.jpeg";
import bm2 from "../../assets/buisness2.jpeg";
import bm3 from "../../assets/buisness3.jpeg";
import bm4 from "../../assets/buisness4.jpeg";
import bm5 from "../../assets/buisness5.jpeg";
import bm6 from "../../assets/buisness6.jpeg";
const Home = () => {
  return (
    <div className="fundingHome">
      <div className="heroImage"></div>
      <div className="fund applyToday">
        <div className="callButton">
          <h3>Apply Today</h3>
          <p>(888) 559-9825</p>
        </div>
      </div>
      <div className="fundingContent">
        <div className="contentA">
          <h1>Fast, Flexible Funding for Your Buisness</h1>
          <p>
            At Utah Buisness Loans, we help small and mid-sized buisness by
            providing quick, hassle-free funding solutions. Our simple
            application and rapid approvals let you focus on growing your
            buisness - not waiting for funds.
          </p>
        </div>
        <div className="contentB">
          <h4>
            Apply in Minutes. Get Approve in Hours. Access Funds in a Day.
          </h4>
          <ul>
            <li>
              <strong>Apply: </strong>Complete our easy application in just 2
              minutes.
            </li>
            <li>
              <strong>Approve: </strong>Recieve a decision in as little as a 2
              hours.
            </li>
            <li>
              <strong>Funds: </strong>Receive funds in as little as 24 hours.
            </li>
          </ul>
        </div>
      </div>
      <div className="noSection">
        <div className="costs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100px"
            viewBox="0 -960 960 960"
            width="100px"
            fill="#254086"
          >
            <path d="M451-193h55v-52q61-7 95-37.5t34-81.5q0-51-29-83t-98-61q-58-24-84-43t-26-51q0-31 22.5-49t61.5-18q30 0 52 14t37 42l48-23q-17-35-45-55t-66-24v-51h-55v51q-51 7-80.5 37.5T343-602q0 49 30 78t90 54q67 28 92 50.5t25 55.5q0 32-26.5 51.5T487-293q-39 0-69.5-22T375-375l-51 17q21 46 51.5 72.5T451-247v54Zm29 113q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
          </svg>
          <p>No Upfront Costs</p>
        </div>
        <div className="costs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100px"
            viewBox="0 -960 960 960"
            width="100px"
            fill="#25408f"
          >
            <path d="m783-260-45-45q17-31 25-65.5t8-70.5q2-128-89-213t-216-85q-34 0-67.5 8T336-707l-44-44q41-25 84-36.5t90-11.5q75 0 141.5 27.5T724-696q50 48 79 113.5T831-441q-1 47-13 93t-35 88Zm70-402L689-827l45-39 165 158-46 46ZM841-32 708-165q-45 40-107 62.5T472-80q-74 0-139-28t-113-77q-48-49-76-115t-28-142q0-64 21-121t65-111l-52-52-59 59-45-45 59-59-70-70 43-43L884-75l-43 43ZM472-142q52-1 101-18.5t90-50.5L242-632q-34 41-51.5 89.5T173-441q0 125 86 213t213 86Zm-19-280Zm84-84Z" />
          </svg>
          <p>No Credit Impact</p>
        </div>
        <div className="costs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100px"
            viewBox="0 -960 960 960"
            width="100px"
            fill="#25408f"
          >
            <path d="m840-206-60-60v-514h-60v90H355L205-840h177q7-35 34.5-57.5T480-920q36 0 63.5 22.5T578-840h202q26 0 43 17t17 43v574ZM480-780q17 0 28.5-11.5T520-820q0-17-11.5-28.5T480-860q-17 0-28.5 11.5T440-820q0 17 11.5 28.5T480-780Zm214 600L180-694v514h514Zm-514 60q-26 0-43-17t-17-43v-574l-59-59 43-43 752 752-43 43-59-59H180Z" />
          </svg>
          <p>No Commitment</p>
        </div>
      </div>
      <div className="bLoanWrapper">
        <div className="bLoan">
          <div className="bLoanMedia">
            <div className="bLoanImg">
              <img src={bm1} alt="Image" />
              <img src={bm2} alt="Image" />
              <img src={bm3} alt="Image" />
              <img src={bm4} alt="Image" />
              <img src={bm5} alt="Image" />
              <img src={bm6} alt="Image" />
            </div>
          </div>
          <div className="bLoanContent">
            <div className="bLoanA">
              <h1>Small Business Loans Designed Around You</h1>
              <p>
                We know that every business is unique. That's why we tailor our
                solutions to meet your specific needs -- with funding options
                understand that different business have different needs and will
                help you secure the best <a href="#">funding solution</a> for
                your buisness
              </p>
            </div>
            <div className="bLoanB">
              <h4>
                Our funding solutions cater to a wide range of{" "}
                <a href="#">industries,</a> including
              </h4>
              <div className="bloanBList">
                <ul>
                  <li>Trucking & Transportation</li>
                  <li>Retail</li>
                  <li>Restaurants</li>
                  <li>Liquor Stores</li>
                  <li>Healthcare</li>
                  <li>E-Commerce</li>
                  <li>Hospitality</li>
                  <li>And many more</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="upperFooter">
        <h1>Why Work with Utah Business Loans?</h1>
        <div className="termsCard">
          <div className="card">
            <h3>Clear Terms</h3>
            <p>Transparent loan terms with no surprises.</p>
          </div>
          <div className="card">
            <h3>Business-Focused</h3>
            <p>We look at your potential,not just your credit.</p>
          </div>
          <div className="card">
            <h3>Personalized Support</h3>
            <p>
              A dedicated funding expert will guide you every step of the way.
            </p>
          </div>
        </div>
        <div className="grow">
          <h1>Ready to Grow?</h1>
          <p>See how much you qualify for – it only takes a few minutes</p>
        </div>
        <div className="growButton">
          <a href="#">
            CAll <br /> <span>(888) 559-9825</span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
