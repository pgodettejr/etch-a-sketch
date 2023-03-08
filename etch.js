const container = document.getElementById("container");
const button = document.getElementById("btn");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.onmousemove = e => {
      e.target.style.background = 'black';
    };
    container.appendChild(cell).className = "grid-item";
  };  
};

button.addEventListener('click', function() {
  let newGrid = Number(prompt("Enter the number of squares per side for the new grid: "));
  
  if(newGrid >= 1 && newGrid <= 100) {
    container.innerHTML = "";
    makeRows(newGrid, newGrid);
  } else {
    alert("Please enter a number between 1 and 100");
  }

});

makeRows(16, 16);

// Learn CSS grid?

// The Mouse Trailer with Smart Features (Hyperplexed)?

/* Need either a separate function, possibly with a for loop, to create the hover
effect or code within the existing makeRows function to make it work (might need to 
go under the for loop since the cell divs only get created under there - not global 
scope). 

Options are:  

mousedown (gives user more control over drawn trail, isn't a true "drag" effect)
container.onmousemove = e => {}

container.onmousemove = makeRows => {} turns the furthest outer cells black but then 
the entire grid goes black if the mouse travels any farther inward. Simply changing 
mousedown to onmousemove on current addEventListener doesn't do anything.

Not sure .forEach works because the grid isn't split up into individual buttons or 
divs UNLESS it's under the for loop for the makeRows function? (e.g: cells.forEach(cell) 
if const cells = document.querySelectorAll('cell')). There is no "hover" method for 
event listeners.

mouseenter + mouseleave addEventListener don't work (entire grid changes color)
ondrag doesn't work either (only hand icon for mouse shows up)

mousemove + mouseout gives off an interesting effect. Occasionally entire grid flashes 
black except for the area you moused over earlier which remains white. No cell stays 
black however.

Use this as a foundation and modify it to work with the grid that has no buttons?

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function(e) {
  e.target.style.background = 'blue';
}); 

Answer was this:

cell.onmousemove = e => {
  e.target.style.background = 'black';
};

Placed under makeRows function

Then TOP tells me max width of grid should be 960px regardless of grid size AFTER the fact :) */


/* Old code

cell.innerText = (c + 1); - was under makeRows function. Numbered all cells.

This kinda worked but didn't drag throughout the cells via long press. 
Had to click the cells one by one. Also turned the entire grid black if you 
mouse click fast enough.

container.addEventListener ('mousedown', makeRows => {
    makeRows.target.style.background = 'black';
});

Old button code that did create a button but wouldn't reset grid and put all boxes 
under one long column

const btn = document.querySelector('#btn');

btn.addEventListener('click', function(input) {
  const gridBox = makeRows();  
  let popup = Number(prompt("Enter the number of squares you'd like", ""));

  if(input.value < 1) {
    input.value = 1;
    return gridBox
  } else if(input.value > 100) {
    input.value = 100;
    return gridBox
  } else {
    return gridBox
  }
}); */

/* Really bad code that I would've needed 256 more divs to work. Also it crashes.

Need one giant grid square split into 4 squares evenly (2 x 2; 4 divs)
const giantBox = document.createElement('div');
giantBox.style.border = "5px solid black";

    const hugeBox = document.createElement('div');
    hugeBox.classList.add('huge-box-1');

// Then those squares split into 4 squares evenly (4 x 4; 16 divs)
        const bigBox = document.createElement('div');
        bigBox.classList.add('big-box-1');

// Then those squares split the same way again (8 x 8; 64 divs)
            const midBox = document.createElement('div');
            midBox.classList.add('mid-box-1');

            const midBox2 = document.createElement('div');
            midBox2.classList.add('mid-box-2');

            const midBox3 = document.createElement('div');
            midBox3.classList.add('mid-box-3');

            const midBox4 = document.createElement('div');
            midBox4.classList.add('mid-box-4');

        const bigBox2 = document.createElement('div');
        bigBox2.classList.add('big-box-2');

            const midBox5 = document.createElement('div');
            midBox5.classList.add('mid-box-1');

            const midBox6 = document.createElement('div');
            midBox6.classList.add('mid-box-2');

            const midBox7 = document.createElement('div');
            midBox7.classList.add('mid-box-3');

            const midBox8 = document.createElement('div');
            midBox8.classList.add('mid-box-4');

        const bigBox3 = document.createElement('div');
        bigBox3.classList.add('big-box-3');

            const midBox9 = document.createElement('div');
            midBox9.classList.add('mid-box-9');

            const midBox10 = document.createElement('div');
            midBox10.classList.add('mid-box-10');

            const midBox11 = document.createElement('div');
            midBox11.classList.add('mid-box-11');

            const midBox12 = document.createElement('div');
            midBox12.classList.add('mid-box-12');

        const bigBox4 = document.createElement('div');
        bigBox4.classList.add('big-box-4');

            const midBox13 = document.createElement('div');
            midBox13.classList.add('mid-box-13');

            const midBox14 = document.createElement('div');
            midBox14.classList.add('mid-box-14');

            const midBox15 = document.createElement('div');
            midBox15.classList.add('mid-box-15');

            const midBox16 = document.createElement('div');
            midBox16.classList.add('mid-box-16');

    const hugeBox2 = document.createElement('div');
    hugeBox2.classList.add('huge-box-2');

        const bigBox5 = document.createElement('div');
        bigBox5.classList.add('big-box-5');

            const midBox17 = document.createElement('div');
            midBox17.classList.add('mid-box-17');

            const midBox18 = document.createElement('div');
            midBox18.classList.add('mid-box-18');

            const midBox19 = document.createElement('div');
            midBox19.classList.add('mid-box-19');

            const midBox20 = document.createElement('div');
            midBox20.classList.add('mid-box-20');

        const bigBox6 = document.createElement('div');
        bigBox6.classList.add('big-box-6');

            const midBox21 = document.createElement('div');
            midBox21.classList.add('mid-box-21');

            const midBox22 = document.createElement('div');
            midBox22.classList.add('mid-box-22');

            const midBox23 = document.createElement('div');
            midBox23.classList.add('mid-box-23');

            const midBox24 = document.createElement('div');
            midBox24.classList.add('mid-box-24');

        const bigBox7 = document.createElement('div');
        bigBox7.classList.add('big-box-7');

            const midBox25 = document.createElement('div');
            midBox25.classList.add('mid-box-25');

            const midBox26 = document.createElement('div');
            midBox26.classList.add('mid-box-26');

            const midBox27 = document.createElement('div');
            midBox27.classList.add('mid-box-27');

            const midBox28 = document.createElement('div');
            midBox28.classList.add('mid-box-28');

        const bigBox8 = document.createElement('div');
        bigBox8.classList.add('big-box-8');

            const midBox29 = document.createElement('div');
            midBox29.classList.add('mid-box-29');

            const midBox30 = document.createElement('div');
            midBox30.classList.add('mid-box-30');

            const midBox31 = document.createElement('div');
            midBox31.classList.add('mid-box-31');

            const midBox32 = document.createElement('div');
            midBox32.classList.add('mid-box-32');

    const hugeBox3 = document.createElement('div');
    hugeBox3.classList.add('huge-box-3');

        const bigBox9 = document.createElement('div');
        bigBox9.classList.add('big-box-9');

        const bigBox10 = document.createElement('div');
        bigBox10.classList.add('big-box-10');

        const bigBox11 = document.createElement('div');
        bigBox11.classList.add('big-box-11');

        const bigBox12 = document.createElement('div');
        bigBox12.classList.add('big-box-12');

    const hugeBox4 = document.createElement('div');
    hugeBox4.classList.add('huge-box-4');

        const bigBox13 = document.createElement('div');
        bigBox13.classList.add('big-box-13');

        const bigBox14 = document.createElement('div');
        bigBox14.classList.add('big-box-14');

        const bigBox15 = document.createElement('div');
        bigBox15.classList.add('big-box-15');

        const bigBox16 = document.createElement('div');
        bigBox16.classList.add('big-box-16');



// Then finally those squares split the same (16 x 16)

// hugeBox.appendChild(bigBox);
// hugeBox.appendChild(bigBox2);
// hugeBox.appendChild(bigBox3);
// hugeBox.appendChild(bigBox4);

// hugeBox2.appendChild(bigBox5);
// hugeBox2.appendChild(bigBox6);
// hugeBox2.appendChild(bigBox7);
// hugeBox2.appendChild(bigBox8);

// hugeBox3.appendChild(bigBox9);
// hugeBox3.appendChild(bigBox10);
// hugeBox3.appendChild(bigBox11);
// hugeBox3.appendChild(bigBox12);

// hugeBox4.appendChild(bigBox13);
// hugeBox4.appendChild(bigBox14);
// hugeBox4.appendChild(bigBox15);
// hugeBox4.appendChild(bigBox16);

// giantBox.appendChild(hugeBox);
// giantBox.appendChild(hugeBox2);
// giantBox.appendChild(hugeBox3);
// giantBox.appendChild(hugeBox4);

container.appendChild(giantBox); */