const { BrowserRouter, Route, Switch, HashRouter } = ReactRouterDOM;
const { useState, useEffect, useRef } = React;

function Home() {
  return /*#__PURE__*/(
    React.createElement("div", {
      id: "home",
      style: {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center" } }, /*#__PURE__*/


    React.createElement("img", {
      width: "40%",
      src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/picture.png",
      alt: "ProfilePic",
      style: { padding: "20px" } }), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", {
      style: {
        textAlign: "center",
        marginTop: "100px",
        fontSize: "4vw",
        fontWeight: "normal" } }, "I'm Kevin, an aspiring"), /*#__PURE__*/





    React.createElement("h1", { style: { textAlign: "center", fontSize: "4vw" } }, /*#__PURE__*/
    React.createElement("span", { style: { color: "#C73659" } }, "<"), " Web Developer", " ", /*#__PURE__*/
    React.createElement("span", { style: { color: "#C73659" } }, " \u2044 >"), ".")), /*#__PURE__*/



    React.createElement("div", { style: {
        position: 'absolute',
        bottom: '20px',
        right: '100px',
        border: '2px solid white' } }, /*#__PURE__*/

    React.createElement("a", {
      href: "#contact",
      style: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#750E21',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        textAlign: 'center',
        fontWeight: 'bold',
        width: '150px',
        transition: 'background-color 0.3s ease' },

      onMouseEnter: e => e.target.style.backgroundColor = '#5b0e18',
      onMouseLeave: e => e.target.style.backgroundColor = '#750E21' }, "Contact Me"))));







}

function Projects() {
  return /*#__PURE__*/(
    React.createElement("div", {
      id: "projects",
      style: {
        height: "100vh",
        paddingTop: "6%" } }, /*#__PURE__*/


    React.createElement("h1", { style: { textAlign: "center", borderBottom: '5px solid white', borderTop: '5px solid white' } }, "My Projects"), /*#__PURE__*/
    React.createElement("div", { style: { display: "flex", justifyContent: "center" } }, /*#__PURE__*/
    React.createElement("table", { style: { width: "80%" } }, /*#__PURE__*/
    React.createElement("thead", null, /*#__PURE__*/
    React.createElement("tr", { style: { height: "100px" } }, /*#__PURE__*/
    React.createElement("th", { style: { fontSize: "20px" } }, "Simple Games ", /*#__PURE__*/React.createElement("p", { style: { fontSize: '10px' } }, "(download on phone or Bluestacks to play)")), /*#__PURE__*/

    React.createElement("th", { style: { fontSize: "20px" } }, "Personal Projects ", /*#__PURE__*/React.createElement("p", { style: { fontSize: '10px' } }, "(Simple projects I made)")), /*#__PURE__*/
    React.createElement("th", { style: { fontSize: "20px" } }, "Websites ", /*#__PURE__*/React.createElement("p", { style: { fontSize: '10px' } }, "(Simple websites)")))), /*#__PURE__*/


    React.createElement("tbody", null, /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", { style: { backgroundColor: "#D8B6A4", width: "35%" } }, /*#__PURE__*/
    React.createElement("div", { style: { display: "flex", alignItems: "center" } }, /*#__PURE__*/
    React.createElement("img", {
      width: "80px",
      src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/homeExercise.png",
      style: { padding: "5px" } }), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://drive.google.com/file/d/16nYqMBk6prlxGYVTmSWt4yXCvckyXuTJ/view?usp=sharing" }, "Home Exercise"), /*#__PURE__*/



    React.createElement("p", { style: { color: "black" } }, "A simple Home exercise application.")))), /*#__PURE__*/





    React.createElement("td", { style: { backgroundColor: "#D8B6A4", width: "35%" } }, /*#__PURE__*/
    React.createElement("div", { style: { display: "flex", alignItems: "center" } }, /*#__PURE__*/
    React.createElement("img", {
      width: "80px",
      src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/quotegenerator.png",
      style: { padding: "5px" } }), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://codepen.io/Kevin-Tom-the-builder/pen/oNVBmYm" }, "Random Quote Machine"), /*#__PURE__*/



    React.createElement("p", { style: { color: "black" } }, "A random quote generator.")))), /*#__PURE__*/





    React.createElement("td", { style: { backgroundColor: "#D8B6A4" } }, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://sites.google.com/view/bet-7k-com-ganhe-bnus-de-r30/home" }, "Website 1"))), /*#__PURE__*/






    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", { style: { backgroundColor: "#D8B6A4", width: "35%" } }, /*#__PURE__*/
    React.createElement("div", { style: { display: "flex", alignItems: "center" } }, /*#__PURE__*/
    React.createElement("img", {
      width: "80px",
      src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/kinamReaction.png",
      style: { padding: "5px" } }), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://drive.google.com/file/d/1WHEslnMhDA6mm5Ap8wupdxOFKk52vNZ7/view?usp=sharing" }, "Kinam Reaction"), /*#__PURE__*/



    React.createElement("p", { style: { color: "black" } }, "A simple reaction game.")))), /*#__PURE__*/






    React.createElement("td", { style: { backgroundColor: "#D8B6A4", width: "35%" } }, /*#__PURE__*/
    React.createElement("div", { style: { display: "flex", alignItems: "center" } }, /*#__PURE__*/
    React.createElement("img", {
      width: "70px",
      src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/calculator.png",
      style: { padding: "5px" } }), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://codepen.io/Kevin-Tom-the-builder/pen/WNmjZrb" }, "Simple Calculator"), /*#__PURE__*/



    React.createElement("p", { style: { color: "black" } }, "A simple calculator.")))), /*#__PURE__*/





    React.createElement("td", { style: { backgroundColor: "#D8B6A4" } }, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://sites.google.com/view/hermespg-com-1/home" }, "Website 2"))), /*#__PURE__*/





    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", { style: { backgroundColor: "#D8B6A4", width: "35%" } }, /*#__PURE__*/
    React.createElement("div", { style: { display: "flex", alignItems: "center" } }, /*#__PURE__*/
    React.createElement("img", {
      width: "80px",
      src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/magic8ball.png",
      style: { padding: "5px" } }), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://drive.google.com/file/d/1e-EDwy6X-IJ7w5CWiStjuYmgLfBrvhez/view?usp=sharing" }, "Magic 8 Ball"), /*#__PURE__*/



    React.createElement("p", { style: { color: "black" } }, "A magic 8 ball, ask everything.")))), /*#__PURE__*/






    React.createElement("td", { style: { backgroundColor: "#D8B6A4", width: "35%" } }, /*#__PURE__*/
    React.createElement("div", { style: { display: "flex", alignItems: "center" } }, /*#__PURE__*/
    React.createElement("img", {
      width: "80px",
      src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/markdown.png",
      style: { padding: "5px" } }), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://codepen.io/Kevin-Tom-the-builder/pen/bGZqWyW" }, "Simple Markdown"), /*#__PURE__*/



    React.createElement("p", { style: { color: "black" } }, "A Markdown app.")))), /*#__PURE__*/





    React.createElement("td", { style: { backgroundColor: "#D8B6A4" } }, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://sites.google.com/view/casino8com-ganhebnusder30/home" }, "Website 3"))), /*#__PURE__*/





    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", { style: { backgroundColor: "#D8B6A4", width: "35%" } }, /*#__PURE__*/
    React.createElement("div", { style: { display: "flex", alignItems: "center" } }, /*#__PURE__*/
    React.createElement("img", {
      width: "80px",
      src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/tabbedDodge.png",
      style: { padding: "5px" } }), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://drive.google.com/file/d/1OD4_1DrgCXs9lzbZwFmxrRfh4jv7jfi7/view?usp=sharing" }, "Tabbed Dodge"), /*#__PURE__*/



    React.createElement("p", { style: { color: "black" } }, "A simple dodging game with a few features.")))), /*#__PURE__*/






    React.createElement("td", { style: { backgroundColor: "#D8B6A4", width: "35%" } }, /*#__PURE__*/
    React.createElement("div", { style: { display: "flex", alignItems: "center" } }, /*#__PURE__*/
    React.createElement("img", {
      width: "80px",
      src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/drumMachine.png",
      style: { padding: "5px" } }), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://codepen.io/Kevin-Tom-the-builder/pen/ExMWMGx" }, "Drum Machine"), /*#__PURE__*/



    React.createElement("p", { style: { color: "black" } }, "A simple Drum machine.")))), /*#__PURE__*/





    React.createElement("td", { style: { backgroundColor: "#D8B6A4" } }, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://sites.google.com/view/nn55com-1?usp=sharing" }, "Website 4"))), /*#__PURE__*/





    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", { style: { backgroundColor: "#D8B6A4" } }), /*#__PURE__*/



    React.createElement("td", { style: { backgroundColor: "#D8B6A4" } }), /*#__PURE__*/


    React.createElement("td", { style: { backgroundColor: "#D8B6A4", height: '85px' } }, /*#__PURE__*/
    React.createElement("a", {
      style: { marginLeft: "20px", fontSize: "20px" },
      href: "https://sites.google.com/view/33fun-com-1?usp=sharing" }, "Website 5"))))))));










}

function About() {
  const [reactProgress, setReactProgress] = useState(0);
  const [materialProgress, setmaterialProgress] = useState(0);
  const [javaProgress, setjavaProgress] = useState(0);
  const [htmlProgress, sethtmlProgress] = useState(0);
  const [cssProgress, setcssProgress] = useState(0);
  const [javaScriptProgress, setjavaScriptProgress] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (progressBarRef.current) {
        const { top, bottom } = progressBarRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (top >= 0 && bottom <= windowHeight) {
          setReactProgress(60);
          setmaterialProgress(70);
          setjavaProgress(60);
          sethtmlProgress(90);
          setcssProgress(90);
          setjavaScriptProgress(90);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const updateProgressBar = e => {
    setProgress(e.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "about", style: { height: '100vh', paddingTop: "70px" } }, /*#__PURE__*/
    React.createElement("h1", { style: { textAlign: "center", borderBottom: '5px solid white', borderTop: '5px solid white' } }, "About Me"), /*#__PURE__*/
    React.createElement("div", { style: { display: 'flex', alignItems: "center",
        justifyContent: "center" } }, /*#__PURE__*/
    React.createElement("div", { style: { textAlign: 'center', width: "50%", paddingTop: '150px' } }, /*#__PURE__*/
    React.createElement("p", { style: { fontSize: '20px', width: '80%' } }, "Possesses knowledge of HTML, CSS, JavaScript, ReactJS, Material UI, and Java with the ability to quickly learn new technologies. Seeking a position in web development while also exploring opportunities in other related roles to broaden my skillset and knowledge. Open to expanding my expertise beyond web development."), /*#__PURE__*/







    React.createElement("a", {
      href: "https://drive.google.com/file/d/1ZQB4vh4WaSP_NIL0bfjQSmKSYDmOoCxl/view?usp=sharing",
      style: {
        marginRight: '200px',
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#750E21',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        textAlign: 'center',
        fontWeight: 'bold',
        width: '75%',
        transition: 'background-color 0.3s ease' },

      onMouseEnter: e => e.target.style.backgroundColor = '#5b0e18',
      onMouseLeave: e => e.target.style.backgroundColor = '#750E21' }, "View my CV")), /*#__PURE__*/






    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h2", { style: { textAlign: "center" } }, "Skills"), /*#__PURE__*/
    React.createElement("div", {
      style: {
        width: "500px",
        margin: "auto",
        marginTop: "10px" } }, /*#__PURE__*/


    React.createElement("h3", null, "ReactJS - 60%"), /*#__PURE__*/
    React.createElement("div", {
      className: "progress-bar",
      style: {
        width: "100%",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        overflow: "hidden" },

      ref: progressBarRef }, /*#__PURE__*/

    React.createElement("div", {
      className: "progress-bar-fill",
      style: {
        height: "20px",
        backgroundColor: "#750E21",
        transition: "width 1.0s ease-in-out",
        width: `${reactProgress}%` } })), /*#__PURE__*/




    React.createElement("h3", null, "Material UI - 70%"), /*#__PURE__*/
    React.createElement("div", {
      className: "progress-bar",
      style: {
        width: "100%",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        overflow: "hidden" },

      ref: progressBarRef }, /*#__PURE__*/

    React.createElement("div", {
      className: "progress-bar-fill",
      style: {
        height: "20px",
        backgroundColor: "#750E21",
        transition: "width 1.0s ease-in-out",
        width: `${materialProgress}%` } })), /*#__PURE__*/




    React.createElement("h3", null, "Java - 60%"), /*#__PURE__*/
    React.createElement("div", {
      className: "progress-bar",
      style: {
        width: "100%",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        overflow: "hidden" },

      ref: progressBarRef }, /*#__PURE__*/

    React.createElement("div", {
      className: "progress-bar-fill",
      style: {
        height: "20px",
        backgroundColor: "#750E21",
        transition: "width 1.0s ease-in-out",
        width: `${javaProgress}%` } })), /*#__PURE__*/




    React.createElement("h3", null, "HTML - 90%"), /*#__PURE__*/
    React.createElement("div", {
      className: "progress-bar",
      style: {
        width: "100%",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        overflow: "hidden" },

      ref: progressBarRef }, /*#__PURE__*/

    React.createElement("div", {
      className: "progress-bar-fill",
      style: {
        height: "20px",
        backgroundColor: "#750E21",
        transition: "width 1.0s ease-in-out",
        width: `${htmlProgress}%` } })), /*#__PURE__*/




    React.createElement("h3", null, "CSS - 90%"), /*#__PURE__*/
    React.createElement("div", {
      className: "progress-bar",
      style: {
        width: "100%",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        overflow: "hidden" },

      ref: progressBarRef }, /*#__PURE__*/

    React.createElement("div", {
      className: "progress-bar-fill",
      style: {
        height: "20px",
        backgroundColor: "#750E21",
        transition: "width 1.0s ease-in-out",
        width: `${cssProgress}%` } })), /*#__PURE__*/




    React.createElement("h3", null, "JavaScript - 90%"), /*#__PURE__*/
    React.createElement("div", {
      className: "progress-bar",
      style: {
        width: "100%",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        overflow: "hidden" },

      ref: progressBarRef }, /*#__PURE__*/

    React.createElement("div", {
      className: "progress-bar-fill",
      style: {
        height: "20px",
        backgroundColor: "#750E21",
        transition: "width 1.0s ease-in-out",
        width: `${javaScriptProgress}%` } })))))));









}

function Contact() {
  return /*#__PURE__*/(
    React.createElement("div", { id: "contact", style: { height: '100vh', paddingTop: "80px" } }, /*#__PURE__*/
    React.createElement("h1", { style: { textAlign: "center", borderBottom: '5px solid white', borderTop: '5px solid white' } }, "Contact Me"), /*#__PURE__*/

    React.createElement("div", { style: { display: 'flex', alignItems: "center",
        justifyContent: "center", paddingTop: '100px' } }, /*#__PURE__*/

    React.createElement("div", { style: { width: '50%', textAlign: "center" } }, /*#__PURE__*/
    React.createElement("img", { style: { width: '100px' }, src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/at.png" }), /*#__PURE__*/
    React.createElement("p", { style: { fontSize: '30px', fontWeight: '900' } }, "EMAIL"), /*#__PURE__*/
    React.createElement("p", null, "kevintom111294@gmail.com")), /*#__PURE__*/


    React.createElement("div", { style: { width: '50%', textAlign: "center" } }, /*#__PURE__*/
    React.createElement("img", { style: { width: '100px' }, src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/call.png" }), /*#__PURE__*/
    React.createElement("p", { style: { fontSize: '30px', fontWeight: '900' } }, "CALL / TEXT"), /*#__PURE__*/
    React.createElement("p", null, "+63 945 275 6958"))), /*#__PURE__*/



    React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } }, /*#__PURE__*/
    React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%', paddingTop: '50px' } }, /*#__PURE__*/

    React.createElement("div", { class: "image-container" }, /*#__PURE__*/
    React.createElement("a", { href: "https://codepen.io/Kevin-Tom-the-builder" }, /*#__PURE__*/
    React.createElement("img", { style: { width: '50px' }, src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/codepen.png" }), /*#__PURE__*/
    React.createElement("span", { class: "text", style: { textAlign: 'center' } }, "Visit My Codepen Profile"))), /*#__PURE__*/



    React.createElement("div", { class: "image-container" }, /*#__PURE__*/
    React.createElement("a", { href: "https://www.freecodecamp.org/Kiban09" }, /*#__PURE__*/
    React.createElement("img", { src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/freecodecamp.png", alt: "FreeCodeCamp Logo" }), /*#__PURE__*/
    React.createElement("span", { class: "text", style: { textAlign: 'center' } }, "Visit My FreeCodeCamp Profile"))), /*#__PURE__*/


    React.createElement("div", { class: "image-container" }, /*#__PURE__*/
    React.createElement("a", { href: "https://www.facebook.com/kevin.tom.16" }, /*#__PURE__*/
    React.createElement("img", { style: { width: '50px' }, src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/facebook.png" }), /*#__PURE__*/
    React.createElement("span", { class: "text", style: { textAlign: 'center' } }, "Visit My Facebook Profile"))), /*#__PURE__*/


    React.createElement("div", { class: "image-container" }, /*#__PURE__*/
    React.createElement("a", { href: "https://www.linkedin.com/in/kevin-tom-42ba60261/" }, /*#__PURE__*/
    React.createElement("img", { style: { width: '50px' }, src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/linkedin.png" }), /*#__PURE__*/
    React.createElement("span", { class: "text", style: { textAlign: 'center' } }, "Visit My LinkedIn Profile"))), /*#__PURE__*/


    React.createElement("div", { class: "image-container" }, /*#__PURE__*/
    React.createElement("img", { style: { width: '50px' }, src: "https://raw.githubusercontent.com/kiban09/My_Portfolio/main/telegram.png" }), /*#__PURE__*/
    React.createElement("span", { class: "text", style: { textAlign: 'center' } }, "Contact me on Telegram"))))));






}

function Navbar() {
  return /*#__PURE__*/(
    React.createElement("div", {
      style: {
        backgroundColor: "#750E21",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1000 } }, /*#__PURE__*/


    React.createElement("h1", { style: { marginLeft: "10px" } }, "My Portfolio"), /*#__PURE__*/
    React.createElement("nav", null, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#home" }, "Home")), /*#__PURE__*/

    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "My Projects")), /*#__PURE__*/

    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about" }, "About Me")), /*#__PURE__*/

    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact" }, "Contact Me"))))));





}

function App() {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement(Navbar, null), /*#__PURE__*/
    React.createElement(Home, null), /*#__PURE__*/
    React.createElement(Projects, null), /*#__PURE__*/
    React.createElement(About, null), /*#__PURE__*/
    React.createElement(Contact, null)));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));