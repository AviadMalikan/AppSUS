
export function About() {
    return <section className="about">
        <h1>About Us</h1>
        <h3 className="subtitle"> We are proud to present you <img className="about-logo" src="./assets/img/app-logo/main-logo.png" alt="" /></h3>
        <p> An implementation to google's famous apps - Keep and Gmail. <br /> This project was built in joint work on Github collaboration as part of Coding Academy's Fullstack bootcamp, using ReactJS within 96 hours. </p>
        <img className="team-bg" src="./img/team-bg.png" alt="" />

        <div className="team">
            <article className="team-aviad">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo dolorum illo aliquam eum expedita provident voluptatum quia et reprehenderit.</article>
            <hr />
            <article className="team-lihi">I'm Lihi Ben Shimol, 24 years old from Tel-Aviv. <br />
                At this project I was responsible for creating Appsus-keep - an implementation to Google Keep, and iBooks which allow you to build your own book-shop.</article>
        </div>
        <p className="about-aviad"></p>
    </section>
}
