
import Great_idea from './assets/img/projects/great-idea.png';
function Projects() {
  const styles = {
    main: {
      marginTop: window.innerWidth <= 400 ? '60px' : '120px',
      overflowX: 'hidden',
      color: '#fff',
    },
  };

  return (
    <>
      <main style={styles.main}>
        <div className="container bx-sdw">
          <div className="row justify-content-evenly">
            {/* <div className="col-lg-5 bx-sdw mt-3">
              <div className="project-item">
                <h3>Project 6:Budhraj Service Website</h3>
                <a href="https://project-for-nri.onrender.com/" target="_blank" rel="noreferrer">
                  <img className="border-radius-25" src={Great_idea} alt="" />
                </a>
                <div className="m-1">
                  <h5>Languages: <span className="bold-100 hover-underline">Python, Flask, CSS3, HTML5, Javascript, Bootstrap5</span></h5>
                </div>
                <div className="m-1">
                  <h5>Duration: <span className="bold-100 hover-underline">1 Month(update as needed)</span></h5>
                </div>
                <p className="m-1"><h5>About: <span className="bold-100 hover-underline">For the journals, notes and pyq</span> </h5></p>
              </div>
            </div> */}
            <div className="col-lg-5 bx-sdw mt-3">
              <div className="project-item">
                <h3>Project 5: Great_idea Website</h3>
                <a href="https://dashboard-check.page.gd/" target="_blank" rel="noreferrer">
                  <img className="border-radius-25" src={Great_idea} alt="" />
                </a>
                <div className="m-1">
                  <h5>Languages: <span className="bold-100 hover-underline">Php, CSS3, HTML5, Javascript, Bootstrap5</span></h5>
                </div>
                <div className="m-1">
                  <h5>Duration: <span className="bold-100 hover-underline">1 Month(update as needed)</span></h5>
                </div>
                <p className="m-1"><h5>About: <span className="bold-100 hover-underline">For the journals, notes and pyq</span> </h5></p>
              </div>
            </div>
            <div className="col-lg-5 bx-sdw mt-3">
              <div className="project-item">
                <h3>Project 4: Portfolio Website</h3>
                <a href="https://amankiportfolio.netlify.app/" target="_blank" rel="noreferrer">
                  <img className="border-radius-25" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6957d3b2aeef37000813b134/screenshot_2026-01-02-14-19-20-0000.webp&fit=cover&h=500&q=40&w=800" alt="" />
                </a>
                <div className="m-1">
                  <h5>Languages: <span className="bold-100 hover-underline">React.js, CSS3, HTML5, Javascript, Bootstrap5</span></h5>
                </div>
                <div className="m-1">
                  <h5>Duration: <span className="bold-100 hover-underline">1 Week(update regular)</span></h5>
                </div>
                <p className="m-1"><h5>About: <span className="bold-100 hover-underline">A personal portfolio website to showcase my skills and projects.</span> </h5></p>
              </div>
            </div>
            <div className="col-lg-5 bx-sdw mt-3">
              <div className="project-item">
                <h3>Project 3: GNIM Landing_page</h3>
                <a href="https://gnim.netlify.app/" target="_blank" rel="noreferrer">
                  <img className="border-radius-25" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6869168a948ebf0008916372/screenshot_2025-07-05-12-12-46-0000.webp&fit=cover&h=500&q=40&w=800" alt="" />
                </a>
                <div className="m-1">
                  <h5>Languages: <span className="bold-100 hover-underline">CSS3, HTML5, Javascript, Bootstrap3</span></h5>
                </div>
                <div className="m-1">
                  <h5>Duration: <span className="bold-100 hover-underline">1 month</span></h5>
                </div>
                <p className="m-1"><h5>About: <span className="bold-100 hover-underline">The Project from my internship</span> </h5></p>
              </div>
            </div>
            <div className="col-lg-5 bx-sdw mt-3">
              <div className="project-item">
                <h3>Project 2: VSIET Landing_page</h3>
                {/* <p>The Project from my internship</p> */}
                <a href="https://vsiet-landing.netlify.app/" target="_blank" rel="noreferrer">
                  <img className="border-radius-25" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/686bf612b9ea170009efc6ff/screenshot_2025-07-07-16-31-00-0000.webp&fit=cover&h=500&q=40&w=800" alt="" />
                </a>
                <div className="m-1">
                  <h5>Languages: <span className="bold-100 hover-underline">CSS3, HTML5, Javascript, Bootstrap5</span></h5>
                </div>
                <div className="m-1">
                  <h5>Duration: <span className="bold-100 hover-underline">15 days</span></h5>
                </div>
                <p className="m-1"><h5>About: <span className="bold-100 hover-underline">The Project from my internship</span> </h5></p>

              </div>
            </div>
            <div className="col-lg-5 bx-sdw mt-3">
              <div className="project-item">
                <h3>Project 1: Landing Page</h3>
                {/* <p>A modern landing page design for businesses and startups.</p> */}
                <a href="https://amanlanding.netlify.app/" target="_blank" rel="noreferrer">
                  <img className="border-radius-25" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/680f69642861adf8752a18a6/screenshot_2025-04-28-11-41-44-0000.webp&fit=cover&h=500&q=40&w=800" alt="" />
                </a>
                <div className="m-1">
                  <h5>Languages: <span className="bold-100 hover-underline">CSS3, HTML5, Javascript, Tailwind Css</span></h5>
                </div>
                <div className="m-1">
                  <h5>Duration: <span className="bold-100 hover-underline">3 days</span></h5>
                </div>
                <p className="m-1"><h5>About: <span className="bold-100 hover-underline">A modern landing page design for businesses and startups.</span> </h5></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Projects;