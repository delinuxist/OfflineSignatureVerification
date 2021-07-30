import React, { Fragment } from "react";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadImageContainer from "./Containers/UploadImageContainer/UploadImageContainer";
import VerifyImageContainer from "./Containers/VerifyImageContainer/VerifyImageContainer";
import Navbar from "./Components/layouts/Navbar";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Particles
        className="tsparticles-canvas-el"
        params={{
          particles: {
            number: {
              value: 100,
              // density: {
              //   enabled: true,
              //   // value_area: 900,
              // },
            },
            size: {
              value: 3,
            },
            shape: {
              type: "square",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className="container">
        <Navbar />
      </div>

      <div className="background">
        <div className="container-fluid pad-top">
          <div className="row justify-content-center">
            <div className="row justify-content-center main-info">
              <UploadImageContainer
                imgLimit="3"
                submitButtonText="Upload"
                headingText="Upload 3 new signatures of the customer"
                allowMultiple={true}
              />
            </div>

            <div className="row justify-content-center main-info">
              <VerifyImageContainer
                imgLimit="1"
                submitButtonText="Verify"
                headingText="Upload a new signature of the customer to verify"
                allowMultiple={false}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
