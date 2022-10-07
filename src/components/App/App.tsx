import './App.scss';
import React from 'react';
import MyNewComponent from '../XtremHeader/XtremHeader';
import Popup from 'reactjs-popup';
import MyCard from '../Card/Card';
import MyTemplate from '../WidgetValue/WidgetValue';
import 'reactjs-popup/dist/index.css';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import sagelogo from '../../assets/images/logo.svg';
import ReactDOM from 'react-dom'
import { MdHome } from 'react-icons/md';
import { MdShoppingCart } from "react-icons/md";
import { MdInventory } from "react-icons/md";
import { MdApartment } from "react-icons/md";
import { MdCreditCard } from "react-icons/md";
import { MdViewAgenda } from "react-icons/md";
import { MdMoney } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { MdSettings } from "react-icons/md";



const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];



function App() {
  return (
    <div className="App">
      <div className="sticky-inner" >
        <div className="producttitle">
          <img src={sagelogo} alt="Sage" height="46" width="" style={{ margin: "-26px 25px -2px 15px " }} />
          <a href=""><div className="panelbox"><div className="menuboxcontent"><MdHome /></div></div></a>
          <a href=""><div className="panelbox"><div className="menuboxcontent"><MdViewAgenda /></div></div></a>
          <a href=""><div className="panelbox"><div className="menuboxcontent"><MdShoppingCart /></div></div></a>
          <a href=""><div className="panelbox"><div className="menuboxcontent"><MdInventory /></div></div></a>
          <a href=""><div className="panelbox"><div className="menuboxcontent"><MdApartment /></div></div></a>
          <a href=""><div className="panelbox"><div className="menuboxcontent"><MdCreditCard /></div></div></a>
          <a href=""><div className="panelbox"><div className="menuboxcontent"><MdMoney /></div></div></a>
          <a href=""><div className="panelbox"><div className="menuboxcontent"><MdPeopleAlt /></div></div></a>
          <a href=""><div className="panelbox"><div className="menuboxcontent"><MdSettings /></div></div></a>
          <div style={{ width: '48px', height: '2000px', backgroundColor: 'white' }}></div>
        </div>
        <div className="right-box">
          <a href="" className="right-links" >Tenant version</a>
          <a href="" ><img src={process.env.PUBLIC_URL + '/caretdown.png'} alt="Info" height="6" width="" style={{ margin: "-30px 25px 1px -8px " }} /></a>
          <a href="" ><img src={process.env.PUBLIC_URL + '/info-2150938_960_720.webp'} alt="Info" height="20" width="20" style={{ marginBottom: "-5px" }} /></a>
          <a href="" ><img src={process.env.PUBLIC_URL + '/avatar.png'} alt="Info" height="20" width="20" style={{ margin: "0px 25px -4px 25px" }} /></a>
        </div>
      </div>
      <header className="App-header grid-cols-responsive">
        <div>
          <h1 style={{ marginTop: "76px", marginBottom: "25px" }}>SIM: Yet another great Enterprise Resource Planning project, 100% Cloud</h1>
        </div>
      </header>
      <div className="App-content grid-cols-responsive">
        <div className="grid-flex-wrap">
          <MyCard icons="jyfhgjf" content="" contact="benjamin.dean@sage.com" >$ 1 081 643<MyTemplate /></MyCard>
          <MyCard content="Christophe" contact="christophe.minost@sage.com" />
          <MyCard content="Fabien"><LineChart width={500} height={300} data={[
            {
              name: "Page A",
              uv: 4000,
              pv: 4000,
              amt: 2400
            },
            {
              name: "Page B",
              uv: 3000,
              pv: 1398,
              amt: 2210
            },
            {
              name: "Page C",
              uv: 2000,
              pv: 9800,
              amt: 2290
            },
            {
              name: "Page D",
              uv: 2780,
              pv: 3908,
              amt: 2000
            },
            {
              name: "Page E",
              uv: 1890,
              pv: 4800,
              amt: 2181
            },
            {
              name: "Page F",
              uv: 2390,
              pv: 3800,
              amt: 2500
            },
            {
              name: "Page G",
              uv: 3490,
              pv: 4300,
              amt: 2100
            }
          ]}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart></MyCard>
          <MyCard content="David" />
          <MyCard content="Pierre" />
          <MyCard content="Bence" />
          <MyCard content="Graph">
            <PieChart width={800} height={400}>
              <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </MyCard>
          <MyCard content="Tartempion">
            <p>
              Here I can put my content of type "any".
              This is an example of TypeScript use.
            </p>
            <MyNewComponent />
          </MyCard>
        </div>
      </div>

      <div>






      </div>

      <footer className="grid-cols-responsive">
        Edit <code>src/App.js</code> and save to reload
        &nbsp;|&nbsp;
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>

    </div>
  );
}

export default App;
