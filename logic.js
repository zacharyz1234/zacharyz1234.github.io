const portfolioButton = document.querySelector('#portfolioButton');
const aboutMeButton = document.querySelector('#aboutMeButton');
const wrapper = document.querySelector('#content-wrapper');
const portfolioContent = document.querySelector('#portfolio');
const aboutMeContent = document.querySelector('#aboutMe');

let currentSection = null;

function showSection(sectionToShow)
{
    const isOpen = sectionToShow === currentSection;

    if(isOpen)
    {
        wrapper.classList.remove('expanded');
        currentSection = null;
    }
    else if(currentSection === null)
    {
        sectionToShow.classList.remove('hidden');
        wrapper.classList.add('expanded');
        currentSection = sectionToShow;
    }
    else
    {
        currentSection.classList.add('hidden');
        sectionToShow.classList.remove('hidden');
        currentSection = sectionToShow;
    }
}

wrapper.addEventListener('transitionend', function()
{
    if(!wrapper.classList.contains('expanded'))
    {
        portfolioContent.classList.add('hidden');
        aboutMeContent.classList.add('hidden');
    }
});

portfolioButton.addEventListener('click', function()
{
    showSection(portfolioContent, portfolioButton);
});

aboutMeButton.addEventListener('click', function()
{
    showSection(aboutMeContent, aboutMeButton);
})