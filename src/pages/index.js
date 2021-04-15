import React from "react"
import Tv from '../components/tv';
import src_sophie from '../../static/who_sophie.png';
import src_celine from '../../static/who_celine.png';
import src_logo from '../../static/logo.png';
import src_allOfTheAbove from '../../static/all_of_the_above.png';
import './home.scss';

const list_id = 'MUIEAExWpwqxf_uw0T3adGQF4dZAYYXQCh7OWlToSlL_tOerr9Uq-e_jaO-oP5EToicb4EghZfqf_3FwJCA8qearFySrjxdjDxHuCPStvEQH6SkDI7hVC2gdBSDA7uA3dwUaEYUUthY8kb_1FAN8U_ACf6v1GxfKg0dEqcHs9zi1cWORJnDLGFDNcxA50xX2xsI_QvDzCoCPw0-d';

const Home = () => {
  return (
    <>
      <div className="logo-tv"></div>
      <Tv />
      <div>
        <section className="about">
          <div className="logo">
            <img src={src_logo} alt="All of the above Logo" />
          </div>
          <div className="all-of-the-above">
            <img src={src_allOfTheAbove} alt="All of the above" />
          </div>
          <div className="content">
            <p>A thought provoking show with a sense of humor answering today’s most pressing questions around climate change and social justice.</p>
            <p>Every episode plants 1,000 trees with Ecosia, divest from fossil fuel and invests in sustainability literacy with Slow Factory.</p>
          </div>
        </section>
        <section className="mother-nature">
          <div className="earth"></div>
          <div className="content">
            <h2>This show is giving Mother Nature center stage to understand all the solutions that already exist.</h2>
            <p className="small-text">This isn’t a doomsday anxiety inducing show about how we are all going to die if the climate collapses, this is a show about the million solutions that exist and we want to address  all of the above  when addressing climate justice.</p>
          </div>
          <div className="badge"><div>Every view fights the climate crisis</div></div>
        </section>
        <section className="why">
          <div className="content">
            <h2>Why did Mother Nature Choose us?</h2>
            <p>She actually chose all of us. And we are here to show you why.</p>
            <article>
              <div className="picture">
                <img src={src_sophie} alt="Sophia Li" />
              </div>
              <div className="info">
                <h3>Sophia Li</h3>
                <p><small>She has the power to move people into action.</small></p>
                <p>Sophia is a Chinese-American journalist, advocate and director, she has reported and built a body of work centered around environmental justice and racial justice in America and around the world. Her work has been shared millions of times by world leaders and celebrities globally</p>
                <p><a href="https://www.instagram.com/sophfei/" target="_blank">@sophfei</a></p>
              </div>
            </article>
            <article>
              <div className="picture">
                <img src={src_celine} alt="Celine Semaan" />
              </div>
              <div className="info">
                <h3>Céline Semaan</h3>
                <p><small>She has the power to lead government to change.</small></p>
                <p>Celine is a refugee, first generation war survivor, her career continues to be shaped by the intersection of social and environmental justice where she invests her time in building Slow Factory, an institute and research lab investing in education & climate positive solutions that are ready to be implemented today</p>
                <p><a href="https://www.instagram.com/celinecelines/" target="_blank">@celinecelines</a></p>
              </div>
            </article>
          </div>
        </section>
        <section className="newsletter-signup">
          <div className="content">
            <form method="post" className="newsletter-signup-form" target="_blank" action={`https://cf3ef3ac.sibforms.com/serve/${list_id}`}>
              <input type="hidden" name="locale" value="en" />
              <input type="hidden" name="html_type" value="simple" />
              <label className="title-sm" for="EMAIL" htmlFor="email"><h2>Join the movement</h2></label>
              <input className="title-sm" type="email" id="email" name="EMAIL" required="true" placeholder="Enter your email"  />
              <div>
                <input className="button" type="submit" value="Fight climate change" name="subscribe" />
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home;
