function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
$parcel$export(module.exports, "cartesianProduct", () => $4fa36e821943b400$export$2e2bcd8739ae039);
/*
The MIT License (MIT)

Copyright (c) 2023 Simon Y. Blackwell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */ function* $4fa36e821943b400$var$cartesian(head, ...tail) {
    const remainder = tail.length > 0 ? $4fa36e821943b400$var$cartesian(...tail) : [
        []
    ];
    for (let r of remainder)for (let h of head)yield [
        h,
        ...r
    ];
}
function $4fa36e821943b400$export$2e2bcd8739ae039(...arrays) {
    if (arrays.length === 0) return;
    const generator = $4fa36e821943b400$var$cartesian(...arrays);
    Object.defineProperty(generator, "length", {
        get () {
            return arrays.reduce((a, b)=>a * b.length, 1);
        }
    });
    return generator;
}


//# sourceMappingURL=cartesian-product.js.map
