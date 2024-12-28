import Contact from "../components/contactform";

export default function ContactPage() {
  return (
    <div id="contact">
      
        <div className="flex justify-center items-center h-screen">
          <div className="w-full">
            <div className="p-5 sm:p-10 border border-gray-400 rounded-lg bg-gray-200 bg-opacity-50">
              <Contact />
            </div>
          </div>
        </div>
        
</div>  );
}
