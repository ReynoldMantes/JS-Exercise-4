function greetMe(timeOfDay) {
  if (timeOfDay === 'morning') {
    console.log('Good morning!');
  } else if (timeOfDay === 'afternoon') {
    console.log('Good afternoon!');
  } else if (timeOfDay === 'evening') {
    console.log('Good evening!');
  } else {
    console.log('Good day!');
  }
}


greetMe('morning');
greetMe('afternoon');  
greetMe('evening');    
greetMe('meh');
