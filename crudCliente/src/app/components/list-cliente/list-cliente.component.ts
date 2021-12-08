import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/services/Cliente.Service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css'],
})
export class ListClienteComponent implements OnInit {
  ELEMENT_DATA: Cliente[] = [];
  clienteDelete: Cliente = {
    id: undefined,
    nome: undefined,
    cpf: undefined,
    bairro: undefined,
    cidade: undefined,
    uf: undefined,
    cep: undefined,
    logradouro: undefined,
    complemento: undefined,
    numero: undefined,
    tipoTelefone: undefined,
    telefone: undefined,
    email: undefined
  };

  displayedColumns: string[] = [
    'nome',
    'cpf',
    'tel',
    'email',
    'acoes',
  ];

  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(
    private toast: ToastrService,
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.findAll();
    this.clienteDelete.id = this.route.snapshot.paramMap.get('id');
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Cliente>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(): void {
    this.service.delete(this.clienteDelete.id).subscribe(
      () => {
        this.toast.success('Veículo deletado com sucesso', 'Delete');
        this.router.navigate(['listCliente']);
      },
      (ex) => {
        if (ex.error.errors) {
            this.toast.error('Opss ');
        } else {
          this.toast.error(ex.error.message);
        }
      }
    );
  }
}
