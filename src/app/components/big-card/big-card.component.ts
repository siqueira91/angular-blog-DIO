import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
   photoCover:string = "https://cinepop.com.br/wp-content/uploads/2020/04/the-clone-wars.png"
   cardTitle:string = "ÚLTIMA TEMPORADA DE CLONE WARS ANUNCIADA" 
   cardDescription:String="Sétima e última temporada já tem data de estréia confirmada." 

  constructor() { }

  ngOnInit(): void {
  }

}
