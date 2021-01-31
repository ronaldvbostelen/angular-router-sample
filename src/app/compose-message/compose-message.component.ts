import { Component, OnInit, HostBinding } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {
  details: string;
  message: string;
  sending = false;

  constructor(private  router: Router) {
  }

  ngOnInit(): void {
  }

  send(): void {
    this.sending = true;
    this.details = 'Sending Messages...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel(): void {
    this.closePopup();
  }

  closePopup(): void {
    this.router.navigate([{outlets: {popup: null}}]);
  }

}
