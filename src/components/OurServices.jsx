import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/_OurServices.scss";
function OurServices() {
  return (
    <section className="services">
      <div className="services__wrapper">
        <div className="services__wrapper--content">
          <motion.h2 initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.2 }}
        viewport={{ once: true }}  className="heading">
            Research Article Writing <span></span>
          </motion.h2>
          <motion.p initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }}  className="section-description">
            Writing a research article is a crucial part of the academic
            process, and publishing it in reputed journals can significantly
            contribute to one's career growth.At the same time, getting a
            research article published in top journals such as UGC, SCOPUS, SCI,
            Web of Science, and Springer is highly competitive and requires
            thorough preparation, a clear understanding of the submission
            guidelines, and a comprehensive understanding of the research area.
          </motion.p>
          <motion.p initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.5 }}
        viewport={{ once: true }} className="section-description">
            At MATT, we specialize in providing high-quality research article
            writing services for academics, researchers, and students who need
            to publish in UGC, SCOPUS, SCI, Web of Science, and Springer
            Journals. Our team of experienced writers and editors are
            well-versed in the intricacies of academic publishing, and we work
            closely with our clients to ensure that their research papers meet
            the highest standards of quality and impact.
          </motion.p>
          <motion.p initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.6 }}
        viewport={{ once: true }}className="section-description">
            When you choose MATT for your research article writing needs, you
            can expect the following benefits:
          </motion.p>
          <motion.p initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.7 }}
        viewport={{ once: true }} className="section-description">
            <b>Customized writing:</b>We understand that every research project
            is unique, and we work closely with our clients to ensure that their
            papers are tailored to their specific needs and requirements.
          </motion.p>
          <motion.p initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.4 }}
        viewport={{ once: true }} className="section-description">
            <b>Rigorous editing:</b>Our team of editors are experts in the
            field, and we use a rigorous editing process to ensure that every
            paper meets the highest standards of quality and impact
          </motion.p>
          <motion.p initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }} className="section-description">
            <b>Fast turnaround:</b>We know that time is of the essence when it
            comes to academic publishing, and we work efficiently to ensure that
            your paper is completed and submitted on time.
          </motion.p>
          <motion.p initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }} className="section-description">
            <b>Affordable pricing:</b>We offer competitive pricing for our
            research article writing services, and we are committed to providing
            high-quality work at a reasonable cost.
          </motion.p>
          <motion.p initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }} className="section-description">
            <b>Satisfaction guarantee:</b> We are committed to providing the
            highest level of customer satisfaction, and we offer a satisfaction
            guarantee for all of our services.
          </motion.p>
          <motion.p initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }} className="section-description">
            Whether you need help with writing a research paper from scratch,
            editing and proofreading an existing paper, or preparing a
            manuscript for submission to a journal, MATT is here to help.
            Contact us today to learn more about our research article writing
            services and how we can help you achieve your academic publishing
            goals.
          </motion.p>
        </div>
        <div className="services__wrapper--all-services">
          <motion.img initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }} src="/images/services1.webp" alt="" />
          <motion.div initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.6 }}
        viewport={{ once: true }} className="all__services-container">
            <h5 className="heading">
              view all services <span></span>
            </h5>
            <ul className="all__services-service">
              <li>
                <Link to="service/:id">
                  <FaArrowAltCircleRight className="right-arrow" />
                  Research Article Writing
                </Link>
              </li>
              <li>
                <Link to="service/:id">
                  <FaArrowAltCircleRight className="right-arrow" />
                  Review Article Writing / Editing
                </Link>
              </li>
              <li>
                <Link to="service/:id">
                  <FaArrowAltCircleRight className="right-arrow" />
                  Thesis / Dissertation Writing
                </Link>
              </li>
              <li>
                <Link to="service/:id">
                  <FaArrowAltCircleRight className="right-arrow" />
                  Publication Support
                </Link>
              </li>
              <li>
                <Link to="service/:id">
                  <FaArrowAltCircleRight className="right-arrow" />
                  PhD End to End Assistance
                </Link>
              </li>
              <li>
                <Link to="service/:id">
                  <FaArrowAltCircleRight className="right-arrow" />
                  Propsal Writing / Editing
                </Link>
              </li>
              <li>
                <Link to="service/:id">
                  <FaArrowAltCircleRight className="right-arrow" />
                  Proofeading Services
                </Link>
              </li>
              <li>
                <Link to="service/:id">
                  <FaArrowAltCircleRight className="right-arrow" />
                  Project Development / Implementation
                </Link>
              </li>
              <li>
                <Link to="service/:id">
                  <FaArrowAltCircleRight className="right-arrow" />
                  Plagiarism Free Writing / Editing
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
