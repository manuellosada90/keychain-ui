import React, { useState } from 'react';
import style from "./About.module.css"
import keychainLogo from "../../src/img/about/Keychain_logo.png"
import kaizenLogo from "../../src/img/about/KaizenCorpslogo3.webp"
import discord from "../../src/img/about/discord.svg"
import email from "../../src/img/about/email.svg"
import twitter from "../../src/img/about/twitter.svg"
import Home from 'src/img/about/Home';
import Information from 'src/img/about/Information';

export default function About() {
  const [input, setInput] = useState({
    email: "", //Here you save the email
    submitValue: "SUSCRIBE", //This is the text of the form button
    inputStyle: style.suscribe, //This is to change the style of the button when you click
    disabledButton: true, // the button is disabled when the form is empty
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input.email);
    setInput({
      ...input,
      submitValue: "THANK YOU FOR SUSCRIBING!",
      inputStyle: style.suscribed,
      disabledButton: true,
    });
  };
  const handleOnChange = (e) => {
    setInput({
      ...input,
      submitValue: "SUSCRIBE",
      inputStyle: style.suscribe,
      email: e.target.value,
      disabledButton: false, // when you modify the email input, the button is activated again
    });
  };

  return (
    <div className={style.about}>
      <div className={style.logoContainer}>
        <img
          src={keychainLogo}
          alt="KeychainLogo"
          className={style.keychainLogo}
        />
        <img src={kaizenLogo} alt="KaizenLogo" className={style.kaizenLogo} />
      </div>
      <div className={style.textsContainer}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet porta ipsum. Praesent vitae sem sit amet arcu hendrerit imperdiet
          at at tellus. Curabitur turpis neque, hendrerit a nulla quis, mattis
          dapibus diam. Vivamus auctor accumsan orci, vitae scelerisque quam
          dapibus eget. Quisque magna tellus, congue ut rhoncus posuere,
          condimentum at tortor.
        </p>
        <div className={style.media}>
          <div className={style.discord}>
            <img src={discord} alt="discord" />
          </div>
          <div className={style.twitter}>
            <img src={twitter} alt="twitter" />
          </div>
          <div className={style.email}>
            <img src={email} alt="email" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className={style.form}>
          <h4>Don't miss our updates!</h4>
          <input
            type="email"
            value={input.email}
            onChange={handleOnChange}
            className={style.input}
            placeholder="Enter your email"
          />
          <input
            type="submit"
            value={input.submitValue}
            className={`${input.inputStyle}`}
            disabled={input.disabledButton || input.email === ''}
          />
        </form>
      </div>
      <div className={style.footer}> 
      {/* I was not sure if in this part I had to make the footer navigable or if I had to do only the styles */}
        <div className={style.homeIcon}>
          <div />
          <Home color="#73788A" />
          HOME
        </div>
        <div className={style.aboutIcon}>
          <div />
          <Information color="#BE7DFF" />
          ABOUT
        </div>
      </div>
    </div>
  );
}