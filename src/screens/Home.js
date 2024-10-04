import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <section className='hero-section'>
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1469401258206-4e0cc14e9358?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className='featured-posts container'>
        <h3 className='text-center text-uppercase py-4'>Featured Posts</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-grid'>
                <a href="#" className="btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
          <div className="card">
              <img src="https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-grid'>
              <a href="#" className="btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1465301055284-72f355cfd745?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlfGVufDB8fDB8fHww" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-grid'>
              <a href="#" className="btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className='latest-posts container pt-2'>
      <h3 className='text-center text-uppercase py-4'>Latest Posts</h3>
      <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-grid'>
                <a href="#" className="btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
          <div className="card">
              <img src="https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-grid'>
              <a href="#" className="btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1465301055284-72f355cfd745?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlfGVufDB8fDB8fHww" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-grid'>
              <a href="#" className="btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          </div>
        </div>
  
      </section>
      <section className='our-portfolio'>
      <h3 className='text-center text-uppercase py-4'>Our Portfolio</h3>
      <div className="container">
        <div className="row g-2">
          <div className="col-6">
            <div className="p-1 border bg-light">
              <img src="https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHwwfDB8fHwy" className="card-img-top" alt="..."/>
            </div>
          </div>
          <div className="col-6">
            <div className="p-1 border bg-light">
              <img src='https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8MHwwfHx8Mg%3D%3D' className="card-img-top" alt="..."/>
            </div>
          </div>
          <div className="col-6">
            <div className="p-1 border bg-light">
              <img src='https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8MHwwfHx8Mg%3D%3D' className="card-img-top" alt="..."/>
            </div>
          </div>
          <div className="col-6">
            <div className="p-1 border bg-light">
              <img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdXNlfGVufDB8MHwwfHx8Mg%3D%3D' className="card-img-top" alt="..."/>
            </div>
          </div>
        </div>
    </div>
      </section>
    </div>
  )
}

export default Home