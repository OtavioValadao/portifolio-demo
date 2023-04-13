import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.css']
})
export class ModalButtonComponent {

  @Input() texto : String | undefined;
  @Input() titulo : String | undefined;
  @Input() habilidade : String | undefined;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(event: any) {
		this.modalService.open(event);
	}
}
