import { Plugin, resolveConfig } from 'vite'
const vitrual='virtual:fib'
const path='\0'+vitrual
function myplugin(params?:any):Plugin {
    let config: any= null;
    return {
        name: 'myplugin',
        resolveId(id) {
            if (id == vitrual) {
                return path
            }
        },
        load(id) {
            if (id == path) {
                return "export default function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }"; 
            }
        }
        
    }
}
export default myplugin