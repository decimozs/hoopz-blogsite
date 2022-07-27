import {Navbar, Header, Elements, Offense, Defense, Positions, Reminder, Whatsnext, Footer, PS } from '../components'

export default function Home() {
  return (

    <div className='layouts'>
    
      <div className='hero-wrapper'>
        <Navbar />
        <Header />
      </div>
        <Elements />
        <Offense />
        <Defense />
        <Positions />
        <Reminder />
        <Whatsnext />
        <Footer />
        <PS />
    </div>
    
  )
}
