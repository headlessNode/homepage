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

const projectsContainer = document.querySelector('.experience .projects');
const projectHeading = document.querySelector('.experience .proj-heading');
const projectHeadingOne = projectHeading.querySelector('.proj-heading-one');
const projectHeadingTwo = projectHeading.querySelector('.proj-heading-two');
const projectPreview = document.querySelector(
  '.projects .proj-preview .preview-img',
);
const projectBattleship = document.querySelector(
  '.projects .proj-deets .battleship',
);
const projects = document.querySelectorAll('.projects .proj-deets .project');
const projectTodo = document.querySelector('.projects .proj-deets .todo');
const projectWeather = document.querySelector('.projects .proj-deets .weather');
const projectTicTac = document.querySelector('.projects .proj-deets .tictac');

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
    trigger: '.hero',
    pin: '.hero',
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

const projectHeadingScroll = gsap.timeline({
  scrollTrigger: {
    trigger: projectHeading,
    start: 'top 50%%',
    end: 'bottom 50%',
  },
});

projectHeadingScroll.from([projectHeadingOne, projectHeadingTwo], {
  y: 200,
  opacity: 0,
  duration: 1,
  ease: 'power.in',
});

const projectsScrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: projects,
    start: 'top 50%',
    end: 'bottom 50%',
    markers: true,
  },
});

projectsScrollTimeline.from(projectsContainer, {
  y: 50,
  opacity: 0,
  ease: 'none',
});

function onMouseEnter(event) {
  let buttonArrow;
  if (event.target.classList.contains('battleship')) {
    // projectPreview.innerHTML =
    //   "<img class='battleship-img' style='background-size: contain' src='../src/img/battleship.jpeg'>";
    projectPreview.style.backgroundImage = "url('../src/img/battleship.jpeg')";
    projectPreview.style.backgroundSize = 'contain';
    projectPreview.style.backgroundRepeat = 'no-repeat';
    projectPreview.style.backgroundPosition = 'center';
    buttonArrow = '.battleship button .arrow';
  } else if (event.target.classList.contains('todo')) {
    // projectPreview.innerHTML =
    //   "<img class='todo-img' style='background-size: contain' src='../src/img/todo.jpeg'>";
    projectPreview.style.backgroundImage = "url('../src/img/todo.jpeg')";
    projectPreview.style.backgroundSize = 'contain';
    projectPreview.style.backgroundRepeat = 'no-repeat';
    projectPreview.style.backgroundPosition = 'center';
    buttonArrow = '.todo button .arrow';
  } else if (event.target.classList.contains('tictac')) {
    // projectPreview.innerHTML =
    //   "<img class='tictac-img' style='background-size: contain' src='../src/img/tic-tac-toe.jpeg'>";
    projectPreview.style.backgroundImage = "url('../src/img/tic-tac-toe.jpeg')";
    projectPreview.style.backgroundSize = 'contain';
    projectPreview.style.backgroundRepeat = 'no-repeat';
    projectPreview.style.backgroundPosition = 'center';
    buttonArrow = '.tictac button .arrow';
  } else {
    // projectPreview.innerHTML =
    //   "<img class='weather-img' style='background-size: contain' src='../src/img/weather.jpeg'>";
    projectPreview.style.backgroundImage = "url('../src/img/weather.jpeg')";
    projectPreview.style.backgroundSize = 'contain';
    projectPreview.style.backgroundRepeat = 'no-repeat';
    projectPreview.style.backgroundPosition = 'center';
    buttonArrow = '.weather button .arrow';
  }
  const animationTimeline = gsap.timeline();
  animationTimeline
    .fromTo(
      projectPreview,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
      },
    )
    .to(
      buttonArrow,
      {
        x: 1,
        width: '10%',
      },
      '<',
    );
}

function onMouseLeave(event) {
  let buttonArrow;
  if (event.target.classList.contains('battleship')) {
    buttonArrow = '.battleship button .arrow';
  } else if (event.target.classList.contains('todo')) {
    buttonArrow = '.todo button .arrow';
  } else if (event.target.classList.contains('tictac')) {
    buttonArrow = '.tictac button .arrow';
  } else {
    buttonArrow = '.weather button .arrow';
  }
  const animationTimeline = gsap.timeline();
  animationTimeline
    .fromTo(
      projectPreview,
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: 20,
      },
    )
    .to(
      buttonArrow,
      {
        x: -20,
        width: '0%',
      },
      '<',
    );
}

projects.forEach((project) => {
  project.addEventListener('mouseenter', onMouseEnter);
  project.addEventListener('mouseleave', onMouseLeave);
});
