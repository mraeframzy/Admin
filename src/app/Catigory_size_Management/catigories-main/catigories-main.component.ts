import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { CatigoriesSizingService } from 'src/app/Shared/catigories-sizing.service';

@Component({
  selector: 'app-catigories-main',
  templateUrl: './catigories-main.component.html',
  styles: []
})
export class CatigoriesMainComponent implements OnInit {
  @ViewChild(MatSelectionList, {static: true})
  private selectionList: MatSelectionList;
  
  constructor( private service : CatigoriesSizingService) { }
List_catigory_1 = [];List_catigory_2 = [];List_catigory_3 = [];List_catigory_4 = [];
  ngOnInit(): void { 
    this.selectionList.selectedOptions = new SelectionModel<MatListOption>(false);
    this.service.get_catigory_1_list_min().subscribe(res => this.List_catigory_1 = res as []);
  }
  cat_1_Change(selected_Cat_1){console.log(selected_Cat_1)}
}
