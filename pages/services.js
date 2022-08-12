import React from "react";
import styles from "../styles/Home.module.css";
import data from "./api/data.json";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="items-center justify-center min-h-screen py-2 bg-green-50">
        <h1 className="font-bold text-black text-3xl items-center text-center m-11 ">Our Services</h1>
        <div className="flex flex-row flex-wrap items-center justify-center  ">
          {data.map((record, i) => (
            <div key={i} className={styles.card} >
              <img src={record.path} className={styles.cardImage}/>
              {record.firstName} 
              {/* {record.lastName}  */}
              <div className="p-6"/>
              {record.description}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
