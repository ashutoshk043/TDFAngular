import { Component } from '@angular/core';
import { Srecords } from '../srecords';

@Component({
  selector: 'app-studentrecords',
  templateUrl: './studentrecords.component.html',
  styleUrls: ['./studentrecords.component.css']
})
export class StudentrecordsComponent {
    studentsData = new Srecords({
      hindi:12,
      english:12,
      maths:12,
    },
    {
      hindi:112,
      english:112,
      maths:112,
    },
    {
      hindi:312,
      english:312,
      maths:312,
    })
}
