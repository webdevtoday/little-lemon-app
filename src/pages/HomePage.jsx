import { CallToAction } from "../components/CallToAction";
import { Chicago } from "../components/Chicago";
import { CustomersSay } from "../components/CustomersSay";
import { Specials } from "../components/Specials";

export const HomePage = () => (
  <>
    <div className="section-primary">
      <div className="section-body">
        <CallToAction />
      </div>
    </div>
    <div className="section">
      <div className="section-body">
        <Specials />
      </div>
    </div>
    <div className="section-primary">
      <div className="section-body">
        <CustomersSay />
      </div>
    </div>
    <div className="section">
      <div className="section-body">
        <Chicago />
      </div>
    </div>
  </>
);
