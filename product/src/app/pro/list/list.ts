import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Product } from '../../models/products'; // interface
import { ProductService } from '../../product'; // service

import { Form } from '../form/form';
import { Confirm } from '../confirm/confirm';

@Component({
  selector: 'app-pro-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, Confirm],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  displayedColumns = ['id', 'name', 'category', 'price', 'stock', 'actions'];
  dataSource = new MatTableDataSource<Product>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private productService: ProductService, private dialog:
    MatDialog) { }
  ngOnInit() {
    this.productService.list().subscribe(products => {
      this.dataSource.data = products;
      setTimeout(() => {
        if (this.paginator) this.dataSource.paginator = this.paginator;
        if (this.sort) this.dataSource.sort = this.sort;
      });
    });
  }
  applyFilter(ev: Event) {
    const v = (ev.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = v;
  }
  openAdd() {
    const ref = this.dialog.open(Form, {
      width: '480px',
      data: { mode: 'add' }
    });
  }
  edit(row: Product) {
    this.dialog.open(Form, {
      width: '480px', data: {
        mode: 'edit', product: row
      }
    });
  }
  delete(row: Product) {
    this.dialog.open(Confirm, {
      data: { title: 'Delete Product', message: `Delete ${row.name}?` }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.productService.delete(row.id!).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(p => p.id !== row.id);
        });
      }
    });
  }


}

