import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-icons',
  templateUrl: './custom-icons.component.html',
  styleUrls: ['./custom-icons.component.css']
})
export class CustomIconsComponent {

  @Input() font : String | undefined

  @Input() color : String | undefined

  @Input() bootstrapIcon : String | undefined


}
