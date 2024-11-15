import { Component,EventEmitter,Input, Output } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  titre : string = "";
  @Input() id!: number;
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() available!: boolean;
  @Input() btnText!: string;
  clickMe(ch:string){
    console.log("test event binding " + ch);
  }

  clickImage(description:string){
    alert (description);
  }
@Output()  notified = new EventEmitter <string>();
  notif()
  {
    this.notified.emit('success waw');
  }
}
