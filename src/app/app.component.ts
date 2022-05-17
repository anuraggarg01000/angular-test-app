import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test-app'
  success_msg = true
  superPower ='wonderwoman'
  styleProp = 'purple'
  contacts =[
    {
      'FirstName' : 'Anurag',
      'LastName'  : 'Garg',
      'Age'        : "20",
    }, 
    {
      'FirstName' : 'Manav',
      'LastName'  : 'Bansal',
      'Age'        : "21",
    }
  ]
}
