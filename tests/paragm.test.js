const {convertS, noSpaces, pangrams} = require('../paragm');  



test ("input 'The quick 'to be 'the quick'" ,() => {
    expect(convertS('The quick')).toBe('the quick');
});

test ("input 'One Little Boy' to be 'one little boy'" ,() => {
    expect(convertS('One Little Boy') ).toBe('one little boy'); 
});
test ("input 'aaa aaa aaa' to be 'aaaaaaaaa'" ,() => {
    expect(noSpaces('aaa aaa aaa')).toBe('aaaaaaaaa');
});

// test ("input 'Aaa Aaa Aaa' not to be 'aaaaaaaaa'" ,() => {
//     expect(pangrams('Aaa Aaa Aaa')).not.toBe('aaaaaaaaa');
// });

test ("input 'Aaa Aaa Aaa' to be 'not pangram'" ,() => {
    expect(pangrams('Aaa Aaa Aaa')).toBe('not pangram');
});

test ("input 'The quick brown fox jumps over the lazy dog' to be 'pangram'" ,() => {
    expect(pangrams('The quick brown fox jumps over the lazy dog')).toBe('pangram');
});