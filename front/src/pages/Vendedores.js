import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";

function Vendedores() {
    

    const [countIdVentas, setIdVentas] =  useState(1);
    useEffect( ()=>{
        //actualiza usando el navegador
        //var uno = document.getElementById('idVenta').value;
        document.getElementById('idVenta').value = countIdVentas;
    } , []);

    function total(cant, precio){
        return cant*precio;
    }
    function handleAgregarVenta(e){
        e.preventDefault(); // previene la actualización del form f5


        e.target.idVenta.value = countIdVentas;

        
         const ventasSchema  = {
             fecha: e.target.fecha.value,
             vendedor:document.getElementById('vendedor').value,
             idVenta: countIdVentas,
             cantidad:e.target.cantidad.value,
             precio:e.target.precio.value,
             cliente:document.getElementById('cliente').value,
             total:"0",
         };

         e.target.idVenta.value = countIdVentas;
        
        e.target.total.value = total(ventasSchema.cantidad, ventasSchema.precio);

        if (ventasSchema.fecha === '' || ventasSchema.vendedor === '' ||
           ventasSchema.idVenta === '' || ventasSchema.vendcantidadedor === '' ||
             ventasSchema.precio === '' || ventasSchema.cliente === '' || ventasSchema.total === ''
        ) {
            alert("null");
        } else {
            setIdVentas(countIdVentas +1);
            axios.post(`http://localhost:3001/ventas/agregar`, ventasSchema )
            .then(res => {
              console.log(res);
              console.log(res.data);
              alert( res.status);
            })
        }



        console.log("lala");
       
   
    }
    

    return (
        <div>
            <h1>Ventas</h1>
            <form className = "form-ventas" onSubmit={handleAgregarVenta}>
                <label> Fecha</label>
                <input name ="fecha" type="date" className="form-control" /> {/* className="form-control"  da el estilo boostrap */}
            
                <label> Vendedor</label>
                <input id ="vendedor" type="text" placeholder="pepito perez" className="form-control"/>        

                <label> idVenta</label>
                <input id ="idVenta" name ="idVenta" type="number"  className="form-control" disabled="disabled"/>     

                <label> Cantidad</label>
                <input name ="cantidad" type="number"  className="form-control"/>      

                <label> Precio</label>
                <input name ="precio" type="number" placeholder="$ 0.00"  className="form-control"/>       

                <label> cliente</label>
                <input id ="cliente" type="text" placeholder="cliente apellido" className="form-control"/>      

                <label> Total Venta</label>
                <input name ="total" type="number" placeholder="$ 0.00" className="form-control" disabled="disabled"/>   
                <br/><button type="submit" class="btn btn-primary">Agregar Venta</button>

            </form>

        </div>
    )
}

export default Vendedores
