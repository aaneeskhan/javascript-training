
// base type OR super type OR parent type
// derived type OR sub  type OR child type

interface Human{
    name:string,
    age:number,
    email:string,
    address:string,
    show1():void
}

interface Men extends Human{
    salary:number,
    games:string
    show2():void
}

interface Women extends Human{
    cooking:string,
    washing:string,
    show3():void

}

interface robot extends Men, Women{

}

// condition Relationship
// inheritance  is a relationship