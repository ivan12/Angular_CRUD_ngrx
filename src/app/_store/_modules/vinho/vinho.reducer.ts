import { createReducer, on, Action } from '@ngrx/store'
import { VinhoAction } from './vinho.action';
import { VinhoState} from '../../vinho-store.module';

export namespace VinhoReducer {
    const vinho: {
        descricao: string, fotos: [], id: string, nome: string, pais: string, preco: number, quantidade: string,
        quantidadeCarrinho: number, safra: string;
    } = {
        descricao: '', fotos: [], id:  '', nome: '', pais: '', preco: 0, quantidade: '', quantidadeCarrinho: 0, safra: ''
    }

    const _addQuantidadeVinho = (state: VinhoState, action: Action) => ({ ...state,  quantidadeCarrinho: (state.quantidadeCarrinho + 1)});
    const _decrementQuantidadeVinho = (state: VinhoState, action: Action) => ({ ...state,  quantidadeCarrinho: (state.quantidadeCarrinho - 1)});

    const _setVinho = (state: any, action: any) => ({ ...state, vinho: action['payload']});

    const _vinhoReduces = createReducer(vinho,
        on(VinhoAction.addQuantidadeVinho, _addQuantidadeVinho),
        on(VinhoAction.decrementQuantidadeVinho, _decrementQuantidadeVinho),
        on(VinhoAction.setVinho, _setVinho),
    )
    export function reducer(state: any, action: Action) {
        return _vinhoReduces(state, action)
    }
}