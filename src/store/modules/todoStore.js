import {observable,action,computed} from 'mobx';
import {fetchGetAllGood} from '@/utils/api';
export default class TestStore{
    @observable goodlist = [];
    @observable list = [];
    @observable total = 0;
    @computed get leng (){
        return this.list.length;
    } 
    @action addTodo(payload){
        this.list.push({id:Date.now(),task:payload});
    }
    @action subTodo(payload){
        this.list.splice(payload,1);
    }
    @action updTodo(payload){
        this.list[payload.idx].task=payload.task;
    }
    @action clsTodo(){
        this.list=[];
    }
    @action getGoods(params){
        fetchGetAllGood(params).then(res=>{
            this.goodlist=res.data;
            this.total = res.total;
        });
    }
}