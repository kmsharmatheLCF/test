import "./fundingSolution.css";
import fsol from "../../assets/fundingSolution.jpeg";
import lprocess from "../../assets/loanProcess.jpeg";
const FundingSolution = () => {
  return (
    <>
      <div className="fundingSectionOne">
        <div className="fundingOneMedia">
          <img src={fsol}alt="Image" />
        </div>
        <div className="fundingOneContent">
          <h3>Funding Solutions Built for Your Business</h3>
          <h5>
            Your Business Your buspiness is unique – your financing should be
            too
          </h5>
          <p>
            At <strong>Utah Business Loans</strong>, we help small and mid-sized
            business access the capital they need, quickly and easily. With a
            simple application, fast approvals, ad flexible terms, we help you
            meet your goals – quickly and easily.
          </p>
          <div className="growButton">
            <a href="#">
              CAll <br /> <span>(888) 559-9825</span>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="fundingSectionTwo">
        <div className="fundingTwoContent">
          <h2>Our Loan Options</h2>
          <div className="twoContent">
            <h4>Small Buisness Loan</h4>
            <p>
              A lump sum of capital with a straightforward payback schedule.
              Ideal for businesses that need quick access to funds. —without the
              headaches of working with a big bank.
            </p>
          </div>
          <div className="twoContent">
            <h4>Equipment Financing</h4>
            <p>
              Purchase or lease the equipment your business needs — without
              tying up your cash flow. Preserve your working capital while
              growing your operations.
            </p>
          </div>
          <div className="twoContent">
            <h4>Business Line of Credit</h4>
            <p>
              Access flexible funding whenever you need it. Draw funds, repay,
              and reuse – ideal for managing day-to-day expenses or seizing new
              opportunities.
            </p>
          </div>
        </div>
        <div className="fundingTwoMedia">
          <img src={lprocess} alt="" />
        </div>
      </div>

      <div className="upperFooter">
        <h1>Why Choose Utah Business Loans?</h1>
        <p>
          Our mission is to make business financing simple, transparent, and
          tailored to your goals.
        </p>
        <div className="termsCard">
          <div className="card">
            <h3>Fast Funding</h3>
            <p>Approvals and funding in as little as 24 hours</p>
          </div>
          <div className="card">
            <h3>Clear Terms</h3>
            <p>No hidden fees, no surprises – just straightforward solutions</p>
          </div>
          <div className="card">
            <h3>Dedicated Support</h3>
            <p>Work with a funding specialist who understands your business</p>
          </div>
        </div>
        <div className="grow">
          <h1>Why Wait? Let’s Get Started</h1>
          <p>
            See how much you qualify for — with no obligation and no impact on
            your credit.
          </p>
        </div>
        <div className="growButton">
          <a href="#">
            CAll <br /> <span>(888) 559-9825</span>{" "}
          </a>
        </div>
      </div>
    </>
  );
};
export default FundingSolution;
