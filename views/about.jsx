
const { Fragment } = React

export function About() {
    return <section className="main-about" >



        <article className="about-app">

            <h3 > We are proud to present you - AppSUS </h3>
            <p> An implementation to google's famous apps - Keep and Gmail. <br /> This project was built in joint work on Github collaboration as part of Coding Academy's Fullstack bootcamp, using ReactJS within 96 hours. </p>
        </article>




        <div className="imgs">
            <div className="gray-circle">

                <img src="./img/logo-empty-gray.png" alt="circle-gray" />
            </div>
            <div className="yellow-circle">

                <img src="./img/logo-empty-yellow.png" alt="circle-yellow" />
            </div>
        </div>

        <div className="team">
            <p>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo dolorum illo aliquam eum expedita provident voluptatum quia et reprehenderit.
            </p>
            <p>
                At this project I was responsible for creating Appsus-keep - an implementation to Google Keep, and iBooks which allow you to build your own book-shop.
            </p>
        </div>
        <small>
            coffeeRights Lihi & Aviad
        </small>
    </section>
}
