import React from "react";
import { Timeline } from "antd";

function ParaderosView({ paradero, paradas }) {
  console.log(paradas);
  return (
    <div className="background-buses">
      <div className="parada__title">
        <h2>
          {" "}
          Código parada:{" "}
          <span style={{ fontWeight: "900" }}>{paradero.toUpperCase()}</span>
        </h2>
        <h2>{paradas.name}</h2>
      </div>
      <Timeline>
        <div className="servicios">
          {paradas.services.map((service, idx) => (
            <Timeline.Item
              color={
                service.status_description ===
                "Fuera de horario de operacion para este paradero"
                  ? "red"
                  : "green"
              }
            >
              <p key={"service" + idx}>
                {service.id} - {service.status_description}
              </p>
              {service.buses.map((bus, idx) => (
                <Timeline.Item color="blue">
                  <p key={service.id}>Patente {bus.id}</p>
                </Timeline.Item>
              ))}
            </Timeline.Item>
          ))}
        </div>
      </Timeline>
    </div>
  );
}

export default ParaderosView;
