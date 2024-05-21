const Test = ({ fname, lname, age, grade }) => {
  return (
    <>
      <h1>
        Hello, I am {fname} {lname}
      </h1>
      <h2>I am {age}</h2>
      <h3>My grade is {grade}</h3>
    </>
  );
};
export default Test;
