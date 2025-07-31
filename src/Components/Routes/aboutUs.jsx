import "./aboutUs.css";
import about from "../../assets/about.jpg";
const AboutUs = () => {
  return (
    <>
      <div className="fundingSectionOne">
        <div className="fundingOneMedia width40">
          <img src={about} alt="Image" className="padding10" />
        </div>
        <div className="fundingOneContent width60">
          <h3>About Us</h3>
          <h5>Helping America’s Businesses Grow — One Loan at a Time</h5>
          <p className="padding10">
            At Utah Business Loans, our mission is simple: to help small and
            mid-sized businesses access the funding they need — quickly,
            transparently, and without unnecessary <br />
            <br /> We know that running a business takes vision, grit, and
            capital. But too often, traditional lenders make it hard for
            hardworking business owners to get the resources they deserve.
            That’s where we come in.
          </p>
          <div className="aboutContent">
            <h3>Why We're Different</h3>
            <ul>
              <li>
                Fast, flexible solutions: Funding on your timeline, tailored to
                your needs.
              </li>
              <li>Clear, honest terms: No hidden fees, no surprises — ever.</li>
              <li>
                Personalized support: Real people who care about your success
                and guide you every step of the way.
              </li>
            </ul>
            <br />
            <h3>Ready to Get Started? </h3>
            <p>
              Find out how much funding you qualify for today — with no
              obligation and no impact on your credit.
            </p>
          </div>
          <div className="growButton">
            <a href="#">
              CAll <br /> <span>(888) 559-9825</span>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
