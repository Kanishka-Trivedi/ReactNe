import { useState } from 'react'
import './Pract.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <header>
        <div className="left">
          <img
            src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
            alt=""
          />
          <p>
            Design Spotlight <i className="fa-solid fa-angle-down"></i>
          </p>
          <p>
            Education <i className="fa-solid fa-angle-down"></i>
          </p>
          <p>
            Plans and Pricings <i className="fa-solid fa-angle-down"></i>
          </p>
          <p>
            Learn <i className="fa-solid fa-angle-down"></i>
          </p>
        </div>
        <div className="right">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-circle-question"></i>
          <p
            style={{
              border: "0.3px solid grey",
              padding: "7px 15px",
              borderRadius: "6px",
              color: "rgb(0, 0, 0)",
              fontWeight: 600,
            }}
          >
            Log in
          </p>
          <button className="btn">Sign Up</button>
        </div>
      </header>

      <div className="section1">
        <span>
          Where heart meets <span className="lin">art</span>.
        </span>
        <p>Canva makes it easy to create and share professional designs.</p>
        <button className="btn1">Start Designing</button>
      </div>

      <div className="section2">
        {["/Posters.png", "/Presentations.png", "/Social.png", "/Videos.png", "/Websites.png"].map(
          (src, index) => (
            <div className="box" key={index}>
              <img src={src} alt="" />
            </div>
          )
        )}
      </div>

      <div className="section3">
        <div className="head">
          <p>A perfect fit for everyone.</p>
        </div>
        <div className="boxes" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {["/Free Plan.png", "/Pro Plan.png", "/Team Plan.png", "/Enterprize Plan.png"].map(
            (src, index) => (
              <img src={src} alt="" key={index} />
            )
          )}
        </div>
        <div className="bott" style={{ textAlign: "center" }}>
          <p>
            Our <a href="">pricing page</a> has full details.
            <a href="">Educational organisations </a> and <a href=""> nonprofits </a> can enjoy premium Canva
            features for free.
          </p>
        </div>
        <div className="companies-trust" style={{ marginTop: "100px" }}>
          <h2 style={{ fontSize: "45px", textAlign: "center" }}>Trusted by well known companies</h2>
          <div className="logos">
            {[
              "https://content-management-files.canva.com/ad90400c-500e-4b63-8d25-6c155cfc2ecf/hubspot-light-theme.png",
              "https://content-management-files.canva.com/7116f431-c121-4055-abf1-50866cf6c920/skyscanner-light-theme.png",
              "https://content-management-files.canva.com/0effd4e5-5c27-4788-b7b3-ae2b753c23dd/danone-light-theme.png",
              "https://content-management-files.canva.com/df5fad20-95d3-4de4-91e7-575909523fbd/reddit-light-theme.png",
              "https://content-management-files.canva.com/532da61c-6de8-4428-ac69-3fae7926b7dd/salesforce-light-theme.png",
              "https://content-management-files.canva.com/057168c7-ab29-4454-b06a-31ed1f161105/sony-light-theme.png",
            ].map((src, index) => (
              <img src={src} alt="" key={index} />
            ))}
          </div>
        </div>
      </div>
      <hr />

      <section className="section4">
          <div className="left1">
            <i
              className="fa-solid fa-wand-sparkles"
              style={{ paddingLeft: "80px", paddingBottom: "30px" }}
            ></i>
            <p
              style={{
                fontSize: "43px",
                textAlign: "left",
                fontWeight: "bold",
                margin: 0,
                padding: "0 0 0 80px",
              }}
            >
              Create with AI
            </p>
            <h3>
              Redefine the way you create with Magic Studio, our suite of
              AI-powered tools that generate copy in your brand voice with{" "}
              <a href="">Magic Write</a> and transform your photos with{" "}
              <a href="">Magic Edit</a>.
            </h3>
            <button
              style={{
                width: "150px",
                padding: "10px",
                borderRadius: "9px",
                backgroundColor: "white",
                border: "1px solid grey",
                marginLeft: "80px",
              }}
            >
              Discover Now
            </button>
          </div>

          <div className="right1">
            <img
              src="https://content-management-files.canva.com/5e938de4-7373-4f61-a509-c06395a902a6/benefits-magic-en-in.jpg"
              alt=""
              style={{
                width: "650px",
                height: "450px",
                borderRadius: "20px",
                marginRight: "80px",
              }}
            />
          </div>
        </section>

        {/* Repeat similar structure for other sections */}
        <section className="section5">
          <div className="left1">
            <img
              src="https://content-management-files.canva.com/b9296139-36ee-4786-b9b3-0d647b4507ac/benefits-together-en-in.jpg"
              alt=""
              style={{
                width: "650px",
                height: "450px",
                borderRadius: "20px",
                marginLeft: "80px",
              }}
            />
          </div>
          <div className="right1">
            <i
              className="fa-brands fa-rocketchat"
              style={{ paddingLeft: "80px", paddingBottom: "30px" }}
            ></i>
            <p
              style={{
                fontSize: "43px",
                textAlign: "left",
                fontWeight: "bold",
                margin: 0,
                padding: "0 0 0 80px",
              }}
            >
              Design with others
            </p>
            <h3>
              Invite friends and family to design with you, or set your whole
              team up to work together. Our collaboration features let you
              comment and work in real-time on <a href="">Presentations</a>,{" "}
              <a href="">Whiteboards</a>, <a href="">Docs</a>,{" "}
              <a href="">Videos</a>, or that birthday party planning.
            </h3>
            <button
              style={{
                width: "150px",
                padding: "10px",
                borderRadius: "9px",
                backgroundColor: "white",
                border: "1px solid grey",
                marginLeft: "80px",
              }}
            >
              Start Designing
            </button>
          </div>
        </section>


        <div className="section6">
  <div className="left1">
    <i className="fa-solid fa-print" style={{ paddingLeft: "80px", paddingBottom: "30px" }}></i>
    <p
      style={{
        fontSize: "43px",
        textAlign: "left",
        fontWeight: "bold",
        paddingBottom: "0px",
        marginBottom: "0px",
        paddingTop: "0px",
        marginTop: "0px",
        paddingLeft: "80px",
      }}
    >
      Ready-to-print designs
    </p>
    <h3>
      Design and print your own <a href="#">posters</a>, <a href="#">invites</a>, <a href="#">cards</a> and more.
      Everything you design in Canva is ready to send to the printer, or to print from home.
    </h3>
    <button
      style={{
        width: "180px",
        padding: "10px",
        borderRadius: "9px",
        backgroundColor: "white",
        border: "1px solid grey",
        marginLeft: "80px",
      }}
    >
      Browse Printables
    </button>
  </div>

  <div className="right1">
    <img
      src="https://content-management-files.canva.com/967961f7-b57c-4844-8a1b-4a7d1e1e90df/benefits-print-in.jpg"
      alt=""
      style={{ width: "650px", height: "450px", borderRadius: "20px", marginRight: "80px" }}
    />
  </div>
  <hr />
</div>
       
<div className="section7">
  <h2 style={{ fontSize: "45px", textAlign: "center" }}>Templates for absolutely anything</h2>
  <p
    style={{
      fontSize: "25px",
      color: "rgb(13 18 22 / 70%)",
      textAlign: "center",
    }}
  >
    Customise an office template, or design something more personal, like an invitation.
  </p>
  <button
    style={{
      fontWeight: 600,
      backgroundColor: "white",
      border: "1px solid grey",
      borderRadius: "7px",
      padding: "9px",
    }}
  >
    Browse All Templates
  </button>
</div>
      
<div className="section8">
  <h2 style={{ fontSize: "45px", textAlign: "center" }}>
    The plan that gets down to business
  </h2>
  <p
    style={{
      fontSize: "25px",
      color: "rgb(13 18 22 / 70%)",
      textAlign: "center",
    }}
  >
    Empower everyone to design together with Canva Teams
  </p>
  <div className="main">
    <div className="left1">
      <img
        src="https://content-management-files.canva.com/b0fb531d-6eec-44e7-ab46-4cf5be8408a4/teams-en-in.jpg"
        alt=""
        style={{
          width: "650px",
          height: "450px",
          borderRadius: "20px",
          marginLeft: "80px",
        }}
      />
    </div>

    <div className="right1">
      <p
        style={{
          fontSize: "29px",
          textAlign: "left",
          fontWeight: "bold",
          paddingLeft: "80px",
          marginBottom: "0px",
        }}
      >
        AI-powered efficiency
      </p>
      <h3>
        Leverage AI to create on-brand copy, templates and video-editing.
      </h3>
      <p
        style={{
          fontSize: "29px",
          textAlign: "left",
          fontWeight: "bold",
          paddingLeft: "80px",
          marginBottom: "0px",
        }}
      >
        Bring your brand in house
      </p>
      <h3>Set up Brand Kits and templates for your team to design with.</h3>
      <p
        style={{
          fontSize: "29px",
          textAlign: "left",
          fontWeight: "bold",
          paddingLeft: "80px",
          marginBottom: "0px",
        }}
      >
        Beautiful approval flows
      </p>
      <h3>
        Easily control individual permissions, assign tasks and share your
        work.
      </h3>
      <button
        style={{
          color: "white",
          backgroundColor: "#8b3dff",
          padding: "11px",
          borderRadius: "7px",
          paddingLeft: "13px",
          paddingRight: "13px",
          border: "1px solid #8b3dff",
          fontWeight: 600,
          marginLeft: "80px",
          width: "250px",
        }}
      >
        <i className="fa-solid fa-users"></i> Explore Canva Team
      </button>
    </div>
  </div>
</div>
      

<div className="section9">
  <h2 style={{ fontSize: "45px", textAlign: "center", marginBottom: "0px" }}>
    We’re full of surprises
  </h2>
  <p
    style={{
      fontSize: "25px",
      color: "black",
      textAlign: "center",
      marginTop: "13px",
    }}
  >
    Here are some of our best traits you might not know about
  </p>

  <div className="flexy">
    <div className="box2">
      <div className="img-container">
        <img
          src="https://thirdparty-public-apps-media.canva-apps.com/v2/BAFPAYpBi5M/UAFPAQtRJ9Y/AAFPSH_pOmY/7/promocard/ad6471b6-d9ef-49b9-9e3e-c26b1d99ab00_200x150.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH2E7WUW5F%2F20241201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241201T114518Z&X-Amz-Expires=424441&X-Amz-Signature=ddcbc3925ab89a8eae5db2079d7d7dfdb2e26a1f6c5dd47b63fb0d7b17250947&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2006%20Dec%202024%2009%3A39%3A19%20GMT"
          alt=""
          className="image"
        />
      </div>
      <h4>We’ve got an Apps Marketplace</h4>
      <p>
        Access leading AI features, discover more content, or integrate Canva
        with your existing platform.
      </p>
    </div>

    <div className="box2">
      <div className="img-container">
        <img src="/App Ver.png" alt="" className="image" />
      </div>
      <h4>We’ve got a desktop App</h4>
      <p>
        Design and collaborate from the comfort of your desktop—no browser, no
        tabs, no distractions. Download the app for free!
      </p>
    </div>

    <div className="box2">
      <div className="img-container">
        <img
          src="https://marketplace.canva.com/EAF3XGY9Kns/1/0/1600w/canva-beige-and-brown-organic-vintage-group-project-presentation-LdrQa46i1ak.jpg"
          alt=""
          className="image"
        />
      </div>
      <h4>We make presentations easy</h4>
      <p>
        Take the stress out of preparing and presenting with our go-to decks.
      </p>
    </div>

    <div className="box2">
      <div className="img-container">
        <img src="/Video Editor.png" alt="" className="image" />
      </div>
      <h4>We have a video editor</h4>
      <p>
        Create and edit professional videos with easy animations, audio, and
        more.
      </p>
    </div>

    <div className="box2">
      <div className="img-container">
        <img
          src="https://static-cse.canva.com/blob/1277771/sustainability-decarbonization.9542bafa.avif"
          alt=""
          className="image"
        />
      </div>
      <h4>We’re Sustainable</h4>
      <p>
        Our operations are carbon neutral, and we’re now focused on
        regeneration, restoring ecosystems, and healing.
      </p>
    </div>
  </div>
</div>
    </>
  )
}

export default App
