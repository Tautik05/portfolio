import React from "react";

const About = () => {
  return (
    <div className="w-screen mt-5 flex flex-col justify-between px-20 text-white">
      <div className="flex items-center gap-4 ">
        <div className="flex-grow flex flex-col justify-center w-full text-center">
          <span className="text-7xl font-bold drop-shadow-md">About me</span>
          {/* <span className="text-4xl font-bold text-blue-400 drop-shadow-md">
            A passionate full stack developer
          </span> */}
        </div>
      </div>
      <div className=" flex items-center justify-center p-5 border-4 rounded-xl flex-col border-white text-center font-bold mx-32 mt-8">
        {`I'm a passionate full stack developer with a knack for building dynamic,
        robust web applications. With expertise in both frontend and backend
        technologies, I thrive in creating seamless, end-to-end solutions.
        Here’s a bit about my tech stack and experience: Frontend: HTML, CSS,
        JavaScript, React.js Backend: Django, RESTful APIs Tools and Tech:
        Kafka, Redis, RabbitMQ, Docker Databases: PostgreSQL, MongoDB, Firebase
        Operating Systems: Ubuntu, Arch Linux Throughout my journey, I've built
        and deployed several projects, showcasing everything from real-time data
        streaming to e-commerce functionality. Whether it’s enhancing user
        experiences on the frontend or optimizing server processes on the
        backend, I’m always eager to learn, create, and collaborate.`}

        <div>
          <h1 class="text-3xl font-bold text-white my-5">Technology Stack</h1>

          <div class="flex flex-wrap justify-center gap-4">
            <img
              src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
              alt="C"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
              alt="C++"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS3"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="JavaScript"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
              alt="Python"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
              alt="Django"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray"
              alt="Django REST"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka"
              alt="Apache Kafka"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"
              alt="Redis"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white"
              alt="RabbitMQ"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="Postgres"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34"
              alt="Firebase"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white"
              alt="Render"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
              alt="Vercel"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"
              alt="Heroku"
              class="h-auto"
            />
            <img
              src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
              alt="Docker"
              class="h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
