/* 
Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
*/

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (index = 0; index < fish.length - 1; index += 1) {
  if (fish[index] === 'Nemo') {
    break;
  }
  
  console.log(fish[index]);
}