import React from "react"
import Tv from '../components/tv';
import './styles.scss';

const list_id = 'MUIEAExWpwqxf_uw0T3adGQF4dZAYYXQCh7OWlToSlL_tOerr9Uq-e_jaO-oP5EToicb4EghZfqf_3FwJCA8qearFySrjxdjDxHuCPStvEQH6SkDI7hVC2gdBSDA7uA3dwUaEYUUthY8kb_1FAN8U_ACf6v1GxfKg0dEqcHs9zi1cWORJnDLGFDNcxA50xX2xsI_QvDzCoCPw0-d';

const Home = () => {
  return (
    <>
      <div class="logo-tv"></div>
      <Tv />
      <div>
        <section class="about">
          <div class="logo"></div>
          <div class="all-of-the-above"></div>
          <div class="content">
            <p>A thought provoking show with a sense of humor answering today’s most pressing questions around climate change and social justice.</p>
            <p>This show goes beyond news, it is a deep dive into topics providing a new way of thinking and thus living in harmony with mother nature</p>
          </div>
        </section>
        <section class="mother-nature">
          <div class="earth"></div>
          <div class="content">
            <p class="big-text">This show is giving Mother Nature center stage to understand all the solutions that already exist out there</p>
            <p class="small-text">This isn’t a doomsday anxiety inducing show about how we are all going to die if the climate collapses, this is a show about the million solutions that exist and we want to address  all of the above  when addressing climate justice.</p>
          </div>
          <div class="badge"><div>Every view fights the climate crisis</div></div>
        </section>
        <section class="why">
          <div class="content">
            <h2>Why did Mother Nature Choose us?</h2>
            <p>She actually chose all of us. And we are here to show you why.</p>
            <article>
              <div>
                <div class="picture sophie"></div>
              </div>
              <div class="info">
                <p class="title">Sophia Li</p>
                <p class="description">Sophia is a Chinese-American journalist, advocate and director, she has reported and built a body of work centered around environmental justice and racial justice in America and around the world. Her work has been shared millions of times by world leaders and celebrities globally</p>
              </div>
            </article>
            <article class="who">
              <div>
                <div class="picture celine"></div>
              </div>
              <div class="info">
                <p class="title">Céline Semaan</p>
                <p class="description">Celine is a refugee, first generation war survivor, her career continues to be shaped by the intersection of social and environmental justice where she invests her time in building Slow Factory, an institute and research lab investing in education & climate positive solutions that are ready to be implemented today</p>
              </div>
            </article>
          </div>
        </section>
        <section class="newsletter-signup">
          <div class="content">
            <form method="post" class="newsletter-signup-form" target="_blank" action={`https://cf3ef3ac.sibforms.com/serve/${list_id}`}>
              <input type="hidden" name="locale" value="en" />
              <input type="hidden" name="html_type" value="simple" />
              <label class="title-sm" for="EMAIL" htmlFor="email">Your Email:</label> &nbsp;
              <input class="title-sm" type="email" id="email" name="EMAIL" required="true"  /> &nbsp;
              <input class="button" type="submit" value="Sign Up" name="subscribe" />
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home;
