import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartState, VinhoState } from '../../_store/vinho-store.module';
import { CartSelector } from '../../_store/_modules/cart/cart.selector';
import { CartAction } from '../../_store/_modules/cart/cart.action';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
@Injectable()
export class ProductFormComponent implements OnInit {
  todoForm: FormGroup;
  productEdit$: Observable<VinhoState> = undefined;

  constructor(
    private store: Store<CartState>,
    private formBuilder: FormBuilder,
  ) { }

  async ngOnInit() {
    this.inicializarForm();
    this.productEdit$ = this.store.select(CartSelector.productEdit);
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

  async edit(productEdit) {
    this.store.dispatch(CartAction.editVinhosEffect({payload: this.mountObjEditProduct(productEdit)}));
    this.clearEdit();
  }

  mountObjEditProduct(productEdit) {
    let objTemp = {
      descricao: this.todoForm.value.descricao,
      fotos: productEdit.fotos,
      id: productEdit.id,
      nome: this.todoForm.value.nome,
      pais: productEdit.pais,
      preco: productEdit.preco,
      quantidade: productEdit.quantidade,
      quantidadeCarrinho: productEdit.quantidadeCarrinho,
      safra: productEdit.safra,
    }
    return objTemp;
  }

  clearEdit() {
    this.store.dispatch(CartAction.clearEdit({payload: null}));
  }
}