
class Developer{
    // 1 constructor function
    // 2 prototype function
    // 3 static function

    // property or data member or field instance variable
    // access specifier
    // public
    // private
    // protected
    private _id:number;
    private name:string;
    private salary:number;
    private static count:number=0;

   public    constructor(id:number, name:string, salary:number){
        this._id=id,
        this.name=name,
        this.salary=salary;
        Developer.count++;
    }


    // public setData(id:number, name:string, salary:number){
    //     this.id=id,
    //     this.name=name,
    //     this.salary=salary;
    // }

// setter and getter
// read and write
// mutator and accessor

     public  get id(){
        return this._id;
    }

      public set id(id:number){
            this._id=id;
     }
   
     public getData(){
        let arr:[number, string]=[ this.id, this.name];
        // let c=[this.id, this.name]
        return arr;
     }
    // read and write
    public  get Name(){
        return this.name;
    }
     public set Name(name:string){
        if(name !=="" && name.length > 5){
            this.name=name;
        }
        else
            console.log("lenght must me greate than 4 and not emplty")
    }


    public get Salary(){
        return this.salary;
    }

   

    public set Salary(sal:number){
        this.salary=sal;
    }
   public  showDetails(){
        console.log(`Id : ${this.id} Name : ${this.name} Salary ${this.salary}`) 
    }

   public static showTotalEmployee(){
        console.log(`Total Developers Created ${Developer.count}`)
    }

}


let d1= new Developer(101,"Ifra",70000); // constructor() implicitly call constructor function;
//  console.log(d1.getName());
// d1.getName("ksjdf")
  d1.Name="ifram mir"
  let n= d1.Name;
d1.id=201;
 //console.log(n)
 let r= d1.getData();
 console.log('fff',r)


