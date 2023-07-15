let countdown_container = document.getElementById('countdown-container');
let countdown_setter = document.getElementById('countdown-setter');
let cancel_countdown = document.getElementById('cancel_countdown')
let x;
countdown_container.style.display = 'none'


function setCountDown() {

  let countDown_name = document.getElementById('CountDown_name').value
  let date = document.getElementById('date').value
  let time = document.getElementById('time').value
  let dayDiv = document.getElementById('days')
  let hoursDiv = document.getElementById('hours')
  let minDiv = document.getElementById('min')
  let secondDiv = document.getElementById('seconds')
  if (countDown_name.length < 1) {
    swal('Error', 'Please Enter Countdown Name', 'error')
  } else if (date.length < 1) {
    swal('Error', 'Please Set Countdown Date', 'error')
  } else if (time.length < 1) {
    swal('Error', 'Please Set Coundown Time', 'error')
  } else {
    countdown_setter.style.display = 'none'
    countdown_container.style.display = 'flex'

    var countDownDate = new Date(`${date} ${time}`).getTime();
    let nameplate = document.getElementById('nameplate')
    nameplate.innerText = countDown_name + 'Countdown'

    x = setInterval(function () {


      var now = new Date().getTime();


      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);



      dayDiv.innerText = days + 'D'
      hoursDiv.innerText = hours + 'H'
      minDiv.innerText = minutes + 'M'
      secondDiv.innerText = seconds + 'S'

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "CountDown Finish";
        cancel_countdown.innerText = 'Set New Countdown'
      }
    }, 1000);


  }


}

function cancelCountdown() {

  clearInterval(x)
  countdown_setter.style.display = 'flex'
  countdown_container.style.display = 'none'
}