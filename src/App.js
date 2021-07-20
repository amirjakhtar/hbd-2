import * as React from "react";
import "animate.css";

import "./App.css";
import Collapse from "./Collapse";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="cardconleft">
          <div className="card cardleft animate__animated animate__backInLeft">
            <p>
              Disclaimer: This is going to be the most cheezy thing ever.
              <br />
              Happy birthday Ladki! just a reminder that you are one of the
              sweetest people i have ever met, one of the loveliest people i
              have ever met, THE most caring person i have ever met, and to be
              honest if i keep going on about how important, innocent, pure
              hearted, kind, soft, cute, lovely you are it will take me an
              entire year and you will be 22(?😂) by then, and i will have to do
              this all over again(Lame joke i know😂), but what i can genuinely
              do is prepare you a kind of Friend-letter(? if that is a thing
              Lol) for each one of your incredibly unpredictable moods😂...
              Jisey padh ke aap bore ho sakein aur apni pareshaniyan hopefully
              bhool sakein🐰 Aliceblue background color hai(⌐■_■)
            </p>
          </div>
        </div>
        <div className="cardconright">
          <Collapse
            classes="card cardright animate__animated animate__backInRight"
            mood="Happy"
          >
            <p>
              Alhumdulillah aap khush hain?? Sach batayein😂. Chal mujhe call
              karke mujhe hi cheer up kar de. Ya cooking kar le keep that good
              mood momentum rolling hehe. Aur mood acha hai hi to ye kyu padh ri
              ho niklo Leetcode ki taraf chuppe chaap gadhi. Also, very very
              cheezy part i know, but please keep smiling please. You have no
              idea how much you being depressed also affects people that are
              close to you just ask appi or Iqra. And i don't think you have
              nearly enough idea how charming your smile is and this is not me
              simping im just stating facts😂. Chlo niklo Leetcode ki taraf.{" "}
              <a href="https://leetcode.com/" target="_blank">
                Click here bestie
              </a>
              😂
            </p>
          </Collapse>
        </div>
        <div className="cardconleft">
          <Collapse
            classes="card cardleft animate__animated animate__backInLeft"
            mood="Sad"
          >
            <p>
              Ki hoya bestie. Sad tak to theek hai bass aansu mat tapka dena😬.
              For whatever reason you are sad, just text me or call me and i
              promise i will try to make you happy. I mean, bore to karunga
              obviously lekin pinky promise aapki sadness khatm karne ka poora
              prayaas kiya jaayega. Dekhein, aapko sad hone ki waise bhi koi
              zaroorat hai nahi mashallah you are so blessed and cheerful. Just
              think ki for your birthday, ONLY for YOUR birthday, Malik and Fakh
              were on the same team so itni power hai aapke andar mashallah😂.
              And you know why is that? It's because people know your value,
              they know that you are the most loving, caring, funny, helipng,
              cute friends not just me, but all of them have ever had in their
              lives, you truly are special believe me, and we are all so blessed
              to have you in our lives. Also i love your smile, yeah i know i
              find your motu tears cute too but i love your smile 10000000 times
              more so bestie ke liye hi muskura de hehehe. Friss you. Also, try
              checking out this playlist you lovely person.
              <br />
              <a
                href="https://www.youtube.com/playlist?list=PLvt-sKhI86aYWPZ7wrEGNO8MidnjSL8aO"
                target="_blank"
              >
                Click here
              </a>
            </p>
          </Collapse>
        </div>
        <div className="cardconright">
          <Collapse
            classes="card cardright animate__animated animate__backInRight"
            mood="Question ni ho ra"
          >
            <p>
              Ho jaayega QT. Ganda question hoga zyada time waste na karein appi
              se pooch lein ya mere ko bol dein. And haan. You have gotten
              soooooo sooooo sooooooooooooooo much better at coding in one year
              I can't even tell you. If you keep on the consistency, inshallah
              boht boht boht acha ho jaayega tera DSA. So don't get depressed
              over one or two questions. Trust the journey, your coding journey,
              how you knew absolutely nothing just a year ago to discussing
              advanced topics like recursion and Trees and actually having grasp
              of these topics. Iknow it's tough, it really is, lkin give up ni
              karna hai veere phod ke rakh dena hai💪. Really proud of you
              ladkiii.
            </p>
          </Collapse>
        </div>
        <div className="cardconleft">
          <Collapse
            classes="card cardleft animate__animated animate__backInLeft"
            mood="Question hogya"
          >
            <p>Well, congrets😂. So proud of you🙌.</p>
          </Collapse>
        </div>
        <div className="cardconright">
          <Collapse
            classes="card cardright animate__animated animate__backInRight"
            mood="Angry"
          >
            <p>
              Aaiye mujhe msg karein aur apna gussa nikaalein idhar aake😣😂. Ya
              apne Shoaika ke videos dekh lo mood theek ho jaayega😂.
            </p>
          </Collapse>
        </div>
        <div className="cardconleft">
          <Collapse
            classes="card cardleft animate__animated animate__backInLeft"
            mood="Angry for no reason😂"
          >
            <p>
              Mujhe msg kar ke mere pe ye gussa na nikaalein jaayein aur achi si
              neend le lein ek😂😂. Ye lo
              <br />
              <img
                src="https://okpakistan.com/wp-content/uploads/2019/10/2.jpg"
                width="250"
                height="auto"
              />
            </p>
          </Collapse>
        </div>
        <div className="cardconleft">
          <Collapse
            classes="card cardleft animate__animated animate__backInLeft"
            mood="Angry for no reason😂"
          >
            <p>
              Mujhe msg kar ke mere pe ye gussa na nikaalein jaayein aur achi si
              neend le lein ek😂😂. Ye lo
              <br />
              <img
                src="https://okpakistan.com/wp-content/uploads/2019/10/2.jpg"
                width="250"
                height="auto"
              />
            </p>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default App;
