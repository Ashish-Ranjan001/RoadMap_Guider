import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Basic() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="gx-5 flex">
        <MDBCol md="6" className="mb-4" style={{padding:25 }}>
          <MDBRipple
            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src="https://fly.io/blog/2023-05-11/js-weird-cover.webp"
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>
        <MDBCol md="6" className="mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
            News of the day
          </span>
          <h4>
            <strong>Facilis consequatur eligendi</strong>
          </h4>
          <p className="text-muted">
          Note, I'm not saying that JavaScript is weird, though it definitely is weird. But that's not the point of this blog post.

          Bear with me, instead of starting with how JavaScript ecosystem is weird, I'm going to start with why the JavaScript ecosystem is weird.
          </p>
          <MDBBtn href="https://fly.io/blog/js-ecosystem-delightfully-wierd/">Read More</MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
