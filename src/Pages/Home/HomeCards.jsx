import "./HomeCards.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


function HomeCards() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  useEffect(() => {
    // Counter 1 → 10.5k
    let c1 = 0;
    let interval1 = setInterval(() => {
      if (c1 < 10.5) {
        c1 += 0.1;
        setCounter1(parseFloat(c1.toFixed(1)));
      } else {
        setCounter1(10.5);
        clearInterval(interval1);
      }
    }, 10);

    // Counter 2 → 20k
    let c2 = 0;
    let interval2 = setInterval(() => {
      if (c2 < 20) {
        c2 += 1;
        setCounter2(c2);
      } else {
        setCounter2(20);
        clearInterval(interval2);
      }
    }, 30);

    // Counter 3 → 45k
    let c3 = 0;
    let interval3 = setInterval(() => {
      if (c3 < 45) {
        c3 += 1;
        setCounter3(c3);
      } else {
        setCounter3(45);
        clearInterval(interval3);
      }
    }, 30);

    // Counter 4 → 25k
    let c4 = 0;
    let interval4 = setInterval(() => {
      if (c4 < 25) {
        c4 += 1;
        setCounter4(c4);
      } else {
        setCounter4(25);
        clearInterval(interval4);
      }
    }, 50);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  return (
    <div>
      <motion.div>
        <motion.h2 
        className="home-cards-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}>
          Our Platform in <span>Numbers</span>
        </motion.h2>
      </motion.div>

      <motion.div 
      className="home-card-wrapper"
      initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
      >
        <div className="home-card">
          <div className="home-card-bg">
            <div className="home-card-txt">
              <h4>Active Jobs</h4>
              <h3>{counter1}k</h3>
            </div>
          </div>
          <div className="home-card-blob"></div>
        </div>

        <div className="home-card">
          <div className="home-card-bg">
            <div className="home-card-txt">
              <h4>Companies</h4>
              <h3>{counter2}k</h3>
            </div>
          </div>
          <div className="home-card-blob"></div>
        </div>

        <div className="home-card">
          <div className="home-card-bg">
            <div className="home-card-txt">
              <h4>Jobs Seekers</h4>
              <h3>{counter3}k</h3>
            </div>
          </div>
          <div className="home-card-blob"></div>
        </div>

        <div className="home-card">
          <div className="home-card-bg">
            <div className="home-card-txt">
              <h4>Total Hires</h4>
              <h3>{counter4}k</h3>
            </div>
          </div>
          <div className="home-card-blob"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default HomeCards;