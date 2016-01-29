export default class App {
  name;
  id;
  description;

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.id = Date.now()
  }
}
