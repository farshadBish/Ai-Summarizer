import { logo } from '../assets'

function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center flex-row w-full mb-10 pt-3'>
        <img src={logo} alt="logo" className='w-28 object-contain' />
        <button 
        type='button'
        onClick={()=> window.open('https://github.com/farshadBish/Ai-Summarizer')}
        className="black_btn"
        >GitHub</button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Summarize your reading with this AI summarizer!
        It transforms long and lengthy articles into clean and concise summaries 
      </h2>
    </header>
  )
}

export default Hero