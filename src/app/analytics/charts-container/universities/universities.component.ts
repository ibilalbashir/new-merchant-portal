import { Component, OnInit } from '@angular/core';

export interface Elements {
  name: string;
  position: number;
  students: number;
}

const ELEMENT_DATA: Elements[] = [
  { position: 1, name: 'Pu', students: 20 },
  { position: 2, name: 'COMSATS', students: 20 },
  { position: 3, name: 'UOL', students: 20 },
  { position: 4, name: 'UMT', students: 20 },
  { position: 5, name: 'FAST', students: 20 }
];

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'students'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}
