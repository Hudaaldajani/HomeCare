import { Component, OnInit, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() deviceXs: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
