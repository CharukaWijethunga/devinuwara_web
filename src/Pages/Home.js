import React from "react";
import { Link } from "react-router-dom";
import {Image} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import { Carousel } from 'react-carousel-minimal';
const Home = () => {
  const { t } = useTranslation();
   const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div>
      <header>
        <h1>{t('home_greeting')}</h1>
      </header>
      <main>
        <section>
          <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="1000px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
        </section>
        <section>
          <h2>{t('home_history')}</h2>
          <p>
           {t('home_history_detail')}
          </p>
        </section>
        <section>
          <h2>{t('home_architecture')}</h2>
          <p>
            {t('home_architecture_detail')}
          </p>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Devunuwara_Temple.jpg/1200px-Devunuwara_Temple.jpg" />
        </section>
        <section>
          <h2>{t('home_significance')}</h2>
          <p>
            {t('home_significance_detail')}
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            The Devinuwara Uthpalawanna Maha Dewalaya is located at the following address:
          </p>
          <p>
            Devinuwara Uthpalawanna Maha Dewalaya<br />
            Devinuwara<br />
            Southern Province<br />
            Sri Lanka
          </p>
          <p>
            The temple can be reached by bus or by train. The nearest bus station is located in Matara, and the nearest train station is located in Dondra.
            The temple can also be reached by car. The temple is located on the A2 highway, which is the main highway that runs along the southern coast of Sri Lanka.
            The temple is open to the public from 6am to 6pm, every day.
          </p>
        </section>
      </main>
      <footer>
        <p>
          We hope you enjoy your visit to the Devinuwara Uthpalawanna Maha Dewalaya!
        </p>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </footer>
    </div>
  );
};

export default Home;
