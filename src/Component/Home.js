import React from "react";
import "./Home.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

const Home = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #ff6b6b, #556270)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "2em",
    margin: 0,
    textAlign: "center"
  };

  const healthCareBotData = [
    {
      img: "https://img.freepik.com/free-vector/robot-as-doctor-robotized-surgery-with-patient_613284-2477.jpg?t=st=1709529803~exp=1709533403~hmac=a3d02baaae7cbb90c67360e706bd8d78ba8debb8298bd319ec761c5581ae7079&w=1380",
      review: "Healthcare Companion",
      description:
        "Meet WellnessBot, your ultimate healthcare companion. With advanced AI capabilities, WellnessBot provides personalized health insights, answers medical queries, and promotes overall well-being."
    },
    {
      img: "https://img.freepik.com/free-photo/fun-3d-illustration-doctor-with-vr-helmet_183364-81017.jpg?t=st=1709531477~exp=1709535077~hmac=83ec4c3cbd1ef88dbae2803c1f787344726864b0e016b790be2c2b9e84b64049&w=740",
      review: "Medical Assistance",
      description:
        "Introducing MedCareAI, your dedicated medical assistant. From medication reminders to symptom tracking, MedCareAI is here to streamline your healthcare experience and keep you in top shape."
    },
    {
      img: "https://img.freepik.com/free-vector/hand-drawn-ai-healthcare-illustration_52683-155547.jpg?t=st=1709529872~exp=1709533472~hmac=76b766cd8b64a6447db8755c11f9a36798067f3ac6304c2cbf3089b5085e86eb&w=1380",
      review: "Tech-Driven Wellness",
      description:
        "HealTech is at the forefront of tech-driven wellness solutions. Embrace a healthier lifestyle with personalized recommendations, fitness tracking, and holistic health insights. Your journey to well-being starts with HealTech."
    },
    {
      img: "https://img.freepik.com/free-vector/modern-medical-technologies-health-care-isometric-composition-with-two-nanorobots-preparing-patient-surgery-illustration_1284-28332.jpg?t=st=1709530382~exp=1709533982~hmac=a20b84cae3020f0f2a322892398372a77879af76323e25021d91da3e785f875e&w=1380",
      review: "Mental Health Support",
      description:
        "HealthyMind is not just a bot; it's your mental health companion. Offering support, coping strategies, and mindfulness exercises, HealthyMind is dedicated to nurturing your mental well-being."
    },
    {
      img: "https://img.freepik.com/free-vector/hand-drawn-ai-healthcare-illustration_52683-155544.jpg?t=st=1709529916~exp=1709533516~hmac=99ef7e268a60159ab96a1f06cf389e080166ef5f423617735cfa706c272670bb&w=1380",
      review: "Comprehensive Healthcare",
      description:
        "DocCompanion is your comprehensive healthcare solution. It combines medical expertise with cutting-edge technology to provide a range of services, health monitoring, and preventive care tips."
    },
    {
      img: "https://img.freepik.com/free-vector/robot-as-doctor-robotized-surgery-with-patient_613284-2477.jpg?t=st=1709529803~exp=1709533403~hmac=a3d02baaae7cbb90c67360e706bd8d78ba8debb8298bd319ec761c5581ae7079&w=1380",
      review: "Healthcare Companion",
      description:
        "Meet WellnessBot, your ultimate healthcare companion. With advanced AI capabilities, WellnessBot provides personalized health insights, answers medical queries, and promotes overall well-being."
    },
    {
      img: "https://img.freepik.com/free-photo/fun-3d-illustration-doctor-with-vr-helmet_183364-81017.jpg?t=st=1709531477~exp=1709535077~hmac=83ec4c3cbd1ef88dbae2803c1f787344726864b0e016b790be2c2b9e84b64049&w=740",
      review: "Medical Assistance",
      description:
        "Introducing MedCareAI, your dedicated medical assistant. From medication reminders to symptom tracking, MedCareAI is here to streamline your healthcare experience and keep you in top shape."
    },
    {
      img: "https://img.freepik.com/free-vector/hand-drawn-ai-healthcare-illustration_52683-155547.jpg?t=st=1709529872~exp=1709533472~hmac=76b766cd8b64a6447db8755c11f9a36798067f3ac6304c2cbf3089b5085e86eb&w=1380",
      review: "Tech-Driven Wellness",
      description:
        "HealTech is at the forefront of tech-driven wellness solutions. Embrace a healthier lifestyle with personalized recommendations, fitness tracking, and holistic health insights. Your journey to well-being starts with HealTech."
    },
    {
      img: "https://img.freepik.com/free-vector/modern-medical-technologies-health-care-isometric-composition-with-two-nanorobots-preparing-patient-surgery-illustration_1284-28332.jpg?t=st=1709530382~exp=1709533982~hmac=a20b84cae3020f0f2a322892398372a77879af76323e25021d91da3e785f875e&w=1380",
      review: "Mental Health Support",
      description:
        "HealthyMind is not just a bot; it's your mental health companion. Offering support, coping strategies, and mindfulness exercises, HealthyMind is dedicated to nurturing your mental well-being."
    },
    {
      img: "https://img.freepik.com/free-vector/hand-drawn-ai-healthcare-illustration_52683-155544.jpg?t=st=1709529916~exp=1709533516~hmac=99ef7e268a60159ab96a1f06cf389e080166ef5f423617735cfa706c272670bb&w=1380",
      review: "Comprehensive Healthcare",
      description:
        "DocCompanion is your comprehensive healthcare solution. It combines medical expertise with cutting-edge technology to provide a range of services, health monitoring, and preventive care tips."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ],
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <Container className="dashboard-body p-0  overflow-y-scroll" fluid>
      <div className="section1 py-5 bg-dark">
        <Slider {...settings} className="d-flex align-items-stretch">
          {healthCareBotData.map((d) => (
            <Card
              key={d.name}
              style={{ width: "12rem", minWidth: "12 rem" }}
              className="d-flex align-items-stretch"
            >
              <Card.Img
                style={{ height: "14rem" }}
                src={d.img}
                alt=""
                variant="top"
                className="img-fluid"
              />
              <Card.Body>
                <Card.Text className="card-review text-primary fw-bold py-3">
                  {d.review}
                </Card.Text>
                <Card.Text className="mentor-card-description py-2">
                  {d.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Slider>
      </div>
      <Row className=" body_row">
        <div
          className="banner medicalbanner"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2020/03/30/09/15/corona-4983590_960_720.jpg')"
          }}
        >
          <Container>
            <Row>
              <Col>
                <div className="ripple">
                  <a href="#">More Info</a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="heading">
                  <p>
                    LEARN MORE ABOUT<span className="text-color">COVID19</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Row>
      <Row className="bg-dark">
        <h1 style={gradientStyle} className="pt-5">
          We keep your Health Safe
        </h1>
        <div class="heart_container">
          <img
            src="https://github.com/abilitycoding/Hackthon/assets/135714603/ac937133-6d13-4aa0-95f3-e7483d10bcc4"
            class="human-heart"
            alt="human heart"
          />
        </div>
      </Row>
      <div className="d-flex justify-content-center">
        <div class="first-section-animation">
          <div class="gradient"></div>
          <div class="wrapper-vertical-phone">
            <img
              src="https://powercode.co.uk/static/media/vertical-phone.bf37986c.png"
              class="vertical-phone"
              alt="ultimate"
            />
          </div>
          <div class="wrapper-tablet">
            <img
              src="https://powercode.co.uk/static/media/tablet.2ff2e20d.png"
              alt="ultimate"
              class="tablet"
            />
          </div>
          <img
            src="https://powercode.co.uk/static/media/angle-phone-shadow.54a99a1a.png"
            alt="ultimate"
            class="angle-phone-shadow"
          />
          <img
            src="https://powercode.co.uk/static/media/angle-phone.a96818cf.png"
            alt="ultimate"
            class="angle-phone"
          />
          <img
            src="data:image/png;base64,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"
            alt="ultimate"
            class="stylus"
          />
          <img
            src="https://powercode.co.uk/static/media/stylus-shadow.4123afee.png"
            alt="ultimate"
            class="stylus-shadow"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABHCAYAAACQwsCOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAigSURBVHgB7VxfaBRHGJ/EMybakEBETo1gJIUKFXxooA8VDAS8BwstWEuhoKWUPtjSBpEWjGhpSykqKrWgYMGHPvahoKJgUUGQKoEE4kMkkVgMEvQwZxI16kX7+5bbY25uZnf+7V6Q/GCY29mZ2ZnffDPfN9/sHmMLcEIde03x6tWrLKJGLmn57Oxsvqmp6Q7ziAzzDDQ8g4a2C8lr+Yu5uTm6n1m0aFFwXVdX14ZyzeF9XLfW19e3cEUakZYt3Quegbg9vC49d234u3Qttos9efJkGPEG5CsyT/AigVNTU8vRqBH8bOU7ETyAu1b99pEvro7Hjx+zZ8+e0WVvW1vbUeYJ9cwD0MADiFol6Ww+oFgshuQR9tOAM09wJvDRo0ediL5kDvBBdFQdmLrBFC6FVpD5E/MEZwKxVh1kCaylMtgQ/eLFiyAI9Xw+MTHxNvMAJwIxFd5D9IFO3jSnM/8skj4JMsAR5gGuEniQeYZPomndg8ZX3e558ODBVuYIawKnp6e3IXqXT6uVlKmgkD6+jiNkEjEHWBFID0X4hVkiDaKfPn3KXr58ySsPWbbOhw8ffsMcYEUg1r6v6OEsYdgSTWQRgbJ0kVDEfS5mjTGBk5OTZCzvjctXy+kcmi1x8GHWGBOI7dd3iIIRS9p+swFNW2wlmSGszRojAiF9axF9y2oAXaLjFIcCtC+3MmuMCMRD9rNKD4cW0prO4ZYtRnGoYGXWaBMI6duIBu1U3Z8P05kcBiJkiiMCxmaNNoG2Ip4EZEQ/f/48kMA4+DZrtIYcDoMcovO+XEtJ1FEoFKJ2HbHg6iyA3PUrVqyY0CkXK4El56XRli3t6Uxa14U8Au+twaW2WRNLIKRvJyr14rkQ4YNo6jStfRZKIwo77t+/v1EnYySBaBC50n+U3ZsvzlLacfDEGSoNFWjWaa35kQRiXfkeUZY5IMnpTEazbMvGw5ZM5N8MKdwWl0/Zu5mZmSy02gga/0Y5c4JKw0a5oI28q94YGoM7iuVhQ0dHh3Jro5RAmAUHePIcG+IN4bNIabiQR9CQzs7m5uZIs0bac3gn3sL0GEJjK4zKWkiZ6jeUW9lV73sAhfoKCEqzRiqBII98fUrykkbcs8RzDk+KQ1VfpFlTRSC2bJuZ5jmHDEkTTZ2itS8uj0+zBvXsGB8fl5o1VQSaGs22sCU65pyjCr7MmoaGBqlZU0Eg9oGfInqHxaDWzlIX+DZr6rkMjTjj3R9ezwfviggij6TP49Q0IpPOgcbGxirceWUCYTTvYimcc8igQ7RoNCesOFTZOpctW1Zh1gQtp3MORGP0VlT5Ro29K0zoGJGn66pP0qzB7wqzJlNK3FtS1xUI/WthBeExIX/Ng+5RGvfKWdVohgqAN4j5Bop1hvewvNDrBEwH4jNdCRX22vTqHZl5n9F10CIcqDRTJrEzrtKkKmMitSGobUQiBVPwBPiQTgzyznv37v2+atWq/qA1sKv6YJgWxHWAD+IhtUuwrUvH4xwHX+tm6KEvD8fQ0NBuVHooSDSUFJ+SGleepjH3ZivzCYv6PinPh3w+fwzRqI2kpCmdvBT6kibb+tDWTAXlg4ODdKx3Jg1J469N61q8eHGsQklBOvuz2WxXVerAwMBFZO6RFUx6euqWodDY2KhNUhJkQkq7V65ceaVqGDFFerHGDIiuLB/gTSDXeugYc8mSJdr5Q3h6/lkij35X2QRdXV03keEPfk0K1yWfa53rmkjuLJuTOLEeCxTRpj3hRUbxkD5EHzPJm/emUuRL6mQgz8zSpUuZC0ylk4Rr9erVw+Uyqoz9/f27ER2SVR73Oy3zh0BrISkV2T1XSOqbwfL2Ju+dVpr109PTx8D2qMm0Mp3qrksCIXyZiOA4Nasg1of2HhZd+5FDdv369a0YhTNBRgepStr8IWUSpVA8SeYEBqujQzihi635xo0bFzECPWJDfHTctR7+N07PtPfJNoSCgy+w9p0S02NNFZg1X6NhQ8ziYxqVAklCEZGrS1ehmCoO5Ll569at09J7TAPXrl07jkp2mUqXeJ20IiIp1HV5qSAjFGvf++3t7Wdl+bVkHnO/D6NW8KkYklBEruclBIkiuqIiT5vA7u7uAhq6z4YoH2TqBjKuea3silIbeqPyaHsn0bgTqHA4CaJ0y+pIp/BlpiuZpyF9g1EZjNTR1atXc1gjzpcLJ2Qgm5YR05qampQKxUB5zUJ5rsee905UJiP/+KZNmy5gRC+kJXU2z6DfJIXi2UoIXekE0UfjyCMYq6ySt6ZHLEuN8WSwatelykfp9NYqaWWdOkJwdRWwlv7KNGB8QgOFQuvgSR9Sl6QiomNQ8UPrOHDlf8COo6BTxupjQzQ2MGtqcdDE5xM6XRWwn2cWGB0ZGTmum9l6zl2+fJm+2PwtDUXiUr6lpSVQKgb4CJr3L93MLl+sn0AYdpUon9IpC1NTUzrfDYf414Q8JwKxFhbhEe7VmU61XBPJay2+T6giE1K7hxnCWW1eunTpPBqSKzWA8XHFg1KwE6PS4ccrnycr8PeaNWs+ZIZw/tsTaDqSwmKUJBHSlDpZOk3lCNBhs7H0EZwJ3LJlC62DR3U7SUiKqKhAxjWd5MmA+ychfaPMAl7++gkupJ/RiLxN50sd8EZUVF2Tk5Oy5hewTqb3yb8MMm+NTSC4khmVjyRQ/KYY6YdhNGt9mSmDFwIJOJM4hcbc9CVJIWwHQ/Vc+iw2TAfGIX2HmAO8EUhmDRrV69LhqM4TTIhSBXo5KVQouN7XEfEZlw68EUjI5XL/oDNnfU25KOk0LcMH+soJRA7evn37T+YI7++/kFmDg+6cbt2w0Wj9LHDXMwj50gs8FObw+y5fBmn/hb9Lb63eBSFz4akc7ucRla3nhoaGAtY/3jkwu27dOut1r6L9LAGcO3duIzoTvBaCzo+jQ+WX+rDBz2/fvn2GLWABhP8B8AquN/k378kAAAAASUVORK5CYII="
            alt="ultimate"
            class="figure-cube"
          />
          <img
            src="https://powercode.co.uk/static/media/figure-donut.29098633.png"
            alt="ultimate"
            class="figure-donut"
          />
          <img
            src="https://powercode.co.uk/static/media/figure-semicircle.c952cc65.png"
            alt="ultimate"
            class="figure-semicircle"
          />
          <img
            src="https://powercode.co.uk/static/media/tooltip-health.f644a310.png"
            alt="ultimate"
            class="tooltip-health"
          />
          <img
            src="https://powercode.co.uk/static/media/tooltip-steps.78db3e74.png"
            alt="ultimate"
            class="tooltip-steps"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2449/2449899.png"
            alt="ultimate"
            class="tooltip-week"
          />
          <div class="wrapper-overflow-notebook">
            <div class="wrapper-notebook">
              <img
                src="https://powercode.co.uk/static/media/notebook.5646fdfe.png"
                alt="ultimate"
                class="notebook"
              />
            </div>
          </div>
          <img
            src="https://powercode.co.uk/static/media/emergency-help.8de72673.png"
            alt="ultimate"
            class="emergency-help"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2449/2449899.png"
            alt="ultimate"
            class="symptoms"
          />
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;