import { Component, Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VinhoSelector } from '../../_store/_modules/vinho/vinho.selector';
import { VinhosAction } from '../../_store/_modules/vinho/vinho.action';
import {
  CartState,
  VinhoState,
  LayoutState
} from '../../_store/vinho-store.module';
import { Observable } from 'rxjs';
import { LayoutSelector } from 'src/app/_store/_modules/layout/layout.selector';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
@Injectable()
export class ProductFormComponent implements OnInit {
  todoForm: FormGroup;
  productEdit$: Observable<VinhoState> = undefined;
  productInEdition: any;
  showEdit$: Observable<boolean>;

  constructor(
    private store: Store<CartState>,
    private formBuilder: FormBuilder
  ) {
    this.inicializarForm();
  }

  async ngOnInit() {
    this.showEdit$ = this.store.select(LayoutSelector.showEdit);
    this.productEdit$ = this.store.select(VinhoSelector.productEdit);

    this.productEdit$
      .pipe(
        map(productEdit => {
          console.log("productEdit", productEdit)
          
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

  // mountObjEditProduct(productEdit) {
  //   let objTemp = {
  //     descricao: this.todoForm.value.descricao,
  //     fotos: productEdit.fotos,
  //     id: productEdit.id,
  //     nome: this.todoForm.value.nome,
  //     pais: productEdit.pais,
  //     preco: productEdit.preco,
  //     quantidade: productEdit.quantidade,
  //     safra: productEdit.safra
  //   };
  //   return objTemp;
  // }

  async edit(productEdit) {
    console.log("Send edit", productEdit)
    this.store.dispatch(
      VinhosAction.editVinhosEffect({
        payload: productEdit
      })
    );
    this.clearEdit();
  }

  clearEdit() {
    this.store.dispatch(VinhosAction.clearEdit({ payload: null }));
  }
}
