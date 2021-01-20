let largeName = 'reagan bruce'
console.log('Name:', largeName.toUpperCase())
console.log('Career: Musician');
console.log('Description: Just a simple musician who tours, records and hits the drums. That is it!');

console.log('');

console.log('My Interests:')
console.log('* Reading about Socialism and Communism');
console.log('* Watching Star Trek: The Next Generation');
console.log('* Listening to Alex G and Spirit Of The Beehive');
console.log('* Playing music and touring with bands');

console.log('');

//There has to be a better way to write this, but it works!
function displayPosition(name, title, description) {
  console.log('My Previous Experience:');
  console.log(name);
  console.log(title);
  console.log(description);
  }
  displayPosition('* Trader Joes', '* Crew Member', '* Annoyed customers!');

/*
console.log('My Previous Experience:');
console.log('* Crew Member at Trader Joes');
console.log('* Team Member at Whole Foods');
console.log('* Toured with bands');
*/

console.log('');

console.log('My Skills:')
console.log('* Drumming');
console.log('* Reading');
console.log('* Cooking');
console.log('* Coding');

console.log('');

function displaySkills(skill, isCool){
  if (isCool) {
    console.log(`My Skillsets:`)
    console.log(`* BAM: ${skill}`)
  } else {
    console.log(skill)
  }
}
displaySkills('Drumming', true);
displaySkills('Reading', false);
displaySkills('Cooking', false);
displaySkills('Coding', false);




console.log('');
