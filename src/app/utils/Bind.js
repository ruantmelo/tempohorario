import { ProxyFactory } from './ProxyFactory.js';

export class Bind {
    constructor(model, view, ...props) {
        console.log(props)
        let proxy = ProxyFactory.create(model, props, model =>
            view.update(model));

        view.update(model);

        return proxy;
    }
}