
    function changebutton(backgroundColor, buttonColor) {
      document.body.style.backgroundColor = backgroundColor;

  
      document.getElementById('redB').style.backgroundColor = 'red';
      document.getElementById('blueB').style.backgroundColor = 'blue';
      document.getElementById('greenB').style.backgroundColor = 'green';

      
      event.target.style.backgroundColor = buttonColor;
    }

    function resetbutton() {
      document.body.style.backgroundColor = '';
      document.getElementById('redB').style.backgroundColor = 'white';
      document.getElementById('blueB').style.backgroundColor = 'white';
      document.getElementById('greenB').style.backgroundColor = 'white';
    }
  