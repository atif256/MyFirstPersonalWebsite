import './About.css';
import myPhoto from './Images/gambarformal.jpg';

export default function About() {
    return (
      <div className="aboutccc">
        <h1>My Biodata</h1>
        <div>
      <img
        src={myPhoto}
        alt="Me"
        style={{ width: '100px', height: 'auto' }}
      />
    </div>
        <h3>About Myself</h3>
        <p>My name is Atif, I am 23 years old, and I currently live in Johor, Malaysia. I graduated from the University of Technology Malaysia with a Bachelor's degree in Science Mathematics. I am a mathematics student who has several knowledge and skills in programming and coding. I have a good understanding of C++ and C#.</p>
        <h3>Plan for the future</h3>
        <p>I am currently looking for a job that suits my skills, such as a bank website developer, game developer, game website developer, or any programming role. The job that I am particularly interested in is a position under a game developer in Malaysia. I really want to contribute to the success of the game industry in Malaysia on a global scale, regardless of the types of games involved.</p>
        
        <h3>My Experiences</h3>
        <p>There are some of my experiences in the past, project and works that I do on the past.</p>
        
        <ol><li>(SE) Train & Place Upskilling program (Software Engineering)</li>
        <li>Final Year Project</li>
        <li>Internship Researcher</li>
        <li>Volunteerism Program</li>
        <li>Restaurant Waitress</li>
        </ol>
        



        <h3>Hobbies</h3>
        <p>I do like playing video game so much. here are the lists that game that I already beat it.</p>
        <ul>
          <li>Elden Ring</li>
          <li>Lies of P</li>
          <li>Resident Evil 4 Remake</li>
          <li>Far Cry 6</li>
        </ul>
        Additionally, I have a strong liking for Japanese music. Some of my favorite songs include:
        <ul>
          <li>夜に駆ける (Yoru Ni Kakeru/Racing Into The Night) by Yoasobi</li>
          <li>アルジャーノン (Algernon) by Yorushika</li>
          <li>Nautilus by Yorushika</li>
          <li>幸せ by Back Number</li>
        </ul>
        <h3>The reason why I creating this website</h3>
        <p>The reason I am creating this website is to fulfill the requirements for my capstone project and to develop an online version of my resume and curriculum vitae. In other words, I aim to showcase my technical skills and apply them to real-life situations.</p>
        <h3>Disclaimer</h3>
        <p>All content, including but not limited to the website, artwork, and photos, is the intellectual property of Atif. Unauthorized use, reproduction, or distribution without explicit permission is strictly prohibited.</p>
      </div>
    );
}