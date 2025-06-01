import { style } from '@angular/animations';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  name: string;
  surname: string;
  email: string;
  phone: string;
  birthday: string;
  city: string;
  address: string;
  occupation: string;
}

@Component({
  selector: 'app-table-element',
  standalone: true,
  imports: [NgIf, NgStyle, NgFor],
  templateUrl: './table-element.component.html',
  styleUrl: './table-element.component.scss'
})

export class TableElementComponent {
  title: string;
  users: User[];
  actived: boolean;
  color: string;
  fontSize: number;
  showName: boolean;
  showBirthday: boolean;
  showAddress: boolean;
  showOccupation: boolean;

  constructor() {
    this.title = 'Table Component';
    this.actived = false;
    this.showName = true;
    this.showBirthday = true;
    this.showAddress = false;
    this.showOccupation = false;
    this.color = 'black';
    this.fontSize = 18;
    this.users = [
      { name: 'Lucas', surname: 'Romero', email: 'lucas.romero@mail.com', phone: '634-210-987', birthday: '1990-05-12', city: 'Madrid', address: 'Calle Mayor 10', occupation: 'Engineer' },
      { name: 'Carla', surname: 'Fernández', email: 'carlaf@mail.com', phone: '612-543-220', birthday: '1988-08-30', city: 'Valencia', address: 'Avenida del Sol 25', occupation: 'Teacher' },
      { name: 'Javier', surname: 'Molina', email: 'jm.molina@mail.com', phone: '691-002-112', birthday: '1993-03-25', city: 'Sevilla', address: 'Plaza Nueva 5', occupation: 'Doctor' },
      { name: 'Marta', surname: 'Ruiz', email: 'marta.ruiz91@mail.com', phone: '645-781-999', birthday: '1991-07-17', city: 'Zaragoza', address: 'Calle Luna 12', occupation: 'Designer' },
      { name: 'Andrés', surname: 'Ortega', email: 'andres.ortega@mail.com', phone: '678-345-221', birthday: '1987-02-14', city: 'Granada', address: 'Camino Real 7', occupation: 'Programmer' },
      { name: 'Lucia', surname: 'Torres', email: 'lucia_torres@mail.com', phone: '699-004-785', birthday: '1995-10-05', city: 'Málaga', address: 'Paseo Verde 20', occupation: 'Architect' },
      { name: 'Diego', surname: 'Navarro', email: 'dnavarro93@mail.com', phone: '633-209-001', birthday: '1992-11-22', city: 'Alicante', address: 'Calle Jardín 3', occupation: 'Accountant' },
      { name: 'Ana', surname: 'Gómez', email: 'ana.gomez@mail.com', phone: '655-003-992', birthday: '1989-06-10', city: 'Bilbao', address: 'Avenida Central 8', occupation: 'Lawyer' },
      { name: 'Pablo', surname: 'Sánchez', email: 'psanchez@mail.com', phone: '610-870-321', birthday: '1994-04-01', city: 'Valladolid', address: 'Calle del Río 15', occupation: 'Nurse' },
      { name: 'Laura', surname: 'Díaz', email: 'laura.dz@mail.com', phone: '690-345-678', birthday: '1996-12-09', city: 'Salamanca', address: 'Plaza del Mercado 2', occupation: 'Journalist' },
      { name: 'Marcos', surname: 'Vidal', email: 'marcos.vidal@mail.com', phone: '688-987-543', birthday: '1985-01-18', city: 'Coruña', address: 'Calle Robles 9', occupation: 'Chef' },
      { name: 'Natalia', surname: 'Herrera', email: 'nat.herrera@mail.com', phone: '677-456-098', birthday: '1990-09-27', city: 'Tarragona', address: 'Avenida Libertad 14', occupation: 'Photographer' }
    ];
  }

  toggle() {
    this.actived = !this.actived;
    this.showName = !this.showName;
    this.showBirthday = !this.showBirthday;
    this.showOccupation = !this.showOccupation;
    this.showAddress = !this.showAddress;

    if (this.actived) {
      this.color = 'blue';
      this.fontSize = 24;
    } else {
      this.color = 'red';
      this.fontSize = 14;
    }
  }
}

