import React from "react";

const Moods = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Moods</h2>
          <h3 className="section-subheading text-muted">
            Coffee is often associated with social moments such as meeting
            friends or spending time at coffee shops. Drinking coffee with
            others can create a sense of togetherness and strengthen social
            bonds
          </h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Energized</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  For many people, coffee is an effective way to get a boost of
                  energy. The caffeine in coffee can enhance mental clarity,
                  improve focus, and provide a refreshing feeling. Drinking
                  coffee can make someone feel energized and ready to tackle the
                  day
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Enthusiastic</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Having a cup of coffee in the morning or throughout the day
                  can evoke a sense of enthusiasm. The delightful aroma and
                  taste of coffee can bring satisfaction and uplift the overall
                  mood
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Relaxed</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  While coffee can be an energy booster for some, for others, it
                  can have a calming effect. Some people enjoy coffee as a
                  soothing ritual that helps them relax. Its delicious and warm
                  taste can create a comfortable and relaxed atmosphere
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/4.jpg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Inspirational</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  For some individuals, drinking coffee can be a moment of
                  reflection and inspiration. By savoring coffee, one can have a
                  quiet time to think, contemplate, or gain inspiration for
                  creative work
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Social
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Moods;
