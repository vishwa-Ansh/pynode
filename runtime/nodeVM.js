import vm from "vm";

export const nodeContext = vm.createContext({
    console
});