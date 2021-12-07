import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css'],
})
export class ListClienteComponent implements OnInit {
  ELEMENT_DATA: Cliente[] = [];

  displayedColumns: string[] = [
    'nomeComp',
    'cpf',
    'tel',
    'email',
  ];

  constructor() {}

  ngOnInit(): void {}
}
