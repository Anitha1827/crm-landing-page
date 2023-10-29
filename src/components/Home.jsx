import "./Home.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import spotify from "../assets/images/R.jpg";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.png";
import img13 from "../assets/images/img13.png";
import { FiArrowUpRight } from "react-icons/fi";
import { BsCheckCircleFill, BsLaptop } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import PasswordAnimation from "./PasswordAnimation";
import InputGroup from "react-bootstrap/InputGroup";

const Home = () => {
  return (
    <>
      <Col xs={6} sm={12} xl={12}>
        <h1 contenteditable>Say goodbye to the stress of forgotten</h1>
        <h1 contenteditable>passwords and the fear of data breaches</h1>
      </Col>
      <Col>
        <p style={{ color: "gray", fontSize: "20px" }}>
          Say goodbye to the stress of forgotten passwords and the fear of data
          breaches. our password manager is designed to
        </p>
        <p style={{ color: "gray", fontSize: "20px" }}>
          keep your digital life safe and secure, while simplifying the process
          of password management.
        </p>
      </Col>

      <Container>
        <Row className="p-4">
          <Col xs={6} md={6}>
            <button class="glow-on-hover" type="button">
              Try WebGuard Now
            </button>
          </Col>

          <Col xs={6} md={6}>
            <button href="#" className="hoverme">
              <span>
                Learn more <FiArrowRight />{" "}
              </span>
            </button>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className="card-container">
          <Row>
            <Col>
              <div className="card1">
                <img src={img13} alt="image13" />
              </div>
            </Col>
            <Col>
              <div className="card2">
                <Col
                  style={{
                    position: "relative",
                    right: "32%",
                    padding: "20px",
                    borderRadius: "20px",
                  }}
                  sm="12"
                >
                  <img
                    src={spotify}
                    alt="spotify"
                    style={{ width: "74px", borderRadius: "48%" }}
                  />
                </Col>
                <Row style={{ textAlign: "left" }} className="p-2">
                  <b style={{ fontSize: "20px" }}>accounts.spotify.com</b>
                  <PasswordAnimation />
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <b style={{ fontSize: "20px" }}>Strong Password</b>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </div>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "gray",
                      marginLeft: "15px",
                    }}
                  >
                    Your password is one of the most important lines of defens
                    against online threats. it's crucial to have a strong and
                    secure password to keep your personal information safe.
                  </p>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="card3">
                <Row
                  style={{
                    marginLeft: "10px",
                    fontSize: "18px",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  <strong>Devices</strong>
                </Row>
                <p
                  style={{
                    fontSize: "20px",
                    color: "gray",
                    textAlign: "left",
                    padding: "10px",
                  }}
                >
                  account password connected on several devices at once
                </p>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <AiOutlineMobile style={{ fontSize: "40px" }} />
                  <div>
                    <strong
                      style={{
                        fontSize: "18px",
                        textAlign: "left",
                        color: "gray",
                        marginRight: "50%",
                      }}
                    >
                      Iphone 8
                    </strong>
                    <p
                      style={{
                        textAlign: "left",
                        color: "gray",
                      }}
                    >
                      Liverpool, UK - Aug 28 at 1:21 PM
                    </p>
                  </div>
                  <BiDotsVerticalRounded style={{ fontSize: "40px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <BsLaptop style={{ fontSize: "40px" }} />
                  <div>
                    <strong
                      style={{
                        fontSize: "18px",
                        textAlign: "left",
                        color: "gray",
                        marginRight: "50%",
                      }}
                    >
                      Iphone SE
                    </strong>
                    <p
                      style={{
                        textAlign: "left",
                        color: "gray",
                      }}
                    >
                      Liverpool, UK - Aug 27 at 3:55 PM
                    </p>
                  </div>
                  <BiDotsVerticalRounded style={{ fontSize: "40px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <BsLaptop style={{ fontSize: "40px" }} />
                  <div>
                    <strong
                      style={{
                        fontSize: "18px",
                        textAlign: "left",
                        color: "gray",
                        marginRight: "50%",
                      }}
                    >
                      iMac
                    </strong>
                    <p
                      style={{
                        textAlign: "left",
                        color: "gray",
                      }}
                    >
                      Liverpool, UK - Aug 24 at 10:31 PM
                    </p>
                  </div>
                  <BiDotsVerticalRounded style={{ fontSize: "40px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <AiOutlineMobile style={{ fontSize: "40px" }} />
                  <div>
                    <strong
                      style={{
                        fontSize: "18px",
                        textAlign: "left",
                        color: "gray",
                        marginRight: "50%",
                      }}
                    >
                      Mac Studio
                    </strong>
                    <p
                      style={{
                        textAlign: "left",
                        color: "gray",
                      }}
                    >
                      Liverpool, UK - Aug 14 at 11:49 PM
                    </p>
                  </div>
                  <BiDotsVerticalRounded style={{ fontSize: "40px" }} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="container ">
        <h3 className="mobiled">
          Automate the management of all your passwords with our auto-pilot
          feature
        </h3>
        <p style={{ fontSize: "23px", textAlign: "justify", color: "gray" }}>
          welcome to our password management platform, where you can put your
          management on auto-pilot. with our auto-pilot feature, you can
          effortlessly manage all of your password in one place.
        </p>
      </div>
      <Container>
        <Row className="p-4">
          <Col xs={12} md={6}>
            <Card
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
                borderRadius: "5px",
                border: "none",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "justify",
                    fontSize: "35px",
                  }}
                >
                  <strong>Log in and go</strong>
                </Card.Title>
                <Card.Text
                  style={{
                    textAlign: "justify",
                    fontSize: "20px",
                    color: "gray",
                  }}
                >
                  Once you save a password in WebGuard, you'll always have it
                  when you need it logging in is fast and easy.
                </Card.Text>
                <div>
                  <Card.Img className="zoom" variant="top" src={img1} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
                borderRadius: "5px",
                border: "none",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "justify",
                    fontSize: "35px",
                  }}
                >
                  <strong>Dark web Monitoring</strong>
                </Card.Title>
                <Card.Text
                  style={{
                    textAlign: "justify",
                    fontSize: "20px",
                    color: "gray",
                  }}
                >
                  Stop worrying about data breaches. Get alerts if your personal
                  information is at risk.
                </Card.Text>
                <Card.Img className="zoom" variant="top" src={img2} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="p-4">
          <Col xs={12} md={6}>
            <Card
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
                borderRadius: "5px",
                border: "none",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "justify",
                    fontSize: "35px",
                  }}
                >
                  <strong>Two-factor authentication</strong>
                </Card.Title>
                <Card.Text
                  style={{
                    textAlign: "justify",
                    fontSize: "20px",
                    color: "gray",
                  }}
                >
                  Easily identify websites where you can turn on two-factor
                  authentication and use WebGuard as an authenticator.
                </Card.Text>
                <Card.Img className="zoom" variant="top" src={img3} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
                borderRadius: "5px",
                border: "none",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "justify",
                    fontSize: "35px",
                  }}
                >
                  <strong>Passwordless login</strong>
                </Card.Title>
                <Card.Text
                  style={{
                    textAlign: "justify",
                    fontSize: "20px",
                    color: "gray",
                  }}
                >
                  Gain instant access to your WebGuard Vault by using the
                  WebGuard Authenticator instead of your master password.
                </Card.Text>
                <Card.Img className="zoom" variant="top" src={img4} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="container">
        <h3
          style={{
            fontWeight: "400",
            fontSize: "3.5rem",
            textAlign: "justify",
          }}
        >
          Experience a sense of calm and security no matter where you are with
          WebGuard.
        </h3>
        <p style={{ fontSize: "23px", textAlign: "justify", color: "gray" }}>
          Our platform uses advance encryption and other security measures to
          protect your sensitive data from online threats, ensuring that you can
          enjoy browsing the internet without any worries. Whether you're at
          home, at work, or on-the-go.
        </p>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <div className="custom-div">
              <h2 className="p-4">
                <strong>The ultimate password protection</strong>
              </h2>
              <img src={img5} alt="image5" className="mobileimg" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="custom-div">
              <h2 className="p-4">
                <strong>Efficient on tablet</strong>
              </h2>
              <img
                src={img6}
                alt="image6"
                style={{ width: "500px", height: "333px" }}
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="custom-div">
              <h2 className="p-4">
                <strong>Secure your password</strong>
              </h2>
              <img src={img7} alt="image7" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="container p-5">
        <h3
          style={{
            fontWeight: "400",
            fontSize: "3.5rem",
            textAlign: "center",
          }}
        >
          Find the perfect subscription to meet your unique requirement
        </h3>
        <p style={{ fontSize: "23px", textAlign: "center", color: "gray" }}>
          Looking for a subscription that fits your unique needs? Look on
          further. with our platform, you can find the perfect subscription plan
          that caters to your specific requirement.
        </p>
      </div>
      <Container className="p-2">
        <Row className="customdiv">
          <Col xs={12} md={6} className="p-4">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "20px",
                textAlign: "start",
              }}
            >
              <div>
                <img src={img8} alt="images8" />
              </div>
              <div className="p-2">
                <p style={{ fontSize: "20px", color: "gray" }}>
                  For Individuals
                </p>
                <h2 style={{ fontSize: "30px" }}>Individual Starter Pack</h2>
              </div>
            </div>

            <p
              style={{
                fontSize: "23px",
                color: "gray",
                padding: "20px",
                textAlign: "justify",
              }}
            >
              Password management for one type of device that is easy to use and
              is reliable, secure, and easy to use.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "20px",
                textAlign: "start",
              }}
            >
              <h1>$12</h1>
              <p
                style={{
                  color: "gray",
                  fontSize: "25px",
                  position: "relative",
                  top: "38px",
                }}
              >
                /month
              </p>
            </div>
            <button className="get-started-button">
              Get Started <FiArrowUpRight />
            </button>
          </Col>

          <Col
            xs={12}
            md={6}
            style={{
              backgroundColor: "#3CCF4E",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <div style={{ color: "white", textAlign: "start" }} className="p-5">
              <h3 style={{ paddingBottom: "20px" }}>What's included</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "start",
                  fontSize: "20px",
                }}
              >
                <div style={{ paddingRight: "20px" }}>
                  <p>
                    <BsCheckCircleFill /> Unlimited Passwords
                  </p>
                  <p>
                    <BsCheckCircleFill /> 1 User Account
                  </p>
                  <p>
                    <BsCheckCircleFill />
                    Access on 1 device type
                  </p>
                  <p>
                    <BsCheckCircleFill /> Save and Autofill Passwords
                  </p>
                  <p>
                    <BsCheckCircleFill /> One-to-One shering
                  </p>
                </div>
                <div>
                  <p>
                    <BsCheckCircleFill /> Password Generator
                  </p>
                  <p>
                    <BsCheckCircleFill /> Security Dashboard
                  </p>
                  <p>
                    <BsCheckCircleFill /> Dark Web Monitoring
                  </p>
                  <p>
                    <BsCheckCircleFill /> Passwordless Login
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="p-2">
        <Row className="customdiv">
          <Col xs={12} md={6} className="p-4">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "20px",
                textAlign: "start",
              }}
            >
              <div>
                <img src={img9} alt="images9" />
              </div>
              <div className="p-2">
                <p style={{ fontSize: "20px", color: "gray" }}>
                  For Enterprise
                </p>
                <h2 style={{ fontSize: "30px" }}>Enterprise Started Pack</h2>
              </div>
            </div>

            <p
              style={{
                fontSize: "23px",
                color: "gray",
                padding: "20px",
                textAlign: "justify",
              }}
            >
              A full range of business features as well as sesrvices customized
              to your large business needs
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "20px",
                textAlign: "start",
              }}
            >
              <h1>$94</h1>
              <p
                style={{
                  color: "gray",
                  fontSize: "25px",
                  position: "relative",
                  top: "38px",
                }}
              >
                /month
              </p>
            </div>
            <button className="get-started-button">
              Get Started <FiArrowUpRight />
            </button>
          </Col>

          <Col
            xs={12}
            md={6}
            style={{
              backgroundColor: "#3CCF4E",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <div style={{ color: "white", textAlign: "start" }} className="p-5">
              <h3 style={{ paddingBottom: "20px" }}>What's included</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "start",
                  fontSize: "20px",
                }}
              >
                <div style={{ paddingRight: "20px" }}>
                  <p>
                    <BsCheckCircleFill /> Unlimited Passwords
                  </p>
                  <p>
                    <BsCheckCircleFill /> 50 User Account
                  </p>
                  <p>
                    <BsCheckCircleFill />
                    Access Across All Devices
                  </p>
                  <p>
                    <BsCheckCircleFill /> 1 GB Encrypted Fill Storage
                  </p>
                  <p>
                    <BsCheckCircleFill /> One-to-Many shering
                  </p>
                </div>
                <div>
                  <p>
                    <BsCheckCircleFill /> Password Generator
                  </p>
                  <p>
                    <BsCheckCircleFill /> Security Dashboard
                  </p>
                  <p>
                    <BsCheckCircleFill /> Dark Web Monitoring
                  </p>
                  <p>
                    <BsCheckCircleFill /> Passwordless Login
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="p-4">
        <Row className="mobilediv">
          <Col className="customdivprice">
            <h4>Get to know about all product's pricing</h4>
            <p>
              Our platform offers a range of subscription plans that are
              tailored to your unique requirements. allowing you to find the
              perfect for you
            </p>
          </Col>
          <Col>
            <button className="getstartedbutton">
              See more pricing <FiArrowUpRight />
            </button>
          </Col>
        </Row>
      </Container>
      <div className="container p-3">
        <h3
          style={{
            fontWeight: "400",
            fontSize: "3.0rem",
            textAlign: "justify",
          }}
        >
          Be a part of the satisfied WebGuard usesrs today and hear firsthand
          what our customers are saying about us!
        </h3>
        <p style={{ fontSize: "23px", textAlign: "justify", color: "gray" }}>
          Join the satisfied community of WebGuard users today and discover why
          our customers rave about our services! Hear firsthand what they have
          to say and Experience the peace of mind that comes with top-notch
          online security
        </p>
      </div>
      <Container>
        <Row>
          <Col className="customdivlogo">
            <img
              xs={12}
              md={12}
              sm={12}
              src={img12}
              alt="image12"
              className="zoomimage"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} md={12} sm={12} className="customdivlogo">
            <img src={img10} alt="image10" className="mobileimg" />
          </Col>
        </Row>
      </Container>
      <Row
        xs={6}
        md={12}
        style={{
          backgroundColor: "#3ccf4e",
          display: "flex",
          flexDirection: "row",
          textAlign: "start",
          fontSize: "20px",
          width: "100%",
        }}
      >
        <Col xs={12} md={8} className="p-5">
          <h1 style={{ textAlign: "start", color: "white" }}>
            Experience a sense of calm and security no matter where you are with
            WebGuard
          </h1>
          <p style={{ fontSize: "20px", color: "white" }}>
            our platform uses advance encryption and other security measures to
            protect your sensitive data from online threats, ensuring that you
            can enjoy browsing the internet without any worries
          </p>
        </Col>
        <Col xs={12} md={4} sm={12}>
          <img
            src={img11}
            alt="image11"
            style={{ marginTop: "14%", width: "102%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
