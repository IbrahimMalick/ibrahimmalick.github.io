// Main JavaScript for Interactive AI Course

// Wait for the document to be fully loaded before initializing features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize interactive elements in the quiz
    initializeQuiz();
    // Set up smooth scrolling for navigation links
    setupNavigation();
});

// Function to initialize quiz functionality by hiding answers and creating toggle buttons
function initializeQuiz() {
    // Select all elements that contain quiz questions (assumed to have class "quiz-question")
    const questions = document.querySelectorAll('.quiz-question');
    
    questions.forEach(question => {
        // Within each question, find the element with the class "answer" containing the answer content
        const answer = question.querySelector('.answer');
        
        // Only proceed if an answer element exists
        if (answer) {
            // Initially hide the answer
            answer.style.display = 'none';
            
            // Create a button element to toggle visibility of the answer
            const button = document.createElement('button');
            button.textContent = 'Show Answer';
            button.className = 'button';  // Add any additional styling via the "button" class if desired
            button.style.marginTop = '1rem';
            
            // Add a click event listener to the button to toggle the answer's visibility
            button.addEventListener('click', function() {
                if (answer.style.display === 'none') {
                    answer.style.display = 'block';
                    button.textContent = 'Hide Answer';
                } else {
                    answer.style.display = 'none';
                    button.textContent = 'Show Answer';
                }
            });
            
            // Insert the toggle button before the answer element in the DOM
            question.insertBefore(button, answer);
        }
    });
}

// Function to set up smooth scrolling for all navigation links within your site
function setupNavigation() {
    // Select all anchor links within the navigation area
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target section's id from the href attribute
            const targetId = this.getAttribute('href');
            
            // Only apply smooth scrolling for in-page anchors (e.g., "#about", "#courses")
            if (targetId.startsWith('#')) {
                e.preventDefault();  // Prevent default anchor behavior
                
                // Find the target section element in the document
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Scroll smoothly to the target section with an offset (e.g., for a fixed header)
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // Adjust offset if you have a fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

