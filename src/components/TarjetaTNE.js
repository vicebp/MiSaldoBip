import React, { useState } from "react";
import "antd/dist/antd.css";

import { SearchOutlined, NumberOutlined } from "@ant-design/icons";
import { message, Form, Input, Button } from "antd";

import axios from "axios";
import ReactLoading from "react-loading";

function TarjetaTNE() {
  const [numTarjeta, setNumTarjeta] = useState("12345XXX");
  const [saldo, setSaldo] = useState(0);
  const [loadingSaldo, setLoadingSaldo] = useState(false);

  const onFinish = (values) => {
    setLoadingSaldo(true);
    axios
      .get("https://api.xor.cl/red/balance/".concat(values.numero_tne))
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
        console.log(error);
      });
  };

  return (
    <div className="background">
      <div className="background-form"></div>
      <div className="num_tarjeta__container"></div>
      <div className="tne">
        <div className="tne__content">
          <div className="tne-text-container">
            <p className="tne-text">TNE</p>
          </div>
        </div>
        <div className="tne__number">
          {" "}
          {loadingSaldo ? (
            <div className="spinner-tne">
              <ReactLoading />
            </div>
          ) : (
            "Saldo: $" + saldo
          )}
        </div>
        <div className="container-code-bar">
          <div className="bar-code">
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
          </div>
          <div className="code-number">
            <p className="tne-number-selected">12314512</p>
          </div>
        </div>
      </div>

      <div className="form">
        <Form onFinish={onFinish} autoComplete="off">
          <Form.Item
            name="numero_tne"
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
    </div>
  );
}

export default TarjetaTNE;
