// Main JavaScript for Interactive AI Course

document.addEventListener('DOMContentLoaded', function() {
    // Initialize interactive elements
    initializeQuiz();
    setupNavigation();
});

// Quiz functionality
function initializeQuiz() {
    const questions = document.querySelectorAll('.quiz-question');
    
    questions.forEach(question => {
        const answer = question.querySelector('.answer');
        
        // Initially hide answers
        if (answer) {
            answer.style.display = 'none';
            
            // Create show/hide button
            const button = document.createElement('button');
            button.textContent = 'Show Answer';
            button.className = 'button';
            button.style.marginTop = '1rem';
            
            button.addEventListener('click', function() {
                if (answer.style.display === 'none') {
                    answer.style.display = 'block';
                    button.textContent = 'Hide Answer';
                } else {
                    answer.style.display = 'none';
                    button.textContent = 'Show Answer';
                }
            });
            
            // Insert button before the answer
            question.insertBefore(button, answer);
        }
    });
}

// Smooth scrolling for navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target section
            const targetId = this.getAttribute('href');
            
            // Only apply smooth scrolling for page anchors
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // Offset for header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}
