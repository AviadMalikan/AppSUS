
const { Fragment } = React

export function About() {
    return <section className="main-about" >



        <article className="about-app animate__animated animate__fadeInDown">

            <h3 > We are proud to present you - AppSUS </h3>
            <p> An implementation to google's famous apps - Keep and Gmail. <br /> This project was built in joint work on Github collaboration as part of Coding Academy's Fullstack bootcamp, using ReactJS within 96 hours. </p>
        </article>




        <div className="imgs">
            <div className="gray-circle ">

                <img className="animate__animated animate__backInRight" src="./img/logo-empty-gray.png" alt="circle-gray" />
            </div>
            <div className="yellow-circle ">

                <img className="animate__animated animate__backInLeft" src="./img/logo-empty-yellow.png" alt="circle-yellow" />
            </div>
        </div>

        <div className="team animate__animated animate__fadeInUp">
            <p>
                Im Aviad Malikan, 22 year old From Tel-Aviv.
                <br />
                At this project i was responsible for creating Appsus-Mails.
                <br />
                Appsus mails is the platform that you can keep your connection
                between your your friend, your teamworks and more.
            </p>
            <p>
                I'm Lihi Ben Shimol, 24 years old from Tel-Aviv.
                <br />
                At this project I was responsible for creating Appsus-keep - an implementation to Google Keep, and iBooks which allow you to build your own book-shop.
            </p>
        </div>
        © coffeeRights Lihi & Aviad
    </section>
}