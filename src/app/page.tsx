import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Footer from './components/Footer';
// import Contact2 from './components/Contact2';
// import Experience from './components/Experience';
// import Projects2 from './components/Projects2';
// import Test from './components/Test';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="container mt-8 mx-auto px-4 sm:px-6 py-4 w-full md:w-2/3">
      <Hero/>
      <About/>
      {/* <Projects2/> */}
      <Projects/>
      {/* <Experience/> */}
      <Contact/>
      <Footer/>
      </div>
    </main>

  );
}
