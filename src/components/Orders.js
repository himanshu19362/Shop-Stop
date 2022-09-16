import React, { useEffect, useState } from "react";
import "../assets/css/Orders.css";
import { db } from "../firebase";
import { useStateValue } from "../ReactContextApi/StateProvider";
import Order from "./Order";

const Orders = () => {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("user")
        .doc(user?.uid)
        .collection("order")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                data: doc.data(),
              };
            })
          );
        });
    } else {
      setOrders([]);
    }
  }, []);
  // console.log(orders)
  
  return (
    <div className="orders">
      <div className="container">
        <h2>Order History</h2>
        {orders.length > 0 && orders.map(order => <Order data={order?.data?.cart} date={order?.data?.created} total={order?.data?.amount}/>)}
      </div>
    </div>
  );
};

export default Orders;
