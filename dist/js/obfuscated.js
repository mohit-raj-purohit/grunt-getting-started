!function(a,b){function c(b,d){var e,f;if("\x2e"!=b[0]&&"\x2f"!=b[0])return a(b);if(d=d||"\x72\x6f\x6f\x74",e=c.resolve(b),!e&&/\.json$/i.test(b))return a("\x2e\x2f"+c.basename(b));if(f=c.cache[e],!f)try{return a(b)}catch(g){throw Error("\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x71\x75\x69\x72\x65\x20\x22"+b+"\x22\x20\x66\x72\x6f\x6d\x20"+d+"\n"+g.message+"\n"+g.stack)}return f.exports||(f.exports={},f.call(f.exports,f,f.exports,c.relative(e))),f.exports}c.cache={},c.basename=a("\x70\x61\x74\x68").basename,c.resolve=function(b){var d,e,f,g;if("\x2e"!=b[0])return a.resolve(b);for(d="\x2f"===b.slice(-1)?b:b+"\x2f",e=[b,b+"\x2e\x6a\x73",d+"\x69\x6e\x64\x65\x78\x2e\x6a\x73",b+"\x2e\x6a\x73\x6f\x6e",d+"\x69\x6e\x64\x65\x78\x2e\x6a\x73\x6f\x6e"],f=0;g=e[f];f++)if(c.cache[g])return g},c.register=function(a,b){c.cache[a]=b},c.relative=function(a){function b(b){var d,e,f,g,h;if("\x2e"!=b[0])return c(b);for(d=a.split("\x2f"),e=b.split("\x2f"),d.pop(),f=0,g=e.length;g>f;f+=1)h=e[f],"\x2e\x2e"==h?d.pop():"\x2e"!=h&&d.push(h);return c(d.join("\x2f"),a)}return b.resolve=c.resolve,b.cache=c.cache,b},c.register("\x2e\x2f\x73\x72\x63\x2f\x6a\x73\x2f\x6d\x61\x67\x69\x63\x2e\x6a\x73",function(){var d=20,e="\x59\x65\x73\x21\x20\x69\x74\x20\x69\x73\x20\x67\x6f\x6f\x64\x2e",f=function(a,b){console.log("\x56\x61\x6c\x75\x65\x20\x6f\x66\x20\x78\x20\x3d\x20"+a+"\x3b\x20\x56\x61\x6c\x75\x65\x20\x6f\x66\x20\x74\x73\x74\x20\x3d\x20"+b)};f(d,e),f(6,8),f(6,9)}),c.register("\x2e\x2f\x73\x72\x63\x2f\x6a\x73\x2f\x6d\x61\x67\x69\x63\x32\x2e\x6a\x73",function(){var d=function(){console.log("\x6d\x61\x67\x69\x63\x32")};d()}),b.exports=c("\x2e\x2f\x73\x72\x63\x2f\x6a\x73\x2f\x6d\x61\x67\x69\x63\x2e\x6a\x73")}(require,module);
