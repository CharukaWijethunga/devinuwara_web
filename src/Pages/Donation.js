import React from "react";
import { Link } from "react-router-dom";

import './Donation.css'
const Donation = () => {
  return (
    <div>
      <header>
        <h1>Donate to Devinuwara Dewalaya</h1>
      </header>
      <main>
        <section>
          <h2>About Devinuwara Dewalaya</h2>
          <p>
            Devinuwara Dewalaya is a Hindu temple dedicated to Lord Vishnu. It is located in the town of Devinuwara, in the Southern Province of Sri Lanka. The temple is believed to have been built in the 1st century AD, and it is one of the oldest and most important Hindu temples in Sri Lanka.
          </p>
        </section>
        <section>
          <h2>Why Donate?</h2>
          <p>
            Devinuwara Dewalaya is a beloved and important temple for Hindus from all over Sri Lanka and from around the world. The temple is also a popular tourist destination, and it is one of the most visited places in Sri Lanka. Your donation will help to support the temple's ongoing operations and to preserve its history and beauty for future generations.
          </p>
        </section>
        <section>
          <h2>How to Donate</h2>
          <p>
            There are a few ways to donate to Devinuwara Dewalaya. You can make a one-time donation, or you can set up a recurring donation. You can also donate by check or money order.
          </p>
          <p>
            If you would like to make a one-time donation, you can use the following link:
          </p>
          <p>
            <a href="https://www.paypal.com/donate?hosted_button_id=345678901234">Donate Now</a>
          </p>
          <p>
            If you would like to set up a recurring donation, you can use the following link:
          </p>
          <p>
            <a href="https://www.patreon.com/devinuwaradewalaya">Donate Monthly</a>
          </p>
          <p>
            If you would like to donate by check or money order, please make your check or money order payable to "Devinuwara Dewalaya" and mail it to the following address:
          </p>
          <p>
            Devinuwara Dewalaya<br />
            123 Main Street<br />
            Devinuwara<br />
            Southern Province<br />
            Sri Lanka
          </p>
        </section>
        <section>
          <h2>Thank You</h2>
          <p>
            Thank you for your support of Devinuwara Dewalaya. Your donation will help to ensure that the temple can continue to serve the community for many years to come.
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

export default Donation;
