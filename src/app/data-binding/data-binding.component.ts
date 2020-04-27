import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  cursoAngular: boolean = true;

  valorAtual:string;
  valorSalvo:string;
  isMouseOver:boolean = false;
  nome: string = "ABC";

  valorInicial = 15;

  nomeDoCurso: string = 'Angular';

  getValor(){
    return 1;
  }

  getCurtirCurso(){

    return true;
  }

  botaoClicado(){
    alert('clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    
    this.valorAtual = (<HTMLInputElement>evento.target).value;      
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }
  constructor() { }

  ngOnInit() {
  }

}
