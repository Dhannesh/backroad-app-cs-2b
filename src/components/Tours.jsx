import { toursData } from "../data";
import Heading from "./Heading";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Heading fw="featured" lw="tours" />

        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={tour.pic} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {tour.country}
                  </p>
                  <p>{tour.days} days</p>
                  <p>from ${tour.amount}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
export default Tours;
