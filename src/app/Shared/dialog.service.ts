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
import { DialogAddCat1Component } from '../catigories_sizes_management/dialog-add-cat1/dialog-add-cat1.component';
import { DialogAddCat2Component } from '../catigories_sizes_management/dialog-add-cat2/dialog-add-cat2.component';
import { DialogAddCat4Component } from '../catigories_sizes_management/dialog-add-cat4/dialog-add-cat4.component';
import { DialogAddCat3Component } from '../catigories_sizes_management/dialog-add-cat3/dialog-add-cat3.component';
import { DialogAeCatpic1Component } from '../catigories_sizes_management/dialog-ae-catpic1/dialog-ae-catpic1.component';
import { DialogAeCatpic2Component } from '../catigories_sizes_management/dialog-ae-catpic2/dialog-ae-catpic2.component';
import { DialogAeCatpic3Component } from '../catigories_sizes_management/dialog-ae-catpic3/dialog-ae-catpic3.component';
import { DialogAeCatpic4Component } from '../catigories_sizes_management/dialog-ae-catpic4/dialog-ae-catpic4.component';
import { DialogAgerangeAeComponent } from '../catigories_sizes_management/dialog-agerange-ae/dialog-agerange-ae.component';
import { DialogAeSizesComponent } from '../catigories_sizes_management/dialog-ae-sizes/dialog-ae-sizes.component';
import { AddeditMaincolorComponent } from '../color_managment/addedit-maincolor/addedit-maincolor.component';
import { AddeditSubcolorComponent } from '../color_managment/addedit-subcolor/addedit-subcolor.component';
import { AddeditProductcolordetailsComponent } from '../productmanagment/product_color_details/addedit-productcolordetails/addedit-productcolordetails.component';
import { DialogAeSizecatigoriesComponent } from '../catigories_sizes_management/Sizes_Catigories/dialog-ae-sizecatigories/dialog-ae-sizecatigories.component';
import { DialogDisplaySizeComponent } from '../catigories_sizes_management/dialog-display-size/dialog-display-size.component';
import { DialogAeProductavailsizeComponent } from '../productmanagment/product_availiable_sizes/dialog-ae-productavailsize/dialog-ae-productavailsize.component';
import { DialogAeProductpictureComponent } from '../productmanagment/product_pictures/dialog-ae-productpicture/dialog-ae-productpicture.component';
import { AddPaymentComponent } from '../Users_Manegment/Customer_service_Payments/add-payment/add-payment.component';
import { CustomerserviceAddpaymentComponent } from '../Users_Manegment/Customer_service_Payments/customerservice-addpayment/customerservice-addpayment.component';
import { InsertPayCardPatchesComponent } from '../payments/payment_card_patches/insert-pay-card-patches/insert-pay-card-patches.component';
import { UpdatePayCardPatchesComponent } from '../payments/payment_card_patches/update-pay-card-patches/update-pay-card-patches.component';
import { InsertPayCardsComponent } from '../payments/payments_cards/insert-pay-cards/insert-pay-cards.component';
import { UpdatePayCardsComponent } from '../payments/payments_cards/update-pay-cards/update-pay-cards.component';

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

  add_Product_Catigories_1(cat_1_Id:number,has_photos:boolean) {
    return this.dialog.open(DialogAddCat1Component, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {cat_1_Id:cat_1_Id,has_photos:has_photos}
    });
  }

  add_Product_Catigories_2(cat_2_Id: number, related_Cat_1: number, cat_1_name : string,has_photos:boolean) {
    return this.dialog.open(DialogAddCat2Component, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {cat_2_Id:cat_2_Id, related_Cat_1: related_Cat_1,cat_1_name: cat_1_name,has_photos:has_photos}
    });
  }
  add_Product_Catigories_3(cat_3_Id:number,related_Cat_2: number, cat_2_name : string,has_photos:boolean) {
    return this.dialog.open(DialogAddCat3Component, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {cat_3_Id:cat_3_Id, related_Cat_2: related_Cat_2,cat_2_name: cat_2_name,has_photos:has_photos}
    });
  }
  add_Product_Catigories_4(cat_4_Id:number,related_Cat_3: number, cat_3_name : string,has_photos:boolean) {
    return this.dialog.open(DialogAddCat4Component, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {cat_4_Id: cat_4_Id, related_Cat_3: related_Cat_3,cat_3_name: cat_3_name,has_photos:has_photos}
    });
  }

///////////////////////////cat pics
  add_edit_Cat_Pic_1(pic_cat_1_Id: number, related_Cat_1: number,related_Cat_1_name : string) {
    return this.dialog.open(DialogAeCatpic1Component, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {pic_cat_1_Id:pic_cat_1_Id, related_Cat_1: related_Cat_1,related_Cat_1_name:related_Cat_1_name}
    });
  }
  add_edit_Cat_Pic_2(pic_cat_2_Id: number, related_Cat_2: number,related_Cat_2_name:string) {
    return this.dialog.open(DialogAeCatpic2Component, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {pic_cat_2_Id:pic_cat_2_Id, related_Cat_2: related_Cat_2,related_Cat_2_name:related_Cat_2_name}
    });
  }
  add_edit_Cat_Pic_3(pic_cat_3_Id:number,related_Cat_3: number,related_Cat_3_name:string) {
    return this.dialog.open(DialogAeCatpic3Component, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {pic_cat_3_Id:pic_cat_3_Id, related_Cat_3: related_Cat_3,related_Cat_3_name:related_Cat_3_name}
    });
  }
  add_edit_Cat_Pic_4(pic_cat_4_Id:number,related_Cat_4: number,related_Cat_4_name:string) {
    return this.dialog.open(DialogAeCatpic4Component, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {pic_cat_4_Id: pic_cat_4_Id, related_Cat_4: related_Cat_4,related_Cat_4_name:related_Cat_4_name}
    });
  }
  add_edit_age_range(age_range_id:number) {
    return this.dialog.open(DialogAgerangeAeComponent, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {age_range_id: age_range_id}
    });
  }
  add_edit_size(size_id:number,cat_4_id:number,Cat_4_Name:string) {
    return this.dialog.open(DialogAeSizesComponent, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {size_id:size_id,cat_4_id:cat_4_id,Cat_4_Name:Cat_4_Name}
    });
  }
  add_edit_Main_Color(Main_Color_id:number) {
    return this.dialog.open(AddeditMaincolorComponent, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {Main_Color_id:Main_Color_id}
    });
  }
  add_edit_Sub_Color(Sub_Color_id:number,Main_Color_id:number) {
    return this.dialog.open(AddeditSubcolorComponent, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {Sub_Color_id:Sub_Color_id,Main_Color_id:Main_Color_id}
    });
  }
  add_edit_product_Color_Detail(product_Color_Detail_Id:number,product_Color_Detail_Id_Date:number,Product_Color_Id:number,Product_Color_Id_Date:number) {
    return this.dialog.open(AddeditProductcolordetailsComponent, {
      width: '90vw',
      position: { top: "5vh" },
      disableClose: true,
      height: '90vh',
      data: {product_Color_Detail_Id:product_Color_Detail_Id,product_Color_Detail_Id_Date:product_Color_Detail_Id_Date,Product_Color_Id:Product_Color_Id,Product_Color_Id_Date:Product_Color_Id_Date}
    });
  }
  add_edit_Size_Catigories(Size_Catigory_Id:number){
    return this.dialog.open(DialogAeSizecatigoriesComponent,{
    width: '90vw',
    position: { top: "5vh" },
    disableClose: true,
    height: '90vh',
    data : {Size_Catigory_Id:Size_Catigory_Id}
    });
    }
  display_size(size_id:number){
    return this.dialog.open(DialogDisplaySizeComponent,{
    width: '90vw',
    position: { top: "5vh" },
    disableClose: true,
    height: '90vh',
    data : {size_id:size_id}
    });
    }
  add_edit_product_availiable_size(Product_Colors_Availiable_Size_Related_Color_Id:number,Product_Colors_Availiable_Size_Related_Color_Id_Date:number){
    return this.dialog.open(DialogAeProductavailsizeComponent,{
    width: '90vw',
    position: { top: "5vh" },
    disableClose: true,
    height: '90vh',
    data : {Product_Colors_Availiable_Size_Related_Color_Id:Product_Colors_Availiable_Size_Related_Color_Id,Product_Colors_Availiable_Size_Related_Color_Id_Date:Product_Colors_Availiable_Size_Related_Color_Id_Date}
    });
    }
    add_edit_Product_Pictures(Product_Picture_Id:number,Product_Picture_Id_Date:number,Product_Color_Id:number,Product_Color_Id_Date:number) {
      return this.dialog.open(DialogAeProductpictureComponent, {
        width: '90vw',
        position: { top: "5vh" },
        disableClose: true,
        height: '90vh',
        data: {Product_Picture_Id:Product_Picture_Id,Product_Picture_Id_Date:Product_Picture_Id_Date,Product_Color_Id:Product_Color_Id,Product_Color_Id_Date:Product_Color_Id_Date}
      });
    }
    add_edit_payments(payment_id:number,payment_id_date:number) {
      return this.dialog.open(AddPaymentComponent, {
        width: '90vw',
        position: { top: "5vh" },
        disableClose: true,
        height: '90vh',
        data: {payment_id:payment_id,payment_id_date:payment_id_date}
      });
    }
    add_Customer_service_payments(user_id:number) {
      return this.dialog.open(CustomerserviceAddpaymentComponent, {
        width: '90vw',
        position: { top: "5vh" },
        disableClose: true,
        height: '90vh',
        data: {user_id:user_id}
      });
    }
    add_Payment_cards() {
      return this.dialog.open(InsertPayCardsComponent, {
        width: '90vw',
        position: { top: "5vh" },
        disableClose: true,
        height: '90vh'
      });
    }
    edit_Payment_cards(pay_card_id:number,pay_card_id_date:number) {
      return this.dialog.open(UpdatePayCardsComponent, {
        width: '90vw',
        position: { top: "5vh" },
        disableClose: true,
        height: '90vh',
        data: {pay_card_id:pay_card_id,pay_card_id_date:pay_card_id_date}
      });
    }
}