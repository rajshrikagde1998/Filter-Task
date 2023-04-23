import { Component, OnInit } from '@angular/core';
import { Iplayers } from './shared/models/data';
import { cricketers } from './shared/const/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  searchByValue ! :string
  ngOnInit(): void {
    
  }
   playerArr : Iplayers[] =cricketers
}
