import { Component, OnInit, Input,  EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter(); // Emissor de Eventos (broadCast de Eventos)

 // @ViewChild('campoInput') campoValorInput: ElementRef;
 @ViewChild('campoInput', { static: false }) campoValorInput: ElementRef; 

  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor:this.valor});
  }

  incrementa(){
    
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor:this.valor});
  }
  constructor() { }

  ngOnInit() {
  }

}
