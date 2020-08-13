import {observable,action} from 'mobx';
export default class TestStore{
    @observable count = 500;
    @action addCount(payload){
        this.count+=payload;
    }
    @action subCount(payload){
        this.count-=payload;
    }
}