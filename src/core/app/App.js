import React from "react"
import { Row, Col } from "antd"
import { Menu } from "shared/layouts/menu"
import {BrowserRouter} from "react-router-dom"
import RouterApp from "core/router/router.app"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
        <Row className="app-menu_container">
          <Col span={12} offset={6}>
            <Menu />
          </Col>
        </Row>
        <div className="route-container-app">
        <Row className="app-menu_container">
          <Col span={12} offset={6}>
            <RouterApp />
          </Col>
        </Row>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
