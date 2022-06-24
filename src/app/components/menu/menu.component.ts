import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  estado_menu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  open_menu(){
    this.estado_menu = !this.estado_menu
  }
  
 
}
