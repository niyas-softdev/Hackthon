import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Footer from "./Footer";
function FluidExample() {
  return (
    <div className="dashboard-body p-0  overflow-y-scroll">
      <div className="d-flex justify-content-center">
        <Image
          src="https://assets-global.website-files.com/63d787ead50a07817c6318f9/6437ca6ee8478a7a463b2c97_highly-qualified-professionals.webp"
          width={1250}
          fluid
          className="rounded shadow"
        />
        ;
      </div>
      <div>
        <h1 className="text-dark text-center pt-5 pb-3">
          CONSULT YOUR DOCTOR FORM ANY WHERE
        </h1>
        <h4 className="text-center">
          Choose the best online therapy services, begin your free assessment
          and speak to a licensed therapist. Help is at your fingertips.
        </h4>
        <div className="d-flex justify-content-center py-5">
          {" "}
          <Button variant="dark" class="hero-btn red-btn">
            EXPLORE NOW
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FluidExample;