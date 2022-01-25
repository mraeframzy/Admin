import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-pay-card-patches',
  templateUrl: './insert-pay-card-patches.component.html',
  styles: [
  ]
})
export class InsertPayCardPatchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.service.Payement_Cards_list(this.patch_id).subscribe(res=>{
    //   this.Log_array =res;
    //   this.listData = new MatTableDataSource(this.Log_array);
    //   this.listData.sort = this.sort;
    //   this.listData.paginator=this.paginator;
    //   this.users_loaded_count = this.Log_array.length;
    //   this.users_total_count = this.users_loaded_count;
    //   }
    //   ,err=>{this.notificationservice.send_fail_message("Failed to load Payment Cards")})
    // }else{this.notificationservice.send_fail_message("Please select patch number")}
  }

}
