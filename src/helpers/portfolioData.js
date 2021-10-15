import twoSide from '../images/projectsIcon/2SideMarket.png'
import hackamon from '../images/projectsIcon/hackamon.png'
import oldPort from '../images/projectsIcon/oldPort.png'


const portfolioData = [
    {
        image: twoSide,
        link: 'https://themelioo.herokuapp.com/',
        title: 'Themelio',
        summary: 'An online platform for users to subscribe to health and wellness thought leaders who are looking to change the fitness landscape',
        technologies: 'Ruby | Ruby on Rails | PostgreSQL | CSS | HTML 5 | Heroku | Git | Stripe'
    },
    {
        image: hackamon,
        link: 'https://hackamons.netlify.app/',
        title: 'Hackamon',
        summary: 'An app to view digital versions of the original 151 pokemon cards',
        technologies: 'Javascript | HTML 5 | CSS'
    },
    {
        image: oldPort,
        link: 'https://armstrongal.netlify.app/',
        title: '1st Portfolio',
        summary: 'My first ever application!',
        technologies: 'HTML | CSS'
    },
]

export default portfolioData;