// deno-lint-ignore-file
type ways="byEath"|"byAir";

class Transport{
    private velocity:number;
    private wayToMove:ways;
       name!: string;
    constructor(velocity:number,wayToMove:ways){
        this.velocity=velocity;
        this.wayToMove=wayToMove;
     

    }

    getVelocity(){
        return this.velocity;
    }
    setVelocity(velocity:number){
        this.velocity=velocity;
    } 
    getWaytoMove(){
        return this.wayToMove;
    }
    setWaytoMove(wayToMove:ways){
        this.wayToMove=wayToMove;
    }
}

const transport:Transport=new Transport(20,'byAir');

class Auto extends Transport{
    private numberDoor:number;
    constructor(velocity:number,wayToMove:ways,numberDoor:number){
       super(velocity,wayToMove);
       this.numberDoor=numberDoor;
    }

    getVelocity(){
        return super.getVelocity()+10;
    }
    getAmountDoor(){
        return this.numberDoor;
    } 
    setAmountDoor(numberDoor:number){
        this.numberDoor=numberDoor;
    }
}

const auto:Auto=new Auto(23,"byEath",3)
console.log(auto.getVelocity());



