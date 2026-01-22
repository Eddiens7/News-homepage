import './App.css'
import Header from './components/Header'
import retroPcImg from './assets/image-retro-pcs.jpg'
import laptopImg from './assets/image-top-laptops.jpg'
import gameImg from './assets/image-gaming-growth.jpg'

function App() {
  return (
    <>
      <Header/>
      <main>
        
        <section className='hero'>
          <div className='banner'></div>
          <h1>The Bright Future of Web 3.0?</h1>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button>Read more</button>
        </section>

        <section className='new'>
          <h2>New</h2>

          <div className="new-topic">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          
          <div className="divisor"></div>

          <div className="new-topic">
            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>

          <div className="divisor"></div>

          <div className="new-topic">
            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </section>

        <section className='popular'>
          <div className="popular-topic">
            <div className="popular-topic-bg">
              <img src={retroPcImg} alt="" />
            </div>
            <div className='popular-topic-text'>
              <h1>01</h1>
              <h2>Reviving Retro PCs</h2>
              <p>What happens when old PCs are given modern upgrades? </p>
            </div>
          </div>

          <div className="popular-topic">
            <div className="popular-topic-bg">
              <img src={laptopImg} alt="" />
            </div>
            <div className='popular-topic-text'>
              <h1>02</h1>
              <h2>Top 10 Laptops of 2022</h2>
              <p>Our best picks for various needs and budgets. </p>
            </div>
          </div>

          <div className="popular-topic">
            <div className="popular-topic-bg">
              <img src={gameImg} alt="" />
            </div>
            <div className='popular-topic-text'>
              <h1>03</h1>
              <h2>The Growth of Gaming</h2>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
