// startConfetti();
const countdown = document.querySelector('.countdown');
const musicPlayer = document.getElementById('music-player');
const countdownMsg = document.getElementById('countdown-msg');
confetti.start();
// Set Launch Date (ms)
const launchDate = new Date('Jan 11, 2020 00:00:00').getTime();

const confettiElement = document.getElementById('confetti-canvas');
var confettiSettings = { target: 'my-canvas' };
// var confetti = new ConfettiGenerator(confettiSettings);
// confetti.render();



// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div>${days}<span>Days</span></div> 
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.innerHTML = 'Retired!!';
    countdownMsg.classList.add('pulse');
    // confettiElement.style.display = 'inline';
  }
}, 1000);


