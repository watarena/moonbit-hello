import { readFileSync } from 'fs';

async function runWASM(path) {
    console.log('---');
    console.log(`wasm file: ${path}`);
    const wasm = readFileSync(path);

    await WebAssembly.instantiate(wasm, {
        spectest: {
            print_char: (c) => { process.stdout.write(String.fromCharCode(c)); }
        }
    }).then((obj) => {
        console.log('--- start ---');
        obj.instance.exports._start();
        console.log('--- exports ---');
        console.dir(obj.instance.exports);
        console.log('--- call hello ---');
        const hello = obj.instance.exports['hello']();
        const ret = obj.instance.exports['handle_string'](hello);
        console.log(`${ret}`)
    });
}

await runWASM(`target/wasm/release/build/lib/lib.wasm`);
await runWASM(`target/wasm/release/build/main/main.wasm`);
await runWASM(`target/wasm/release/build/hello.wasm`);
