import React from "react";
import "antd/dist/antd.css";
import { SearchOutlined, NumberOutlined} from '@ant-design/icons';
import { Form, Input, Button } from 'antd';


function TarjetaBip() {


  return (
    <div className="background">

      <div className="background-form">

      </div>
      <div className="borde">
      </div>
      <div className="bip">
        <div className="bip__content">
          <p className="bip-text">bip!</p>
        </div>
        <div className="bip__number"> Saldo: $2500</div>
      </div> 

      <div className = "form">
        <Form>
          <Form.Item>
            <Input prefix={<NumberOutlined className="site-form-item-icon" style={{color:"grey"}} />} placeholder="Ingrese número de tarjeta"></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{background:"#06D6A0", borderColor: "#06D6A0"}}> Consultar saldo <SearchOutlined /></Button>
          </Form.Item>
        </Form>
      </div>
    </div>

    
  );
}

export default TarjetaBip;