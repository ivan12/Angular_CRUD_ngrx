import {Component, Injectable, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';
import { Observable } from 'rxjs';
import {Edit} from "../../actions/cart.action";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VinhoService} from "../../services/vinho.service";
import { CartSelector } from "../../selectors/selector.product";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
@Injectable()
export class ProductFormComponent implements OnInit {
  editando: boolean = false;
  todoForm: FormGroup;
  productEdit = undefined;

  constructor(
    private store: Store<CartModel>,
    private formBuilder: FormBuilder,
    private vinhoService: VinhoService
  ) {
    this.inicializarForm();
  }

  async ngOnInit() {
    this.editando = false;

    this.store.select(CartSelector.productEdit).subscribe((val) => {
      console.log('store.select val = ', val);
      this.productEdit = val;
      this.setFormGroup(this.productEdit);
    });
  }

  setFormGroup(productEdit) {
    if (productEdit) {
      this.todoForm.patchValue({
        id: productEdit.id,
        nome: productEdit.nome,
        descricao: productEdit.descricao,
        fotos: productEdit.fotos,
        pais: productEdit.pais,
        preco: productEdit.preco,
        quantidade: productEdit.quantidade,
        safra: productEdit.safra,
      });
      this.editando = true;
      return true;
    } else {
      return false;
    }
  }

  inicializarForm() {
    this.todoForm = this.formBuilder.group({
      id: [null, Validators.required],
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      fotos: [null, Validators.required],
      pais: [null, Validators.required],
      preco: [null, Validators.required],
      quantidade: [null, Validators.required],
      safra: [null, Validators.required]
    });
  }

  async edit() {
    this.vinhoService.edit(this.todoForm.value).subscribe(res => {
      console.log('edit() res = ', res);
    });
    this.store.dispatch(Edit(this.todoForm.value));
    this.editando = false;
  }
}