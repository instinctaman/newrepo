
function Projects() {
  const styles = {
    main: {
        marginTop: '120px',
        textAlign: 'center',
        overflowX: 'hidden',
        color: '#fff',
    },
  };
  return (
  <>
  <main style={styles.main}>
    <div className="container bx-sdw">
      <div className="row">
        <div className="col-lg-6 bx-sdw">
          <div className="project-item">
            <h3>Project 1: Portfolio Website</h3>
            <p>A personal portfolio website to showcase my skills and projects.</p>
            <a href="https://amankiportfolio.netlify.app/" target="_blank" rel="noreferrer"><img
                src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6957d3b2aeef37000813b134/screenshot_2026-01-02-14-19-20-0000.webp&fit=cover&h=500&q=40&w=800" alt=""/></a>
          </div>
        </div>
        <div className="col-lg-6 bx-sdw">
          <h3>Project 2: GNIM Landing_page</h3>
          <p>The Project from my internship</p>
          <a href="https://gnim.netlify.app/" target="_blank" rel="noreferrer"><img
              src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6869168a948ebf0008916372/screenshot_2025-07-05-12-12-46-0000.webp&fit=cover&h=500&q=40&w=800" alt=""/></a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 bx-sdw">
          <h3>Project 3: VSIET Landing_page</h3>
          <p>The Project from my internship</p>
          <a href="https://vsiet-landing.netlify.app/" target="_blank" rel="noreferrer"><img
              src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/686bf612b9ea170009efc6ff/screenshot_2025-07-07-16-31-00-0000.webp&fit=cover&h=500&q=40&w=800" alt=""/></a>
        </div>
        <div className="col-lg-6 bx-sdw">
          <h3>Project 4: Landing Page</h3>
          <p>A modern landing page design for businesses and startups.</p>
          <a href="https://amanlanding.netlify.app/" target="_blank" rel="noreferrer"><img
              src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/680f69642861adf8752a18a6/screenshot_2025-04-28-11-41-44-0000.webp&fit=cover&h=500&q=40&w=800" alt=""/></a>
        </div>
      </div>
    </div>

  </main>
  </>
  )
}
export default Projects;