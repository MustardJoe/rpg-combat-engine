import React from 'react';
import styles from './about.css';
import selfie from '../../assets/jonselfie.png';

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.aboutHeader}>About</h2>
      <p className={styles.paragraph}>
        Welcome to GriNd-O-TRoN, a game designed to emulate the combat portions
        of older Japanese-style Role Playing Games, like Dragon Quest/Warrior 
        or Final Fantasy, which themselves
        were digital adaptations of pen and paper Role Playing Games like
        Dungeons & Dragons. GriNd-O-TRoN strips out the often convoluted and
        story, and just gives you the battles. In GriNd-O-TRoN the
        action is turn based - you make a move, then you wait for your
        opponent to make their move, and this series of actions repeat until
        victory or defeat.  After the defeat of each foe, experience points
        are awarded, and when accumulated in sufficient quantity, the player
        character gains a level and becomes more powerful. This cycle,
        fighting battles over and over again to become more powerful, is
        known as grinding, and is where the name comes from.
      </p>
      <p className={styles.paragraph}>
        <img src={selfie}
          className={styles.selfie}
          alt="a pixelized rending  of the app's author"></img>
        <p className={styles.divInPara}>

          If you enjoy GriNd-O-TRoN, please consider checking out more of my
          projects here on GitHub, or on <a className={styles.link}
            href="http://www.jonforney.com/">www.jonforney.com</a>.
          Additionally,
          I'm currently looking for work, so please feel free to visit <a
            className={styles.link}
            href="https://www.linkedin.com/in/jon-forney/">my LinkedIn page</a> or
          contact me directly with your professional opportunies.
        </p>
      </p>
    </section>

    
  );
}
