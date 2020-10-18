import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSearchUserComponent } from 'src/app/users_manegment/dialog-search-user/dialog-search-user.component';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-map',
  templateUrl: './dialog-map.component.html',
  styles: []
})
export class DialogMapComponent implements OnInit {
  map: google.maps.Map;
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DialogMapComponent>) { }

  ngOnInit(): void {
    let x = this.data.lat;
    let y = this.data.lng;
    
    initMap(x, y);
  }
  closeDialog(x,y) { var new_owner = { lat: x, lng: y }; this.dialogRef.close(new_owner); }
return_location(){
  if (is_clicked = true){this.closeDialog(lat2,lng2);}else{
    this.closeDialog(0,0);
  }
  }
}

var map;
var lat1 = 30.0594838;
var lng1 = 31.2234448;
var lat2 = 0;var lng2 = 0;
var uluru = { lat: lat1, lng: lng1 };
var marker1;
var is_clicked = false;
function initMap(x, y): void {
  if (x == 0 && y == 0) {       //map has no center
    map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 16, center: uluru,
      mapTypeId: 'terrain'
    });
    marker1 = new google.maps.Marker({ position: uluru, map: map });    //marker on map load
}
  else{     //map has center
    let uluru3 = { lat: +x, lng: +y };
    map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 16, center: uluru3,
      mapTypeId: 'terrain'
    });
    marker1 = new google.maps.Marker({ position: uluru3, map: map });    //marker on map load
      }
  //listen to click
  map.addListener('click', function (e) {
    is_clicked = true;
     lat2 = e.latLng.lat();
     lng2 = e.latLng.lng();
    var uluru2 = { lat: lat2, lng: lng2 };
    //marker1 = new google.maps.Marker({ position: uluru, map: map });
    marker1.setMap(null);
    marker1 = new google.maps.Marker({ position: uluru2, map: map });
    map.panTo(uluru2);
  });    
}