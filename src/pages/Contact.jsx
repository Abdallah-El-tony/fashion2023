import { Breadcrump, Partiners } from "../components";
import Form from "../components/apps/ContactForm";
import ContactInfo from "../components/apps/ContactInfo";

const Contact = () => {
  return (
    <div>
      <Breadcrump slug="Contact Us"/>
      <div className="mt-5 py-4">
        <div className="container">
          <div className="row">
            <ContactInfo />
            <Form/>
          </div>
        </div>
      </div>
      <div className="container my-4 py-5">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d367479.6165706043!2d-99.918677!3d43.981404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877d432d85e938a5%3A0x7f0d6293186a4b7!2sSouth%20Dakota!5e0!3m2!1sen!2sus!4v1692990250776!5m2!1sen!2sus" height="300" style={{border:'0' , width:'100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Partiners/>
    </div>
  );
};

export default Contact;
