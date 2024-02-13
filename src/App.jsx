import { useState } from 'react'
import reactLogo from './assets/react.svg'
import overview from './assets/overview.png'
import overview1 from './assets/overview1.png'
import overview2 from './assets/FAST FOOD Overview.png'
import overview3 from './assets/LEARNINGAPP.png'
import overview4 from './assets/overviewinmakes.png'
import javascript from './assets/JavaScript-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <div>
          <div >
            <a href="https://www.javascript.com" target="_blank">
              <img src={javascript} className="logo" alt="js logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>

          </div>
          <h1 title="this works"> Hey 👋.. I'm BLESSEN GEORGE
          </h1>
          <h2>I am a Java-Script developer</h2>
          <p>Hi, I am a B.Tech student with fundamental knowledge of software design,
            development, and testing. Seeking to utilize broad educational
            background with excellent analytical, technical, and programming
            skills to thrive as an entry-level software engineer.</p>
          {/* <button className="goals"><li>🔭 I’m currently working on React-native</li>
        <li>🌱 I’m currently learning the advanced concepts of javascript </li>
        <li>🔗 All of my projects are available at https://github.com/blessengeorge30</li>

      </button> */}
        </div>
      </div>

      <div className="card" >
        <button><h1 style={{fontSize:45}}> 🚀 TOP PROJECTS</h1>
          <p style={{fontSize:20}}>
            I have worked on a wide range of projects. showcasing my versatility and proficiency in different domains. Some of my notable projects include Here are some of my projects.
          </p>
          <p style={{fontSize:20}}>These projects reflect my ability to adapt to different technologies and deliver solutions that meet the unique requirements of each domain. They also showcase my proficiency in frontend and backend development, mobile app development, and database management.</p>
          <div>
            <h2 style={{ marginTop: 55,fontSize:35 }}>🔗 BINANCE DEMO PROJECT</h2>
            <p style={{fontSize:20}}>Welcome to the Binance Clone app, your all-in-one solution for secure and seamless cryptocurrency trading. Experience the power of the world's leading crypto exchange, now in the palm of your hand. Whether you're a seasoned trader or a crypto enthusiast, our app provides you with a user-friendly and feature-rich platform for all your digital asset needs.</p>
            <div style={{ marginTop: 25 }}>
              <a href="https://github.com/" target="_blank">
                <img src={overview} className="binance" alt="js logo" />
              </a>
            </div>
          </div>


          <div>
            <h2 style={{ marginTop: 55 ,fontSize:35}}>🔗 QUICK GRAB MART</h2>
            <p style={{fontSize:20}}>An application that connects users with nearby restaurants, allowing them to browse menus, place orders, and have food delivered to their doorstep. Users can customize orders and track the real-time status of their deliveries. The app often features ratings, reviews, and promotions to enhance the overall dining experience. With user-friendly interfaces and convenient features, food delivery apps provide a seamless way for individuals to enjoy a variety of cuisines from the comfort of their homes.</p>
            <div style={{ marginTop: 25 }}>
              <a href="https://github.com/" target="_blank">
                <img src={overview1} className="binance" alt="js logo" />
              </a>
            </div>
          </div>
    
    
          <div>
            <h2 style={{ marginTop: 55 ,fontSize:35}}>🔗 FAST FOOD UI APP</h2>
            <p style={{fontSize:20}}>Welcome to the future of fast food ordering with our revolutionary Fast Food UI App! Our app redefines the way you experience quick and delicious meals, putting a sleek and intuitive interface right at your fingertips.</p>
            <div style={{ marginTop: 25 }}>
              <a href="https://github.com/" target="_blank">
                <img src={overview2} className="binance" alt="js logo" />
              </a>
            </div>
          </div>
       
          <div>
            <h2 style={{ marginTop: 55 ,fontSize:35}}>🔗 LEARNING HUB APP</h2>
            <p style={{fontSize:20}}>Welcome to LEARNING-HUB, your one-stop destination for online learning! Whether you're looking to enhance your skills, pursue a new hobby, or advance your career, LEARNING-HUB offers a vast library of courses taught by experts from around the world. With our app, learning has never been more convenient and accessible.</p>
            <div style={{ marginTop: 25 }}>
              <a href="https://github.com/" target="_blank">
                <img src={overview3} className="binance" alt="js logo" style={{marginBottom: 15}} />
              </a>
              <a href="https://github.com/" target="_blank">
                <img src={overview4} className="binance" alt="js logo" />
              </a>
            </div>
          </div>
        </button>

      </div>
      <p className="read-the-docs">
        Copyrights 2024
      </p>
    </>
  )
}

export default App
