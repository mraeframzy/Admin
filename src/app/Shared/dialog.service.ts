import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../general/mat-confirm-dialog/mat-confirm-dialog.component';
import { DialogSearchUserComponent } from '../users_manegment/dialog-search-user/dialog-search-user.component';
import { DialogUserDetailsComponent } from '../users_manegment/dialog-user-details/dialog-user-details.component';
import { DialogPicCompComponent } from '../companies_managment/dialog-pic-comp/dialog-pic-comp.component';
import { DialogLinkComponent } from '../location/dialog-link/dialog-link.component';
import { DialogMapComponent } from '../location/dialog-map/dialog-map.component';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogManualComponent } from '../location/dialog-manual/dialog-manual.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog, public FB: FormBuilder) { }
  //confirm dialog box
  openConfirmDialog(msg) {
    return this.dialog.open(MatConfirmDialogComponent, {
      width: '390px;',
      position: { top: "10px" },
      disableClose: true,
      data: { message: msg }
    });
  }

  //searchuser
  opensearchuserDialog() {
    return this.dialog.open(DialogSearchUserComponent, {
      width: '80%;',
      position: { top: "2%" },
      disableClose: true
    });
  }

  //userdetails
  openuserdetailsDialog(userid) {
    return this.dialog.open(DialogUserDetailsComponent, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: { message: userid }
    });
  }

  //
  open_company_pic_Dialog(company_pic_id: number, company_id: number) {
    return this.dialog.open(DialogPicCompComponent, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: { message: company_pic_id, Company_id: company_id }
    });
  }

  // set location by link
  open_location_link() {
    return this.dialog.open(DialogLinkComponent, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh'
    });
  }
  //set location by manual
  open_location_manual() {
    return this.dialog.open(DialogManualComponent, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh'
    });
  }

  //set location by map
  open_location_map(lat: number, lng: number) {
    return this.dialog.open(DialogMapComponent, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: { lat: lat, lng: lng }
    });
  }
}
