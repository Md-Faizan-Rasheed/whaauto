// Get elements by class name
const q1 = document.getElementsByClassName('q1')[0];
const q2 = document.getElementsByClassName('q2')[0];
const q3 = document.getElementsByClassName('q3')[0];
const q4 = document.getElementsByClassName('q4')[0];
const q5 = document.getElementsByClassName('q5')[0];
const q6 = document.getElementsByClassName('q6')[0];
const q7 = document.getElementsByClassName('q7')[0];

// Log elements to verify
console.log(q1, q2);

// Get buttons by ID
const up = document.getElementById('up');
const down = document.getElementById('down');

// Log the "up" button
console.log(up);

// Store all elements in an array for easy iteration
const elements = [q1, q2, q3, q4, q5, q6, q7];
let currentIndex = 0; // Track which element is currently displayed
let count = 0;// Add event listener for the "down" button
down.addEventListener('click', () => {
    if (elements[currentIndex].classList.contains('q7')) {
        console.log("Reached the last element, action prevented.");
        return; // Stop further execution
    }
    // Hide the currently visible element
    console.log("count ", count++);
    elements[currentIndex].style.display = "none";

    console.log("first", elements[currentIndex]);
    // Update index to show the next element
    currentIndex = (currentIndex + 1) % elements.length;
    console.log("second", elements[currentIndex]);
    // Show the next element
    elements[currentIndex].style.display = "block";
});

// Add event listener for the "up" button
up.addEventListener('click', () => {
    if (elements[currentIndex].classList.contains('q1')) {
        console.log("Reached the first element, action prevented.");
        return; // Stop further execution
    }
    // Hide the currently visible element
    elements[currentIndex].style.display = "none";

    // Update index to show the previous element
    currentIndex = (currentIndex - 1 + elements.length) % elements.length;

    // Show the previous element
    elements[currentIndex].style.display = "block";
});

// Add event listener for the "Enter" key
document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        if (elements[currentIndex].classList.contains('q7')) {
            console.log("Reached the last element, action prevented.");
            return; // Stop further execution
        }
        // Hide the currently visible element
        elements[currentIndex].style.display = "none";

        // Update index to show the next element
        currentIndex = (currentIndex + 1) % elements.length;

        // Show the next element
        elements[currentIndex].style.display = "block";
    }
});

// // Add event listener for scrolling
// let lastScrollY = window.scrollY;
// window.addEventListener('scroll', () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY) {
//         // Scrolling down
//         if (elements[currentIndex].classList.contains('q7')) {
//             console.log("Reached the last element, action prevented.");
//             return; // Stop further execution
//         }
//         // Hide the currently visible element
//         elements[currentIndex].style.display = "none";

//         // Update index to show the next element
//         currentIndex = (currentIndex + 1) % elements.length;

//         // Show the next element
//         elements[currentIndex].style.display = "block";
//     } else if (currentScrollY < lastScrollY) {
//         // Scrolling up
//         if (elements[currentIndex].classList.contains('q1')) {
//             console.log("Reached the first element, action prevented.");
//             return; // Stop further execution
//         }
//         // Hide the currently visible element
//         elements[currentIndex].style.display = "none";

//         // Update index to show the previous element
//         currentIndex = (currentIndex - 1 + elements.length) % elements.length;

//         // Show the previous element
//         elements[currentIndex].style.display = "block";
//     }

//     lastScrollY = currentScrollY;
// });


