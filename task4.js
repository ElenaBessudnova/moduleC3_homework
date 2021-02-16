function ElectricalAppliances(name,voltage,power){
    this.name=name;
    this.voltage=voltage;
    this.power=power;
    this.isPower=false;
}

ElectricalAppliances.prototype.setOnPower=function (){
    this.isPower=true;
    console.log(this.name + " is powered on");
}

ElectricalAppliances.prototype.setOffPower=function (){
    this.isPower=false;
    console.log(this.name + " is powered off");
}
TVAppliances.prototype=new ElectricalAppliances();

function TVAppliances(name,model,voltage,power,diagonal){
    this.name=name;
    this.voltage=voltage;
    this.power=power;
    this.model=model;
    this.diagonal=diagonal;
    this.isPower=false;
}

KettleAppliances.prototype=new ElectricalAppliances();

function KettleAppliances(name,material,voltage,power,model){
    this.name=name;
    this.voltage=voltage;
    this.power=power;
    this.model=model;
    this.material=material;
    this.isPower=false;
}


const homeTV=new TVAppliances("LG","C920",220,100,43);
const officeKettle=new KettleAppliances("Tefal","metal",220,200,"D567");

homeTV.setOffPower();
officeKettle.setOnPower();

console.log(homeTV);
console.log(officeKettle);

