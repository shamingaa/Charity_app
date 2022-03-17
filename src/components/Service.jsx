import vid from "../assets/vid.mp4";

const Service = () => {
  return (
    <div className="Service">
      <div className="backgroundVideo">
        <video className="videoContent" autoPlay muted loop>
            <source src={vid} type="video/mp4" />
        </video>
      </div>

      <div className="videoTitle">
          <h1>Help the less privileged</h1>
      </div>
    </div>
  );
};

export default Service;
