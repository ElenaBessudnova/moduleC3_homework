class ElectricalAppliances{
    constructor(name,voltage,power) {
        this.name=name;
        this.voltage=voltage;
        this.power=power;
        this.isPower=false;
    }
    setOnPower(){
        this.isPower=true;
        console.log(this.name + " is powered on");
    }
    setOffPower(){
        this.isPower=false;
        console.log(this.name + " is powered off");
    }
}

class TVAppliances extends ElectricalAppliances{
    constructor(name,model,voltage,power,diagonal) {
        super(name,voltage,power);
        this.model=model;
        this.diagonal=diagonal;
        this.isPower=false;
    }
}

class KettleAppliances extends ElectricalAppliances{
    constructor(name,material,voltage,power,model) {
        super(name,voltage,power);
        this.model=model;
        this.material=material;
        this.isPower=false;

    }

}

const homeTV=new TVAppliances("LG","C920",220,100,43);
const officeKettle=new KettleAppliances("Tefal","metal",220,200,"D567");

homeTV.setOffPower();
officeKettle.setOnPower();

console.log(homeTV);
console.log(officeKettle);

