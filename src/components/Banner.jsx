const Banner = () => {
  return (
    <div className="Banner">
      <div className="textBox">
        <h1>
          Become a <span id="redTitle">monthly giver</span> and save a child's
          live today
        </h1>
        <p>
          Your gift today can be the difference between life and death for a
          vulnerable child. You can help a child suffering from deadly hunger, a
          child caught in a brutal conflict, and a child living in fear of
          abuse.
        </p>

        <button id="saveBtn" className="btn">
          <h3>Save live</h3>
        </button>
      </div>
    </div>
  );
};

export default Banner;
