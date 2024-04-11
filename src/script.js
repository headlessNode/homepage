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

const mainTextOne = document.querySelector('.txt-one');
const mainTextTwo = document.querySelector('.txt-two');

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

const scrollTimeline = gsap.timeline({
  scrollTrigger: {
    // make ScrollTrigger part of the timeline
    trigger: '.hero',
    pin: '.hero', // Pin everthing
    scrub: true, // Use true to remove the lag that makes things feel janky
    start: 'top',
    end: 'bottom 50%',
  },
});
scrollTimeline
  .to('.title', {
    scale: 0.8,
    opacity: 0,
    ease: 'none',
  })
  .fromTo(
    picture,
    {
      yPercent: 120,
      ease: 'none',
    },
    {
      yPercent: -20,
    },
    '<',
  );

const textOneScrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: mainTextOne,
    start: 'top 70%',
    end: 'bottom 70%',
    //events: onEnter, onLeave, onEnterBack, onLeaveBack
    toggleActions: 'restart reverse restart reverse',
    //options: play, pause, resume, reset, restart, complete, reverse, none
  },
});

textOneScrollTimeline.from(mainTextOne, {
  opacity: 0,
  y: 20,
  ease: 'none',
});

const textTwoScrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: mainTextTwo,
    start: 'top 70%',
    end: 'bottom 70%',
    //events: onEnter, onLeave, onEnterBack, onLeaveBack
    toggleActions: 'restart reverse restart reverse',
    //options: play, pause, resume, reset, restart, complete, reverse, none
  },
});

textTwoScrollTimeline.from(mainTextTwo, {
  opacity: 0,
  y: 20,
  ease: 'none',
});
