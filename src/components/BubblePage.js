import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {axiosWithAuth} from "./../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const params = useParams();

  

  const getColorList = () => {
    axiosWithAuth()
      .get(`/api/colors/`)
      .then( (res) => setColorList(res.data))
      .catch( (err) => console.log(err.response));
  };


  useEffect(() => {
    getColorList();
  }, []);
  



  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
