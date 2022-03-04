import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cadNumero:string = '';
  respuesta:string = '';
  auxiliar:string = '';
  previsualizacion:string = '';
  s:boolean = false;
  r:boolean = false;
  m:boolean = false;
  d:boolean = false;

  sumar():void{
    if(Number(this.respuesta) > 0){
      this.auxiliar = this.respuesta;
      this.respuesta = '';
    }else{
      this.auxiliar = this.cadNumero;
    }
    this.cadNumero = '';
    this.s = true;
    
    this.previsualizacion = this.auxiliar+' +';
  }
  restar():void{
    if(Number(this.respuesta) > 0){
      this.auxiliar = this.respuesta;
      this.respuesta = '';
    }else{
      this.auxiliar = this.cadNumero;
    }
    this.cadNumero = '';
    this.r = true;

    this.previsualizacion = this.auxiliar+' -';
  }
  multiplicar():void{
    if(Number(this.respuesta) > 0){
      this.auxiliar = this.respuesta;
      this.respuesta = '';
    }else{
      this.auxiliar = this.cadNumero;
    }
    this.cadNumero = '';
    this.m = true;

    this.previsualizacion = this.auxiliar+' x';
  }
  dividir():void{
    if(Number(this.respuesta) > 0){
      this.auxiliar = this.respuesta;
      this.respuesta = '';
    }else{
      this.auxiliar = this.cadNumero;
    }
    this.cadNumero = '';
    this.d = true;

    this.previsualizacion = this.auxiliar+' ÷';
  }
  porcentaje():void{
    let valor = Number(this.cadNumero);
    valor = valor/100;
    this.cadNumero = String(valor);
  }
  resultado():void{
    let res;
    if(this.s === true){
      res = Number(this.auxiliar)+Number(this.cadNumero);
      this.s = false;
    }
    if(this.r === true){
      res = Number(this.auxiliar)-Number(this.cadNumero);
      this.r = false;
    }
    if(this.m === true){
      res = Number(this.auxiliar)*Number(this.cadNumero);
      this.m = false;
    }
    if(this.d === true){
      res = Number(this.auxiliar)/Number(this.cadNumero);
      let y = String(+res.toString().replace(/^[^\.]+/,'0'));
      if(y.length > 7){
        res = res.toFixed(7);
      }
      this.d = false;
    }
    this.respuesta = String(res);
    this.auxiliar = '';
    this.cadNumero = '';
  }





  agrupar(numero:string):void{
    this.cadNumero = this.cadNumero + numero;
  }
  limpiar():void{
    this.cadNumero = '';
    this.respuesta = '';
    this.auxiliar = '';
    this.s = false;
    this.r = false;
    this.m = false;
    this.d = false;

    this.previsualizacion = '';
  }
}
