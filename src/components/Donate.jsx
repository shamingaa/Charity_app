const Donate = () => {
  return (
    <div className="Donate">
      <div className="donateBox">
        <h3 id="message">Make your impact today</h3>
        <div className="symbolBinder">
          <span id="moneySymbol">$</span>
          <input
            type="number"
            placeholder="Your Amount"
            id="donateInput"
            min={1}
          />
        </div>
        <button id="donteSectionBtn" className="btn">
          <h3>donate Now</h3>
        </button>
      </div>
    </div>
  );
};

export default Donate;
