import React, { useState } from "react";
import "antd/dist/antd.css";

import { SearchOutlined, NumberOutlined } from "@ant-design/icons";
import { message, Form, Input, Button } from "antd";

import axios from "axios";
import ReactLoading from "react-loading";

import Footer from "./Footer";

function TarjetaBip() {
  const [numTarjeta, setNumTarjeta] = useState("12345XXX");
  const [saldo, setSaldo] = useState(0);
  const [loadingSaldo, setLoadingSaldo] = useState(false);

  const onFinish = (values) => {
    setLoadingSaldo(true);
    axios
      .get("https://api.xor.cl/red/balance/".concat(values.numero_bip))
      .then(function (response) {
        message.success(response.data.status_description);
        setLoadingSaldo(false);
        let api_response = new Intl.NumberFormat(["ban", "id"]).format(
          response.data.balance
        );

        setSaldo(api_response);
      })
      .catch(function (error) {
        // handle error
        message.error(
          "El código de tu Bip! no es válido. Por favor Intenta denuevo."
        );
        setLoadingSaldo(false);
      });
  };

  return (
    <div className="background">
      <div className="background-form"></div>
      <div className="borde">
        <div className="num_tarjeta__container">
          <p className="num_tarjeta">
            N˚ Tarjeta <span className="cuadro">{numTarjeta}</span>
          </p>
        </div>
      </div>
      <div className="bip">
        <div className="bip__content">
          <p className="bip-text">bip!</p>
        </div>
        <div className="bip__number">
          {" "}
          {loadingSaldo ? (
            <div className="spinner">
              <ReactLoading />
            </div>
          ) : (
            "Saldo: $" + saldo
          )}
        </div>
      </div>

      <div className="form">
        <Form onFinish={onFinish} autoComplete="off">
          <Form.Item
            name="numero_bip"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su número de tarjeta",
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
              placeholder="Ingresa número de tarjeta"
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: "#06D6A0", borderColor: "#06D6A0" }}
            >
              {" "}
              Consultar saldo <SearchOutlined />
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default TarjetaBip;
