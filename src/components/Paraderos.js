import React, { useState } from "react";
import ParaderosView from "./ParaderosView";
import "antd/dist/antd.css";

import { SearchOutlined, NumberOutlined } from "@ant-design/icons";
import { message, Form, Input, Button } from "antd";

import axios from "axios";
import ReactLoading from "react-loading";

function Paraderos() {
  const [numTarjeta, setNumTarjeta] = useState("12345XXX");

  const [paradas, setParadas] = useState([]);
  const [paradero, setParadero] = useState("");
  const [isParadas, setIsParadas] = useState(false);

  const [loadingSaldo, setLoadingSaldo] = useState(false);

  const onFinish = (values) => {
    setLoadingSaldo(true);
    axios
      .get("https://api.xor.cl/red/bus-stop/".concat(values.paradero))
      .then(function (response) {
        message.success(response.data.status_description);
        // let api_response = new Intl.NumberFormat(["ban", "id"]).format(
        //   response.data.balance
        // );
        setParadero(values.paradero);

        setParadas(response.data);
        setIsParadas(true);
        setLoadingSaldo(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
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
          <p className="bip-text">RedBus</p>
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
              placeholder="Paraderos"
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: "#06D6A0", borderColor: "#06D6A0" }}
            >
              {" "}
              Consultar buses <SearchOutlined />
            </Button>
          </Form.Item>
        </Form>
      </div>{" "}
      {isParadas && <ParaderosView paradero={paradero} paradas={paradas} />}
    </div>
  );
}

export default Paraderos;
