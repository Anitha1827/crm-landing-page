import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

import { FaTwitter } from "react-icons/fa";
import {
  BsLinkedin,
  BsFacebook,
  BsGithub,
  BsBrowserChrome,
} from "react-icons/bs";
import logo from "../assets/images/logo.png";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase hover-text">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "24%", padding: "10px" }}
                />{" "}
                WebGuard
              </h5>

              <ul
                className="list-unstyled mb-0"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <p className="text-white hover-text">
                    Discover the full scope of our services <br /> and see how
                    we can help you.
                  </p>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase hover-text">Products</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <p className="text-white hover-text">Communication</p>
                </li>
                <li>
                  <p className="text-white hover-text">Remote Access</p>
                </li>
                <li>
                  <p className="text-white hover-text">View All Products</p>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase hover-text">Company</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <p className="text-white hover-text">About Us</p>
                </li>
                <li>
                  <p className="text-white hover-text">Careers</p>
                </li>
                <li>
                  <p className="text-white hover-text">Partners</p>
                </li>
                <li>
                  <p className="text-white hover-text">Newsroom</p>
                </li>
                <li>
                  <p className="text-white hover-text">Contact Us</p>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase hover-text">Features</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <p className="text-white hover-text">Autofill</p>
                </li>
                <li>
                  <p className="text-white hover-text">Password Vault</p>
                </li>
                <li>
                  <p className="text-white hover-text">Digital Walllet</p>
                </li>
                <li>
                  <p className="text-white hover-text">Password Manager</p>
                </li>
                <li>
                  <p className="text-white hover-text">Dark Monitoring</p>
                </li>
                <li>
                  <p className="text-white hover-text">Authenticator</p>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase hover-text">Resources</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <p className="text-white hover-text">My Account</p>
                </li>
                <li>
                  <p className="text-white hover-text">Support</p>
                </li>
                <li>
                  <p className="text-white hover-text">Blog</p>
                </li>
                <li>
                  <p className="text-white hover-text">Partners</p>
                </li>
                <li>
                  <p className="text-white hover-text">Community</p>
                </li>
                <li>
                  <p className="text-white hover-text">Privacy Policy</p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          © 2023 WebGuard.
          <a
            className="text-white"
            style={{ textDecoration: "none" }}
            href="https://mdbootstrap.com/"
          >
            All rights reserved.
          </a>
        </div>
        <div>
          <section className="mb-4">
            <MDBBtn
              style={{ borderRadius: "25px" }}
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <FaTwitter />
            </MDBBtn>

            <MDBBtn
              style={{ borderRadius: "25px" }}
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <BsLinkedin />
            </MDBBtn>

            <MDBBtn
              style={{ borderRadius: "25px" }}
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <BsFacebook />
            </MDBBtn>

            <MDBBtn
              style={{ borderRadius: "25px" }}
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <BsGithub />
            </MDBBtn>

            <MDBBtn
              style={{ borderRadius: "25px" }}
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <BsBrowserChrome />
            </MDBBtn>
          </section>
        </div>
      </div>
    </MDBFooter>
  );
}
