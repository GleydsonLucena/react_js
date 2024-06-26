import React from 'react'
import data from "./data.json";

const Foto = () => {
  return (
    <div>
      <img src={data[1].foto_capa} alt="opa" />
    </div>
  )
}

export default Foto