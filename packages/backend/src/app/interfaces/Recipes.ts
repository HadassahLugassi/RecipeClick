export interface Recipes{
    _id:string
    name:string
    img:string
    level:string
    time:number
    type:string
    user_id:string
    components:Array<{"name":string,"quantity":number}>
}