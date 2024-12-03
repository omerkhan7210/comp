import { useState } from 'react'
import Header, { BannerSection, CardSection, Competitions, StepsToFollow } from './Header'
import Footer from './Footer'
import {TestimonialsAndCard} from './Testimonials'

const App = () => {
  return (
   <>
   <main className='  min-h-[200vh]' style={{
    background: 'rgb(44,22,97)',
    backgroundSize:'100%',
    backgroundPosition:'cover'
    }}>
     <section className='max-w-[97%] mx-auto' >
     <Header/>
     <BannerSection/>
     </section>
     
     <CardSection/>
     <StepsToFollow/>
     <Competitions/>
     <TestimonialsAndCard/>
     <Footer/>
   </main>
   </>
  )
}

export default App
