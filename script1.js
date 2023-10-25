// TODO: STEP 0 - Initialize Variables

// Define an array of menu categories (e.g., "Lunch", "Dinner", "Sushi").
const menuCategories = [...];

// TODO: STEP 1 - Create Function getRandomCategoryShortName
function getRandomCategoryShortName() {
  // Implement this function to select a random category short name.
  // You can use the Math.random() function to generate a random index into the menuCategories array.
  // Return the randomly selected short name.
}

// TODO: STEP 2 - Update onClick Function
document.querySelector("#specials").onclick = function () {
  // Modify this function to load a random category using getRandomCategoryShortName
  const randomCategoryShortName = getRandomCategoryShortName();
  $dc.loadMenuItems(randomCategoryShortName);
};

// TODO: STEP 3 - Update Home Page Content
function loadMenuCategories() {
  // Implement this function to load and display menu categories on the home page.
  // Use JavaScript to create the necessary HTML elements.
}

// TODO: STEP 4 - Test the Solution

// Implement code to test if the desired functionality is working correctly.
// You can use Browser Sync or deploy to GitHub Pages for testing.

// Call the loadMenuCategories function to load the menu categories when the page loads.
loadMenuCategories();
