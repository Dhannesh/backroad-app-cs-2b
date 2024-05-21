import { servicesData } from "../data";
import Heading from "./Heading";
import Service from "./Service";
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
       
        <Heading fw="our" lw="services" />

        <div className="section-center services-center">
          {servicesData.map((item) => (
            <Service {...item} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Services;
