const Heading = (props) => {
  return (
    <>
      <div className="section-title">
        <h2>
          {props.fw} <span>{props.lw}</span>
        </h2>
      </div>
    </>
  );
};
export default Heading;
