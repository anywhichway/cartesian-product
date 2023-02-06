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
 */ function* $cf838c15c8b009ba$var$cartesian(head, ...tail) {
    const remainder = tail.length > 0 ? $cf838c15c8b009ba$var$cartesian(...tail) : [
        []
    ];
    for (let r of remainder)for (let h of head)yield [
        h,
        ...r
    ];
}
function $cf838c15c8b009ba$export$2e2bcd8739ae039(...arrays) {
    if (arrays.length === 0) return;
    const generator = $cf838c15c8b009ba$var$cartesian(...arrays);
    Object.defineProperty(generator, "length", {
        get () {
            return arrays.reduce((a, b)=>a * b.length, 1);
        }
    });
    return generator;
}


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default, $cf838c15c8b009ba$export$2e2bcd8739ae039 as cartesianProduct};
//# sourceMappingURL=index.js.map
