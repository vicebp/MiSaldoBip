import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";

import { SearchOutlined, NumberOutlined } from "@ant-design/icons";
import { message, Form, Input, Button, Spin } from "antd";

import axios from "axios";
import ReactLoading from "react-loading";

function TarjetaBip() {
  const [idTarjeta, setIdTarjeta] = useState();
  const [saldo, setSaldo] = useState(0);
  const [loadingSaldo, setLoadingSaldo] = useState(false);
  // useEffect(()=>{
  //
  // })
  console.log(idTarjeta);
  const onFinish = (values) => {
    setLoadingSaldo(true);
    axios
      .get("https://api.xor.cl/red/balance/".concat(values.numero_bip))
      .then(function (response) {
        message.success(response.data.status_description);
        setLoadingSaldo(false);
        setSaldo(response.data.balance);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div className="background">
      <div className="background-form"></div>
      <div className="borde"></div>
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
            "Saldo: " + saldo
          )}
        </div>
      </div>

      <div className="form">
        <Form onFinish={onFinish}>
          <Form.Item name="numero_bip">
            <Input
              prefix={
                <NumberOutlined
                  className="site-form-item-icon"
                  style={{ color: "grey" }}
                />
              }
              placeholder="Ingrese número de tarjeta"
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

export default TarjetaBip;
