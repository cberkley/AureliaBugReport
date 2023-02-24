import { bindable } from "aurelia";

export class NameTag {
    @bindable name: string = "Default Name";
    @bindable homeTown: string = "Town";

    
}