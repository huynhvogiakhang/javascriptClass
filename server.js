class car {
  constructor(name, type) {
    this._name = name;
    this._type = type;
    this._equipment = 5;
  }
  get name() {
    return this._name
  }
  get type() {
    return this._type
  }
  get equipment() {
    return this._equipment
  }
  increaseEquipment() {
    this._equipment++
  }
}

class truck extends car {
  constructor(name, type) {
    super(name, type)
    this._item = []
  }
  get item() {
    return this._item
  }
  addItem(iteminfo) {
    this._item.push(iteminfo)
  }
}

const firstTruck = new truck('Khang Truck', 'Lamborghini');
firstTruck.addItem('cocacola')
firstTruck.increaseEquipment()
const secondTruck = new truck('Hao Truck', 'Mercedes');
secondTruck.addItem('pepsi')
secondTruck.increaseEquipment()
const thirdTruck = new truck('Truong Truck', 'Nissan');
thirdTruck.addItem('7up')
thirdTruck.increaseEquipment()
const fourthTruck = new truck('Kha Truck', 'Toyota');
fourthTruck.addItem('sting')
fourthTruck.increaseEquipment()
const fifthTruck = new truck('Cung Truck', 'Audi');
fifthTruck.addItem('numberone')
fifthTruck.increaseEquipment()

console.log(firstTruck.name)
console.log(firstTruck.type)
console.log(firstTruck.item)
console.log(firstTruck.equipment)
