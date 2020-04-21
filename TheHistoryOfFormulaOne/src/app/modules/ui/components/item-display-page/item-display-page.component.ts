import { ItemGenericDetail } from './../../../../models/ItemGenericDetail';
import { Component, OnInit } from '@angular/core';
import { ItemDisplayPageGenericData } from 'src/app/models/ItemDisplayPageGenericData';

@Component({
  selector: 'app-item-display-page',
  templateUrl: './item-display-page.component.html',
  styleUrls: ['./item-display-page.component.scss']
})
export class ItemDisplayPageComponent implements OnInit {

  pageData: ItemDisplayPageGenericData;

  details: ItemGenericDetail[] = [
    {attribute: 'attr1', value: 'val1'},
    {attribute: 'attr2', value: 'val2'},
    {attribute: 'attr3', value: 'val3'},
    {attribute: 'attr4', value: 'val4'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
