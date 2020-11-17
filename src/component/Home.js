import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Home extends Component{
    render(){
        return(
            <div>
                 <Mui.Container fixed>
                 <Mui.Grid container spacing={1}>
                 <Mui.Grid item xs={12} sm={6}>
                     <img src='data:image/png;base64,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' width='150pv'/>
                     <h4 style={{ color: 'blue' , fontSize:50 , fontFamily:'arial'}}>Selamat datang di komunitas profesional ini</h4>
 
                     <Mui.Button variant="outlined" style={{ width:'80%', height:'10%' , textAlign:'left'}}>Cari Pekerjaan</Mui.Button><br/><br/>
                     <Mui.Button variant="outlined" style={{ width:'80%', height:'10%' , align:'left'}}>Temukan orang yang anda kenal</Mui.Button><br/><br/>
                     <Mui.Button variant="outlined" style={{ width:'80%', height:'10%' , align:'left'}}>Pelajari lebih lanjut</Mui.Button>
                 </Mui.Grid>
                 <Mui.Grid item xs={12} sm={6}>
                 <h4 style={{ marginLeft:300 , float:'right' }}>
                 <Mui.Button >Bergabung Sekarang</Mui.Button>
                 <Mui.Button variant="outlined" color="primary" style={{ borderRadius:50 }}>
                    Log In
                 </Mui.Button>                
                 </h4>
                 <img src="https://static-exp1.licdn.com/sc/h/3m4tgpbdz7gbldapvl63mrnxz" />
                 </Mui.Grid>
                 </Mui.Grid> 
                 </Mui.Container>
            </div>
        )
    }
}

export default Home;