import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { VinhoReducer } from './_modules/vinho/vinho.reducer';
import { VinhoEffects } from './_modules/vinho/vinho.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartReducer } from './_modules/cart/cart.reducer';
import { CartEffects } from "./_modules/cart/cart.effect";
import {LayoutReducer} from "./_modules/layout/layout.reducer";

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
    productEdit: VinhoState
    products: VinhoState[],
    myProducts: VinhoState[],
    total: number
}

export interface LayoutState {
    showEdit: boolean
}

export interface TryState {
    cart: CartState,
    vinho: VinhoState,
    layout: LayoutState
}

export const reducers: ActionReducerMap<TryState> = {
    cart: CartReducer.reducer,
    vinho: VinhoReducer.reducer,
    layout: LayoutReducer.reducer
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
const CONFIG_EFFECTS_MODULE = [VinhoEffects, CartEffects]

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, CONFIG_STORE_MODULE),
        StoreDevtoolsModule.instrument(CONFIG_STORE_DEV_MODULE),
        EffectsModule.forRoot(CONFIG_EFFECTS_MODULE)
    ],
    exports: [StoreModule, StoreDevtoolsModule, EffectsModule]
})
export class VinhoStoreModule { }
