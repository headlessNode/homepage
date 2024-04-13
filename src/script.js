import './styles.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const homePageAnimations = (() => {
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
  const projects = document.querySelectorAll('.projects .proj-deets .project');

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
      start: 'top 70%%',
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
      trigger: projectsContainer,
      start: 'top 50%',
      end: 'bottom 50%',
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
      projectPreview.style.backgroundImage = "url('../src/img/battleship.png')";
      projectPreview.style.backgroundSize = 'contain';
      projectPreview.style.backgroundRepeat = 'no-repeat';
      projectPreview.style.backgroundPosition = 'center';
      buttonArrow = '.battleship a .arrow';
    } else if (event.target.classList.contains('todo')) {
      projectPreview.style.backgroundImage = "url('../src/img/todo.png')";
      projectPreview.style.backgroundSize = 'contain';
      projectPreview.style.backgroundRepeat = 'no-repeat';
      projectPreview.style.backgroundPosition = 'center';
      buttonArrow = '.todo a .arrow';
    } else if (event.target.classList.contains('tictac')) {
      projectPreview.style.backgroundImage =
        "url('../src/img/tic-tac-toe.png')";
      projectPreview.style.backgroundSize = 'contain';
      projectPreview.style.backgroundRepeat = 'no-repeat';
      projectPreview.style.backgroundPosition = 'center';
      buttonArrow = '.tictac a .arrow';
    } else {
      projectPreview.style.backgroundImage = "url('../src/img/weather.png')";
      projectPreview.style.backgroundSize = 'contain';
      projectPreview.style.backgroundRepeat = 'no-repeat';
      projectPreview.style.backgroundPosition = 'center';
      buttonArrow = '.weather a .arrow';
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
      buttonArrow = '.battleship a .arrow';
    } else if (event.target.classList.contains('todo')) {
      buttonArrow = '.todo a .arrow';
    } else if (event.target.classList.contains('tictac')) {
      buttonArrow = '.tictac a .arrow';
    } else {
      buttonArrow = '.weather a .arrow';
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
})();
