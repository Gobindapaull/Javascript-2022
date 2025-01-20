import { AsyncLocalStorage } from "async_hooks"

const storage = new AsyncLocalStorage();
console.log(storage);
