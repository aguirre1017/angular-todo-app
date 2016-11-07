
export class Todo {
    completed: Boolean;
    editing: Boolean;

    private _title : string;
    public get title() : string {
        return this._title;
    }
    public set title(v : string) {
        this._title = v.trim();
    }
    
    constructor(title: String) {
        this.completed = false;
        this.editing = false;
        this.title = title.trim();
    }
}