import React from "react";
import { Link } from "react-router-dom";
import {Image} from "react-bootstrap";


const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Devinuwara Uthpalawanna Maha Dewalaya</h1>
      </header>
      <main>
        <section>
          <h2>History</h2>
          <p>
            The Devinuwara Uthpalawanna Maha Dewalaya is believed to have been built in the 1st century AD. The temple was originally built by the Chola dynasty, and it was later renovated by the Sinhalese kings of Sri Lanka. The temple has been damaged by wars and natural disasters over the centuries, but it has always been rebuilt and restored.
          </p>
        </section>
        <section>
          <h2>Architecture</h2>
          <p>
            The Devinuwara Uthpalawanna Maha Dewalaya is a beautiful example of Sri Lankan architecture. The temple is built in the Dravidian style, and it is made of brick and stone. The temple has a large main shrine, which is dedicated to Lord Vishnu. The main shrine is surrounded by a number of smaller shrines, which are dedicated to other Hindu deities. The temple complex also includes a library, a museum, and a guesthouse.
          </p>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Devunuwara_Temple.jpg/1200px-Devunuwara_Temple.jpg" />
        </section>
        <section>
          <h2>Significance</h2>
          <p>
            The Devinuwara Uthpalawanna Maha Dewalaya is one of the most important Hindu temples in Sri Lanka. The temple is a popular pilgrimage destination for Hindus from all over Sri Lanka and from around the world. The temple is also a popular tourist destination, and it is one of the most visited places in Sri Lanka.
          </p>
        </section>
        <section>
          <h2>Events</h2>
          <p>
            The Devinuwara Uthpalawanna Maha Dewalaya hosts a number of festivals and events throughout the year. The most important festival is the annual Esala Perahera, which is held in July or August. The Esala Perahera is a colorful and festive event, and it is one of the most popular tourist attractions in Sri Lanka.
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
          </p>
          <p>
            The temple can also be reached by car. The temple is located on the A2 highway, which is the main highway that runs along the southern coast of Sri Lanka.
          </p>
          <p>
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
