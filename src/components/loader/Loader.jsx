import React, { useState, useEffect } from 'react';
import './loader.css'

const Loader = () => {
  return (
    <div className="fixed  w-full h-full flex justify-center items-center bg-white z-50">
      {/* <img src='travels/loader/loader.gif'> </img>*/}
      {/* <div class="loader">
        <span>M</span>
        <span>i</span>
        <span>n</span>
        <span>i</span>
        <span>a</span>
        <span>t</span>
        <span>u</span>
        <span>r</span>
        <span>e</span>
        <span>i</span>
        <span>n</span>
        <span>d</span>
        <span>i</span>
        <span>a</span>
        <span>-</span>
        <span>H</span>
        <span>o</span>
        <span>l</span>
        <span>i</span>
        <span>d</span>
        <span>a</span>
        <span>y</span>
        <span>s</span>
      </div> */}

    <div class="custom-loader"></div>

    {/* <div class="loader ml-5"></div> */}


  
    </div >
  );
}

export default Loader