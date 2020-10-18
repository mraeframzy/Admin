import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BranchManagementService } from 'src/app/Shared/branch-management.service';

@Component({
  selector: 'app-dialog-link',
  templateUrl: './dialog-link.component.html',
  styles: []
})
export class DialogLinkComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DialogLinkComponent>,public service :BranchManagementService) { }

  ngOnInit(): void {
  }
  closeDialog(x,y) { var new_owner = { lat: x, lng: y }; this.dialogRef.close(new_owner); }
  return_location(form : FormGroup){
    if(form.valid){
      var string_1 = form.controls['Link'].value;
      var array_1 = string_1.split("@");
      var array_2 = array_1[1].split(",");
      this.closeDialog(array_2[0],array_2[1]);}   
    }
}
