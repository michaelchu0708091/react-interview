import { EventEmitter } from "events";

class StockTracker {
  private emitter = new EventEmitter();
  private intervalId = 0;
  private price = Math.random() * 100;

  constructor(private stock: string) {
    this.intervalId = setInterval(() => {
      const delta = Math.random() * 2 * (Math.random() > 0.5 ? 1 : -1);
      this.emitter.emit("data", {
        name: this.stock,
        price: (this.price + delta).toFixed(2),
      });
    }, 1500);
  }

  public on(name: string, callback: any) {
    this.emitter.on(name, callback);
  }

  public stop() {
    clearInterval(this.intervalId);
    this.emitter.removeAllListeners();
  }
}

export default StockTracker;
