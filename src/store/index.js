import TestStore from "./modules/testStore";
import TodoStore from "./modules/todoStore";
class Store{
    constructor(){
        this.testStore=new TestStore();
        this.todoStore=new TodoStore();
    }
}
export default new Store();