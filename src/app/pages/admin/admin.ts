import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Adminauth } from '../../services/adminauth';
import { FirebaseService } from '../../services/firebase-service';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {

  activeTab: string = 'cars';

  cars: any[] = [];
  houses: any[] = [];

  newCar: any = {};
  newHouse: any = {};

  fileCar!: File;
  fileHouse!: File;

  constructor(
    private auth: Adminauth,
    private fb: FirebaseService
  ) {}

  ngOnInit() {
    this.fb.getCars().subscribe(data => this.cars = data);
    this.fb.getHouses().subscribe(data => this.houses = data);
  }

  // ================= FILE HANDLER =================
  onFileSelected(event: any, type: string) {
    const file = event.target.files[0];

    if (type === 'car') this.fileCar = file;
    if (type === 'house') this.fileHouse = file;
  }

  // ================= CREATE BASE64 =================
  async addCar() {
    if (!this.fileCar) return;

    const base64 = await this.fb.fileToBase64(this.fileCar);

    await this.fb.addCar({
      title: this.newCar.title,
      desc: this.newCar.desc,
      img: base64
    });

    this.newCar = {};
    this.fileCar = undefined!;
  }

  async addHouse() {
    if (!this.fileHouse) return;

    const base64 = await this.fb.fileToBase64(this.fileHouse);

    await this.fb.addHouse({
      title: this.newHouse.title,
      desc: this.newHouse.desc,
      img: base64
    });

    this.newHouse = {};
    this.fileHouse = undefined!;
  }

  // ================= DELETE =================
  deleteCar(id: string) {
    this.fb.deleteCar(id);
  }

  deleteHouse(id: string) {
    this.fb.deleteHouse(id);
  }

  // ================= UPDATE =================
  updateCar(car: any) {
    this.fb.updateCar(car.id, {
      title: car.title,
      desc: car.desc,
      img: car.img 
    });
  }

  updateHouse(house: any) {
    this.fb.updateHouse(house.id, {
      title: house.title,
      desc: house.desc,
      img: house.img
    });
  }

  // ================= AUTH =================
  logout() {
    this.auth.logout();
  }
}