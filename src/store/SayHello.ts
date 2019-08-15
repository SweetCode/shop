import { action, computed, observable } from 'mobx'

export default class SayHello {
    @observable public world : string  = 'asdads';
    @action 
    public setWorld(world: string):void{
        this.world = world
    }
    @computed 
    get getWorld(): string{
        return this.world
    }
}
