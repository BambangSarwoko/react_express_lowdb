import React, { Component } from 'react';
import axios from 'axios';
import './style.css'

class App extends Component {
  constructor(){
    super();
    this.state={ express:[],name:'',age:'',address:''};
  }

  pilih(){
    this.setState({name:this.refs.nama.value});
  }
  pilih2(){
    this.setState({age:this.refs.usia.value});
  }
  pilih3(){
    this.setState({address:this.refs.alamat.value});
  }
  klik_post(){
      axios.post('http://localhost:3330/kirim', 
      {
        "nama": this.state.name,
        "usia": this.state.age,
        "alamat": this.state.address
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    };
  klik_get(){
      axios.get('http://localhost:3330/kirim')
      .then((ambilData) => {
      console.log(ambilData);
      this.setState({express: ambilData.data})
      })
  };
  render() {
        const data= this.state.express.map((item,index)=>{
        var s_nama=item.nama;
        var s_usia=item.usia;
        var s_alamat=item.alamat;
        return <tr><th scope="row"></th><td key={index}>{s_nama}</td><td key={index}>{s_usia}</td><td key={index}>{s_alamat}</td></tr>;
      })
      return (
          <body>
          <div>
            <h3>Input Data </h3>
            <div className="form-group">
               <label for="InputNama">Nama :</label>
               <input ref="nama" type="text" className="form-control" onInput={()=>{this.pilih();}} id="InputNama" placeholder="Nama"/>
            </div>
            <div className="form-group">
               <label for="InputUsia">Usia :</label>
               <input ref="usia" type="number" className="form-control" onInput={()=>{this.pilih2();}} id="InputUsia" placeholder="Usia"/>
            </div>
            <div className="form-group">
               <label for="InputAlamat">Alamat :</label>
               <input ref="alamat" type="text" className="form-control" onInput={()=>{this.pilih3();}} id="InputAlamat" placeholder="Alamat"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>{this.klik_post();}}>Post Data</button><br/><br/>
            <h3> Output Data </h3>
           <table className="table">
             <thead className="thead-dark">
              <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Usia</th>
              <th scope="col">Alamat</th>
              </tr>
             </thead>
             <tbody>
                {data} 
             </tbody>   
            </table><br/>
            <button type="submit" className="btn btn-success" onClick={()=>{this.klik_get();}}>Get Data</button><br/>
          </div>
          </body>
      );
    }
  }
  
  export default App;