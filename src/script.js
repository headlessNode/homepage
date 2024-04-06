import './styles.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

const hero = document.querySelector('.hero');

const title = document.querySelector('.title');
const headingOne = document.querySelector('.heading-one h1');
const headingTwo = document.querySelector('.heading-two h1');
const headingThree = document.querySelector('.heading-three h1');

const current = document.querySelector('.current');
const years = document.querySelector('.years');

const picture = document.querySelector('.picture');

const initialTimeline = gsap.timeline();

initialTimeline
  .from([headingOne, headingTwo, headingThree], {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: 'power.in',
  })
  .from(
    [current, years],
    {
      opacity: 0,
      duration: 1,
      ease: 'power.in',
    },
    '-=0.5',
  )
  .from(
    picture,
    {
      opacity: 0,
      duration: 1,
      ease: 'power.in',
    },
    '-=0.5',
  );

// initialTimeline.play(); // This is default, no need to set it manually if you dont chagne antything

const scrollTimeline = gsap.timeline({
  scrollTrigger: {
    // make ScrollTrigger part of the timeline
    trigger: '.hero',
    pin: true, // Pin everthing
    scrub: true, // Use true to remove the lag that makes things feel janky
    markers: true,
    // animation: scrollAnimation, // Add the whole timeline to the controll of the ScrollTrigger
    // animation: scrollTimeline, // No need if you make ScrollTrigger part of the timeline
    start: 'top',
    end: 'bottom',
    // end: `top+=${window.innerHeight} top` // add window height as a scroll distance
  },
});
scrollTimeline
  .to('.title', {
    scale: 0,
    opacity: 0,
    ease: 'none',
    // duration: 1 // Make both tween the same duration
  })
  .from(
    picture,
    {
      yPercent: 120, // When using yPercent, you can just use numbers instead of strings
      // y: () => window.innerHeight / 2, // move elemnt .from() the current window height
      ease: 'none',
    },
    '<',
  );
