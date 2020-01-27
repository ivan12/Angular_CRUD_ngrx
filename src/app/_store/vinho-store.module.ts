import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CartReducer } from './_modules/cart/cart.reducer';
import { CartEffects } from './_modules/cart/cart.effect';
import { StoreVinhoEffect } from './_modules/storeVinho/storeVinho.effect';
import {StoreVinhoReducer} from "./_modules/storeVinho/storeVinho.reducer";

export interface VinhoState {
    id: string
    nome    : string
    safra   : string
    quantidade: string
    quantidadeCarrinho: 1
    fotos: []
    preco: number
    descricao: string
    pais: string
}

export interface CartState {
    items: VinhoState[],
    totalPrice: number
}

export interface StoreVinhoState {
    products: VinhoState[],
    productEdit: VinhoState
}

export interface TryState {
    cart: CartState,
    storeVinho: StoreVinhoState
}

export const reducers: ActionReducerMap<TryState> = {
    cart: CartReducer.reducer,
    storeVinho: StoreVinhoReducer.reducer,
};

export const metaReducers: MetaReducer<TryState>[] = !environment.production ? [] : [];

const CONFIG_STORE_MODULE = {
    metaReducers: [],
    runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
    }
}

const CONFIG_STORE_DEV_MODULE = { maxAge: 100, logOnly: environment.production }
const CONFIG_EFFECTS_MODULE = [StoreVinhoEffect, CartEffects]

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, CONFIG_STORE_MODULE),
        StoreDevtoolsModule.instrument(CONFIG_STORE_DEV_MODULE),
        EffectsModule.forRoot(CONFIG_EFFECTS_MODULE)
    ],
    exports: [StoreModule, StoreDevtoolsModule, EffectsModule]
})
export class VinhoStoreModule { }
