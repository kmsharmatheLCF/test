const WhoWeServe = () => {
  return (
    <>
      <div className="fundingSectionOne rowreverse">
        <div className="fundingOneMedia alignend">
          <img src="../../media/client.jpeg" alt="Image" />
        </div>
        <div className="fundingOneContent fw500">
          <h3>Our Clients</h3>
          <h5>Flexible Funding for the Businesses that Drive Our Economy</h5>
          <p>
            At Utah Business Loans, we know every business — and every industry
            — is different. That’s why we offer funding solutions tailored to
            your unique needs and goals. <br />
            <br />
            Whether you’re running a restaurant, managing a medical practice, or
            growing your e-commerce brand, we’re here to help you move forward —
            fast.{" "}
          </p>
          <div className="growButton">
            <a href="#">
              CAll <br /> <span>(888) 559-9825</span>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="bLoanWrapper weServe">
        <div className="bLoan textaligncenter">
          <div className="bLoanMedia">
            <div className="bLoanImg">
              <img src="../media/client1.jpeg" alt="Image" />
              <img src="../media/client2.jpeg" alt="Image" />
              <img src="../media/client3.jpeg" alt="Image" />
              <img src="../media/buisness2.jpeg" alt="Image" />
              <img src="../media/client4.jpeg" alt="Image" />
              <img src="../media/client5.jpeg" alt="Image" />
              <img src="../media/client6.jpeg" alt="Image" />
              <img src="../media/client7.jpeg" alt="Image" />
            </div>
          </div>
          <div
            className="bLoanContent"
            style={{ display: "block", padding: "1rem 0" }}
          >
            <div className="bLoanA">
              <h1 style={{ color: "#25498f" }}>The Businesses We Support</h1>
            </div>
            <div className="bLoanB" style={{ padding: "1rem 0 0 0" }}>
              <h4 style={{ fontSize: "1rem" }}>Trucking & Transportation</h4>
              <p>
                Keep your fleet moving with working capital for fuel, repairs,
                and expansion.
              </p>
            </div>
            <div className="bLoanB" style={{ padding: "1rem 0 0 0" }}>
              <h4 style={{ fontSize: "1rem" }}>
                Restaurants, Hospitality & Food Services
              </h4>
              <p>
                From payroll to equipment upgrades, get the funds you need to
                keep your business thriving.
              </p>
            </div>
            <div className="bLoanB" style={{ padding: "1rem 0 0 0" }}>
              <h4 style={{ fontSize: "1rem" }}>
                Healthcare & Medical Practices
              </h4>
              <p>
                Cover operating costs, invest in technology, or open new
                locations with confidence.
              </p>
            </div>
            <div className="bLoanB" style={{ padding: "1rem 0 0 0" }}>
              <h4 style={{ fontSize: "1rem" }}>Retail Stores </h4>
              <p>
                Restock inventory, renovate your space, or navigate seasonal
                slowdowns seamlessly.
              </p>
            </div>
            <div className="bLoanB" style={{ padding: "1rem 0 0 0" }}>
              <h4 style={{ fontSize: "1rem" }}>Liquor Stores</h4>
              <p>
                Finance inventory, expand your offerings, or upgrade your store
                with ease.
              </p>
            </div>
            <div className="bLoanB" style={{ padding: "1rem 0 0 0" }}>
              <h4 style={{ fontSize: "1rem" }}>E-Commerce Businesses</h4>
              <p>
                Support your growth with flexible funding for inventory,
                marketing, and logistics.
              </p>
            </div>
            <div className="bLoanB" style={{ padding: "1rem 0 0 0" }}>
              <h4 style={{ fontSize: "1rem" }}>And Many More</h4>
              <p>
                From construction crews and auto shops to salons and service
                providers — if you’re in business, we’re here to back you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="upperFooter"
        style={{ backgroundColor: "#fff", border: "none" }}
      >
        <h1>Let’s Take the Next Step Together</h1>
        <p>
          See how much funding your business qualifies for — fast, transparent,
          and customized to you.
        </p>
        {/* <div className="termsCard">
                    <div className="card" style={{display:'flex'}}>
                        <p style={{fontSize:'1.2rem'}}>Fast access to working capital</p>
                    </div>
                    <div className="card">
                        <p style={{fontSize:'1.2rem'}}>Minimal paperwork and an easy process</p>
                    </div>
                    <div className="card">
                        <p style={{fontSize:'1.2rem'}}>Friendly knowledgeable Funding Specialists to guide you</p>
                    </div>
                </div> */}
        {/* <div className="grow">
                        <h1>Ready to Move Forward?</h1>
                        <p>See what you qualify for today – no risk, no surprises.</p>
                    </div> */}
        <div className="growButton" style={{ marginTop: "1.5rem" }}>
          <a href="#">
            CAll <br /> <span>(888) 559-9825</span>{" "}
          </a>
        </div>
      </div>
    </>
  );
};
export default WhoWeServe;
