import React, { useState } from "react";
import ParaderosView from "./ParaderosView";
import "antd/dist/antd.css";

import { SearchOutlined, NumberOutlined } from "@ant-design/icons";
import { message, Form, Input, Button } from "antd";

import axios from "axios";
import ReactLoading from "react-loading";

function Paraderos() {
  const [paradas, setParadas] = useState([]);
  const [paradero, setParadero] = useState("");
  const [isParadas, setIsParadas] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    axios
      .get("https://api.xor.cl/red/bus-stop/".concat(values.paradero))
      .then(function (response) {
        message.success(response.data.status_description);
        setParadero(values.paradero);

        setParadas(response.data);
        setLoading(false);
        setIsParadas(true);
      })
      .catch(function (error) {
        // handle error

        message.error("Error en el paradero. Por favor Intenta denuevo.");
        setLoading(false);
      });
  };

  return (
    <div className="background">
      <div className="background-form"></div>
      <div className="redbus__borde">
        <div className="num_tarjeta__container">
          {/* <p className="num_tarjeta">
            N˚ Tarjeta <span className="cuadro">{numTarjeta}</span>
          </p> */}
        </div>
      </div>
      <div className="redbus">
        <div className="bip__content">
          <p className="redbus-text">RedBus</p>
        </div>
        <div className="bip__number">
          {/* {" "}
          {loadingSaldo ? (
            <div className="spinner">
              <ReactLoading />
            </div>
          ) : (
            "Saldo: $" + saldo
          )} */}
        </div>
      </div>
      <div className="form">
        <Form onFinish={onFinish} autoComplete="off">
          <Form.Item
            name="paradero"
            rules={[
              {
                required: true,
                message: "Ingresa el código del paradero ",
              },
              { whitespace: true },
            ]}
            hasFeedback
          >
            <Input
              prefix={
                <NumberOutlined
                  className="site-form-item-icon"
                  style={{ color: "grey" }}
                />
              }
              placeholder="Ingresa un paradero"
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: "#06D6A0", borderColor: "#06D6A0" }}
            >
              Consultar buses <SearchOutlined />
            </Button>
          </Form.Item>
        </Form>
      </div>{" "}
      {loading && (
        <div className="spinner__paraderos">
          <ReactLoading type={"bubbles"} color={"#000"} />
        </div>
      )}
      {isParadas && !loading && (
        <ParaderosView paradero={paradero} paradas={paradas} />
      )}
    </div>
  );
}

export default Paraderos;
