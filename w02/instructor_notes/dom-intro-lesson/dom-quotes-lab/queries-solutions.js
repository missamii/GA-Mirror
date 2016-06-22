

// Select the <body>
document.querySelector('body');

// Select the <header>
document.querySelector('header');

// Select all of the elements with class "quote"
document.querySelectorAll('.quote');
document.getElementsByClassName('quote');

// Select all of the elements with class "subject"
document.querySelectorAll('.subject');
document.getElementsByClassName('subject');

// Select all of the navigation links
document.querySelector('ul');

// Select all the quotes in the "life" section.
document.querySelectorAll('.life > .quote')[0].children;
document.querySelectorAll('.life > .quote')[1].children;

// Using hierarchical relationship selectors, select the <p> element containing the second Mark Twain quote
document.querySelector('#mark-twain-second').children[0];

// Do the same to select the 'Quotes About Motivation' h2 tag
document.querySelector('.motivation h2');
document.querySelector('.motivation').children[0];

Bonus
// Using the console, add the author's last name, as a class, to one of the quotes.
document.querySelector('#mark-twain-second').children[0].classList.add('twain');
