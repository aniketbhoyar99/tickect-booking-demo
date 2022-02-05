import React, { useState } from "react";
import { Seats } from "../services/Data";
import { Button, Card } from "reactstrap";
import { useHistory } from "react-router";
const TicketPage = (props) => {
  const { getdata } = props;
  const [SeatInfo, setSeatInfo] = useState(Seats);
  const [TicketInfo, setTicketInfo] = useState([]);
  const history = useHistory();
  console.log("Seats", SeatInfo);
  const onClickHandler = (datas) => {
    TicketInfo.includes(datas)
      ? setTicketInfo(TicketInfo.filter((values) => values !== datas))
      : setTicketInfo([...TicketInfo, datas]);
  };
  console.log("TicketInfo", TicketInfo);
  const submitHandler = () => {
    getdata(TicketInfo);
    history.push("/showdetails");
  };

  return (
    <div style={{ width: "70%" }}>
      <div style={{ paddingLeft: "350px" }}>
        <h1 style={{ color: "silver" }}>Book Seats</h1>
        {SeatInfo.map((datas) => {
          return (
            <Button
              style={{
                width: "50px",
                height: "60px",
                border: "1px solid gray",
                margin: "10px", 
                borderRadius:"20px"
              }}
              onClick={() => onClickHandler(datas)}
              className={`btn btn-${
                TicketInfo.includes(datas)
                  ? (datas.amount === 150 ? "warning" : "") ||
                    (datas.amount === 130 ? "success" : "danger") ||
                    (datas.amount === 100 ? "primary" : "info")
                  : ""
              }`}
            >
              <div>{datas.no}</div>
              <div>{datas.amount}</div>
            </Button>
          );
        })}

        <div>
          <h3>Price</h3>
          <p style={{ color: "yellow" }}>Gold =150 Rs </p>
          <p style={{ color: "green" }}>Silver =130 Rs</p>
          <p style={{ color: "red" }}>Reguler =100 Rs</p>
        </div>

        <Button onClick={submitHandler} className="btn btn-danger">
          BookTickets
        </Button>
      </div>
    </div>
  );
};

export default TicketPage;
