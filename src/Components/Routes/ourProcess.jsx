import "./ourProcess.css";
import "./whoWeServe.css";
const OurProcess = () => {
  return (
    <div>
      <div className="fundingSectionOne rowreverse">
        <div className="fundingOneMedia aligncenter">
          <img src="../../media/ourProcess.jpg" alt="Image" />
        </div>
        <div className="fundingOneContent">
          <h3>Our Process</h3>
          <h5>It Starts With What’s Right for You</h5>
          <p>
            Getting funding from Utah Business Loans is simple and stress-free.
            We will handle the financing, so you can focus on growing your
            business.
          </p>
          <div className="growButton">
            <a href="#">
              CAll <br /> <span>(888) 559-9825</span>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="processStep">
        <div className="stepWrapper">
          <div className="stepImg">
            <img src="../../media/step1.jpeg" alt="Image" />
            <p>STEP 1</p>
          </div>
          <div className="stepContent">
            <h2>Call (888) 559-9825 and Apply (2 Minutes)</h2>
            <p>
              Answer a few questions about your business.No obligations. No
              impact on your credit score.
            </p>
          </div>
        </div>
        <div className="stepWrapper">
          <div className="stepImg">
            <img src="../../media/step2.jpeg" alt="Image" />
            <p>STEP 2</p>
          </div>
          <div className="stepContent">
            <h2>Receive a Decision Quickly </h2>
            <p>
              Our team reviews your application and delivers a decision —often
              within hours.
            </p>
          </div>
        </div>
        <div className="stepWrapper">
          <div className="stepImg">
            <img src="../../media/step3.jpeg" alt="Image" />
            <p>STEP 3</p>
          </div>
          <div className="stepContent">
            <h2>Review Your Personalized Offer</h2>
            <p>
              A Funding Specialist will walk through the loan solution for you
              and answer any questions.
            </p>
          </div>
        </div>
        <div className="stepWrapper">
          <div className="stepImg">
            <img src="../../media/step4.jpeg" alt="Image" />
            <p>STEP 4</p>
          </div>
          <div className="stepContent">
            <h2>
              Funds are Deposited Into Your Account – Often Within 24 Hours
            </h2>
            <p>
              Once you accept your offer, the funds are deposited directly into
              your account—often the same day.
            </p>
          </div>
        </div>
      </div>

      <div className="upperFooter">
        <h1>Why Businesses Choose Utah Business Loans</h1>
        <div className="termsCard">
          <div className="card" style={{ display: "flex" }}>
            <p style={{ fontSize: "1.2rem" }}>Fast access to working capital</p>
          </div>
          <div className="card">
            <p style={{ fontSize: "1.2rem" }}>
              Minimal paperwork and an easy process
            </p>
          </div>
          <div className="card">
            <p style={{ fontSize: "1.2rem" }}>
              Friendly knowledgeable Funding Specialists to guide you
            </p>
          </div>
        </div>
        <div className="grow">
          <h1>Ready to Move Forward?</h1>
          <p>See what you qualify for today – no risk, no surprises.</p>
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
export default OurProcess;
