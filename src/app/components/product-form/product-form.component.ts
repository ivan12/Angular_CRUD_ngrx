import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { CartState, VinhoState } from '../../_store/vinho-store.module';
import {StoreVinhoAction} from "../../_store/_modules/storeVinho/storeVinho.action";
import {StoreVinhoSelector} from "../../_store/_modules/storeVinho/storeVinho.selector";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
@Injectable()
export class ProductFormComponent implements OnInit {
  todoForm: FormGroup;
  productEdit$: Observable<VinhoState> = undefined;

  constructor(
    private store: Store<CartState>,
    private formBuilder: FormBuilder,
  ) {
    this.inicializarForm();
  }

  async ngOnInit() {
    this.productEdit$ = this.store.select(StoreVinhoSelector.productEdit);

    this.productEdit$.pipe(
        map(productEdit => {
          try {
            this.todoForm.setValue(productEdit)
          } catch (error) {
            console.log(error)
          }
        })
    )
    .subscribe();
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
      safra: [null, Validators.required],
      quantidadeCarrinho: [null, Validators.required]
    });
  }

  async edit(productEdit) {
    this.store.dispatch(StoreVinhoAction.editVinhosEffect({payload: productEdit}));
    this.clearEdit();
  }

  clearEdit() {
    this.store.dispatch(StoreVinhoAction.clearEdit({ payload: null }));
  }
}
