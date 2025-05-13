function Stats() {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-6 ">
          <h2 className="mb-5 ">Trust with confidence</h2>
          <div className="mb-4">
            <h5>Customer-first always</h5>
            <p className="mt-1 text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div className="mb-4">
            <h5>No spam or gimmicks</h5>
            <p className="mt-1 text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
          <div className="mb-4">
            <h5>The Zerodha universe</h5>
            <p className="mt-1 text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="mb-4">
            <h5>Do better with money</h5>
            <p className="mt-1 text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-6">
          <img src="media/images/ecosystem.png" style={{ width: "100%" }} />
          <p className="text-center my-3">
            <a style={{ color: "#387ED1" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a style={{ color: "#387ED1", marginLeft: "1.5rem" }}>
              Try Kite demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
        <div className="mt-5 text-center">
          <img className="" src="media/images/pressLogos.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Stats;
