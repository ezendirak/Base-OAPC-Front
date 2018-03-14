import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-taula-register',
  templateUrl: './taula-register.component.html',
  styleUrls: ['./taula-register.component.css']
})
export class TaulaRegisterComponent implements OnInit {

  @Input() items;
  @Input() productes;

  @Output() evento_list_put:    EventEmitter<any> = new EventEmitter();
  @Output() evento_list_delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("LIST-COMPONENT");
  }

  actionPut($event)
  {
    console.log($event);
    this.evento_list_put.emit($event);
  }

  actionDelete($event)
  {
    console.log($event);
    this.evento_list_delete.emit($event);
  }

}
