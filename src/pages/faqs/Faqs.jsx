import faqs from "./data";
import Faq from "./Faq";
import "./Faqs.css";

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually get. Click to toggle the answer, and
        if you still have some more questions, shoot me a message from the
        contact section!
      </p>
      <div className="container faqs__container">
        {faqs.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
