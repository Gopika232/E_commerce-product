import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { producerUpdatesAllowed } from '@angular/core/primitives/signals';
import { Product } from '../../models/products'; // interface
import { ProductService } from '../../product'; // service


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatDialogModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class Form {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    public dialogRef: MatDialogRef<Form>,
    @Inject(MAT_DIALOG_DATA) public data: { product?: Product; mode: 'add' | 'edit' }
  ) {
    this.form = this.fb.group({
      id: [data?.product?.id?? null],
      name: [data?.product?.name?? '', Validators.required],
      description: [data?.product?.description ?? ''],
      price: [data?.product?.price ?? null, Validators.required],
      category: [data?.product?.category ?? ''],
      stock: [data?.product?.stock ?? null],
    });
  }

  save() {
    if (this.form.invalid) return;
    const v = this.form.value as Product;
    if (this.data.mode === 'add') {
      this.productService.add(v).subscribe(() => this.dialogRef.close(true));
    } else {
      this.productService.update(v).subscribe(() => this.dialogRef.close(true));
    }
  }
}