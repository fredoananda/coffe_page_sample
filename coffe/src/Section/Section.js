import React from "react";

const Section = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About Coffee</h2>
          <h3 className="section-subheading text-muted">
            Semua tentang coffee
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <h4 className="my-3">Coffee Arabica</h4>
            <p className="text-muted">
              Arabica adalah salah satu varietas kopi yang sangat terkenal di
              seluruh dunia. Varian kopi Arabica berasal dari spesies Coffea
              arabica, dan sering kali dianggap memiliki kualitas yang lebih
              baik daripada varietas kopi lainnya. Di Indonesia, kopi Arabica
              ditanam di berbagai daerah dengan kondisi geografis yang cocok,
              seperti di pegunungan dengan ketinggian antara 800 hingga 1.600
              meter di atas permukaan laut.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="my-3">Coffee Robusta</h4>
            <p className="text-muted">
              Robusta is another popular coffee variety that is widely
              cultivated in Indonesia. Robusta coffee comes from the Coffea
              canephora species and is known for its strong flavor and higher
              caffeine content compared to Arabica. In Indonesia, Robusta coffee
              is grown in various regions, especially in lowland areas with
              altitudes ranging from 200 to 800 meters above sea level.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="my-3">MIX Coffee</h4>
            <p className="text-muted">
              refers to a unique coffee preparation method that originated in
              Indonesia. This method involves adding a certain amount of sugar
              during the coffee brewing process, resulting in a naturally sweet
              and flavorful cup of coffee. The sweetness comes from the
              caramelization of the sugar as it interacts with the coffee
              grounds and hot water.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
