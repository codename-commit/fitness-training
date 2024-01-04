import "./About.css"
import Header from "../../Components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage} >
      Lorem ipsum dolor sit amet consectetur adipisicng elit. 
      Et maiores doloribus, eligendi incidunt modi rerum debitis consequatur molestias?
    </Header>
    <section className="about_story">
      <div className="container about_story_container">
        <div className="about_section_image">
            <img src={StoryImage} alt="About Story"/>
        </div>
        <div className="about_section_content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Sed felis eget velit aliquet sagittis. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Condimentum vitae sapien pellentesque habitant morbi. 
            Faucibus a pellentesque sit amet porttitor eget dolor morbi. 
            Porta lorem mollis aliquam ut porttitor leo. Mattis molestie a iaculis at. Viverra mauris in aliquam sem.
          </p>
          <p>
          Faucibus in ornare quam viverra orci sagittis eu volutpat. 
          In aliquam sem fringilla ut morbi. Ut diam quam nulla porttitor. 
          Blandit massa enim nec dui nunc mattis enim ut. 
          Egestas integer eget aliquet nibh praesent tristique magna sit. 
          Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. 
          </p>
          <p>
          Egestas purus viverra accumsan in nisl nisi. 
          Neque sodales ut etiam sit amet nisl purus in mollis.
          </p>
        </div>
      </div>
    </section>

    <section className="about_vision">
      <div className="container about_vision_container">
        <div className="about_section_content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Sed felis eget velit aliquet sagittis. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Condimentum vitae sapien pellentesque habitant morbi. 
            Faucibus a pellentesque sit amet porttitor eget dolor morbi. 
            Porta lorem mollis aliquam ut porttitor leo. Mattis molestie a iaculis at. Viverra mauris in aliquam sem.
          </p>
          <p>
          Faucibus in ornare quam viverra orci sagittis eu volutpat. 
          In aliquam sem fringilla ut morbi. Ut diam quam nulla porttitor. 
          Blandit massa enim nec dui nunc mattis enim ut. 
          Egestas integer eget aliquet nibh praesent tristique magna sit. 
          Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. 
          </p>
        </div>
        <div className="about_section_image">
            <img src={VisionImage} alt="About Vision"/>
        </div>
      </div>
    </section>

    <section className="about_mission">
      <div className="container about_mission_container">
        <div className="about_section_image">
            <img src={MissionImage} alt="About Mission"/>
        </div>
        <div className="about_section_content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Sed felis eget velit aliquet sagittis. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Condimentum vitae sapien pellentesque habitant morbi. 
            Faucibus a pellentesque sit amet porttitor eget dolor morbi. 
            Porta lorem mollis aliquam ut porttitor leo. Mattis molestie a iaculis at. Viverra mauris in aliquam sem.
          </p>
          <p>
          Faucibus in ornare quam viverra orci sagittis eu volutpat. 
          In aliquam sem fringilla ut morbi. Ut diam quam nulla porttitor. 
          Blandit massa enim nec dui nunc mattis enim ut. 
          Egestas integer eget aliquet nibh praesent tristique magna sit. 
          Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. 
          </p>
          <p>
          Egestas purus viverra accumsan in nisl nisi. 
          Neque sodales ut etiam sit amet nisl purus in mollis.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About